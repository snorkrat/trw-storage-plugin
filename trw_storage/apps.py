from django.apps import AppConfig


class TRWStorageConfig(AppConfig):
    name = 'trw_storage'
    verbose_name = 'TRW Storage'

    def ready(self):
        pass
