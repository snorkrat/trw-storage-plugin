"""
Signal handlers for the TRW Storage plugin.

When a stock item is split in InvenTree, the new child item is created with no
custodian or interest records — meaning it falls out of billing entirely until
someone adds them by hand. This handler copies the parent's *active* custodian
and *active* interests onto the new child, dated from the split day, so billing
remains continuous.

InvenTree's split reduces the parent's quantity and creates the child with the
split quantity, so billing parent-reduced + child = the original total (no
double-billing — it closes a previous under-billing gap).
"""

import datetime
import logging

from django.db.models.signals import post_save
from django.dispatch import receiver

logger = logging.getLogger('trw_storage')


@receiver(post_save, sender='stock.StockItem', dispatch_uid='trw_storage_inherit_on_split')
def inherit_assignments_on_split(sender, instance, created, **kwargs):
    """
    On creation of a stock item that was split from a parent (parent_id set),
    copy the parent's active custodian and active interests to the child.

    Never raises — a failure here must not block the warehouse split operation.
    """
    # Only act on brand-new items that were split from a parent.
    if not created or instance.parent_id is None:
        return

    try:
        from .models import TRWCustodian, TRWInterest

        child_id = instance.pk
        parent_id = instance.parent_id
        split_date = datetime.date.today()

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
            'trw_storage: failed to inherit assignments onto split child #%s',
            getattr(instance, 'pk', '?'),
        )
