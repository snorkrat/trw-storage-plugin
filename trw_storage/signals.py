"""
Signal handlers for the TRW Storage plugin.

When a stock item is split in InvenTree, the new child item is created with no
custodian or interest records — meaning it falls out of billing entirely until
someone adds them by hand. This handler copies the parent's *active* custodian
and *active* interests onto the new child, dated from the split day, so billing
remains continuous.

We hook the creation of the "Split from parent item" tracking entry
(tracking_type 40) rather than StockItem.post_save: by the time that entry is
written, both the parent and child stock items fully exist and the parent link
is established (the child's parent_id is not reliably set at the moment its own
post_save fires, especially given InvenTree's MPTT tree handling). For a type-40
entry, `deltas['stockitem']` is the PARENT pk and `item` is the CHILD.

InvenTree's split reduces the parent's quantity and creates the child with the
split quantity, so billing parent-reduced + child = the original total (no
double-billing — it closes a previous under-billing gap).
"""

import datetime
import logging

from django.db.models.signals import post_save
from django.dispatch import receiver

logger = logging.getLogger('trw_storage')

# InvenTree StockHistoryCode.SPLIT_FROM_PARENT
SPLIT_FROM_PARENT = 40


@receiver(post_save, sender='stock.StockItemTracking', dispatch_uid='trw_storage_inherit_on_split')
def inherit_assignments_on_split(sender, instance, created, **kwargs):
    """
    On creation of a "split from parent" tracking entry, copy the parent's
    active custodian and active interests to the newly split child item.

    Never raises — a failure here must not block the warehouse split operation.
    """
    if not created or instance.tracking_type != SPLIT_FROM_PARENT:
        return

    try:
        from .models import TRWCustodian, TRWInterest

        child_id = instance.item_id
        parent_id = (instance.deltas or {}).get('stockitem')
        if not child_id or not parent_id:
            return

        # Use the tracking entry's own date as the split date (= today for a
        # live split), falling back to today if unavailable.
        entry_date = getattr(instance, 'date', None)
        split_date = entry_date.date() if hasattr(entry_date, 'date') else datetime.date.today()

        # ── Custodian ────────────────────────────────────────────────
        # Idempotency: skip if the child somehow already has a custodian.
        if not TRWCustodian.objects.filter(stock_item_id=child_id).exists():
            parent_custodian = TRWCustodian.objects.filter(
                stock_item_id=parent_id,
                end_date__isnull=True,
            ).first()

            if parent_custodian:
                TRWCustodian.objects.create(
                    stock_item_id=child_id,
                    company_id=parent_custodian.company_id,
                    start_date=split_date,
                    notes=f'Auto-assigned on split from #{parent_id}',
                    created_by=None,
                )
                logger.info(
                    'trw_storage: copied custodian (company %s) from #%s to split child #%s',
                    parent_custodian.company_id, parent_id, child_id,
                )

        # ── Interests ────────────────────────────────────────────────
        # Idempotency: skip if the child already has any interest records.
        if not TRWInterest.objects.filter(stock_item_id=child_id).exists():
            parent_interests = TRWInterest.objects.filter(
                stock_item_id=parent_id,
                end_date__isnull=True,
            )
            for interest in parent_interests:
                TRWInterest.objects.create(
                    stock_item_id=child_id,
                    company_id=interest.company_id,
                    start_date=split_date,
                    notes=f'Auto-assigned on split from #{parent_id}',
                    created_by=None,
                )
                logger.info(
                    'trw_storage: copied interest (company %s) from #%s to split child #%s',
                    interest.company_id, parent_id, child_id,
                )

    except Exception:
        # Swallow and log — must never break the split operation.
        logger.exception(
            'trw_storage: failed to inherit assignments onto split child (tracking #%s)',
            getattr(instance, 'pk', '?'),
        )
