"""
TRW Storage Plugin for InvenTree.

Adds custodian (billing party) and interest (allocated/watching) tracking
to stock items, with full date history. Replaces the batch-code convention
previously used to identify stock owners.

Mixins used:
  - AppMixin    — registers Django models (TRWCustodian, TRWInterest)
  - UrlsMixin   — exposes REST API under /plugin/trw-storage/api/
  - UserInterfaceMixin — injects a panel on the stock item detail page
  - EventMixin  — reacts to the 'stockitem.split' event to inherit assignments
"""

import datetime
import logging

from plugin import InvenTreePlugin
from plugin.mixins import AppMixin, UrlsMixin, UserInterfaceMixin, EventMixin

logger = logging.getLogger('trw_storage')

# InvenTree StockEvents.ITEM_SPLIT — fired by StockItem.splitStock() with
# kwargs id=<new child pk>, parent=<parent pk>.
EVENT_ITEM_SPLIT = 'stockitem.split'


class TRWStoragePlugin(AppMixin, UrlsMixin, UserInterfaceMixin, EventMixin, InvenTreePlugin):

    NAME = 'TRWStorage'
    SLUG = 'trw-storage'
    TITLE = 'TRW Storage Assignments'
    DESCRIPTION = 'Track custodians and interests for stock items at The Roast Works.'
    VERSION = '1.0.17'
    AUTHOR = 'The Roast Works'

    # AppMixin: tells InvenTree which Django app to load
    APP_NAME = 'trw_storage'

    # UrlsMixin: the urls.py in this package
    def setup_urls(self):
        from .urls import urlpatterns
        return urlpatterns

    # ── EventMixin ────────────────────────────────────────────────────
    # React to a stock item split: copy the parent's active custodian and
    # active interests onto the newly created child so billing stays
    # continuous. (InvenTree's split reduces the parent qty and creates the
    # child with the split qty, so parent-reduced + child = original total —
    # no double-billing; it closes a previous under-billing gap.)
    #
    # Requires "Enable Event Integration" to be ON and the background worker
    # to be running — process_event runs asynchronously in the worker.

    def wants_process_event(self, event):
        """Synchronous fast filter — only the split event reaches the worker."""
        return event == EVENT_ITEM_SPLIT

    def process_event(self, event, *args, **kwargs):
        if event != EVENT_ITEM_SPLIT:
            return

        child_id = kwargs.get('id')
        parent_id = kwargs.get('parent')
        if not child_id or not parent_id:
            logger.warning(
                'trw_storage: stockitem.split missing id/parent (id=%s parent=%s)',
                child_id, parent_id,
            )
            return

        self._inherit_assignments(parent_id, child_id)

    def _inherit_assignments(self, parent_id, child_id):
        """Copy active custodian + active interests from parent to child. Never raises."""
        try:
            from .models import TRWCustodian, TRWInterest

            split_date = datetime.date.today()

            # ── Custodian ──────────────────────────────────────────────
            # Idempotency: skip if the child already has a custodian.
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

            # ── Interests ──────────────────────────────────────────────
            # Idempotency: skip if the child already has any interest records.
            if not TRWInterest.objects.filter(stock_item_id=child_id).exists():
                for interest in TRWInterest.objects.filter(
                    stock_item_id=parent_id,
                    end_date__isnull=True,
                ):
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
            # Swallow and log — must never disrupt InvenTree's worker.
            logger.exception(
                'trw_storage: failed to inherit assignments from #%s to #%s',
                parent_id, child_id,
            )

    # UserInterfaceMixin: inject a panel on the stock item detail page
    def get_ui_panels(self, request, context=None, **kwargs):
        panels = []

        if context is None:
            return panels

        target_model = context.get('target_model', '')
        target_id = context.get('target_id', None)

        if target_model == 'stockitem' and target_id is not None:
            panels.append({
                'key': 'trw-storage',
                'title': 'TRW Storage',
                'icon': 'ti:building-warehouse:outline',
                'source': '/plugin/trw-storage/panel.js',
                'context': {
                    'stockItemId': target_id,
                    'apiBase': '/plugin/trw-storage/api',
                },
            })

        return panels
