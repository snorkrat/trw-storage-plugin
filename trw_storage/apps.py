from django.apps import AppConfig


class TRWStorageConfig(AppConfig):
    name = 'trw_storage'
    verbose_name = 'TRW Storage'

    def ready(self):
        # Import signal handlers so they register on app load.
        from . import signals  # noqa: F401
