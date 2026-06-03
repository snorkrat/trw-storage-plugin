import logging

from django.apps import AppConfig

logger = logging.getLogger('trw_storage')


class TRWStorageConfig(AppConfig):
    name = 'trw_storage'
    verbose_name = 'TRW Storage'

    def ready(self):
        # Import signal handlers so they register on app load.
        from . import signals  # noqa: F401
        logger.info('trw_storage: AppConfig.ready() ran — split-inheritance signal registered')
