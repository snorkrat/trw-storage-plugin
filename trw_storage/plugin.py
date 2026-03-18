"""
TRW Storage Plugin for InvenTree.

Adds custodian (billing party) and interest (allocated/watching) tracking
to stock items, with full date history. Replaces the batch-code convention
previously used to identify stock owners.

Mixins used:
  - AppMixin    — registers Django models (TRWCustodian, TRWInterest)
  - UrlsMixin   — exposes REST API under /plugin/trw-storage/api/
  - UserInterfaceMixin — injects a panel on the stock item detail page
"""

from plugin import InvenTreePlugin
from plugin.mixins import AppMixin, UrlsMixin, UserInterfaceMixin


class TRWStoragePlugin(AppMixin, UrlsMixin, UserInterfaceMixin, InvenTreePlugin):

    NAME = 'TRWStorage'
    SLUG = 'trw-storage'
    TITLE = 'TRW Storage Assignments'
    DESCRIPTION = 'Track custodians and interests for stock items at The Roast Works.'
    VERSION = '1.0.3'
    AUTHOR = 'The Roast Works'

    # AppMixin: tells InvenTree which Django app to load
    APP_NAME = 'trw_storage'

    # UrlsMixin: the urls.py in this package
    def setup_urls(self):
        from .urls import urlpatterns
        return urlpatterns

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
