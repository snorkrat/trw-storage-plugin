import os
from django.urls import path, include
from django.http import FileResponse, Http404
from rest_framework.routers import DefaultRouter
from .api import TRWCustodianViewSet, TRWInterestViewSet

router = DefaultRouter()
router.register(r'custodians', TRWCustodianViewSet, basename='trw-custodian')
router.register(r'interests', TRWInterestViewSet, basename='trw-interest')


def serve_panel_js(request):
    """Serve the compiled React panel JS directly from the plugin directory."""
    js_path = os.path.join(os.path.dirname(__file__), 'static', 'trw_storage', 'trw-storage-panel.js')
    if not os.path.exists(js_path):
        raise Http404('Panel JS not found — run npm run build in the plugin frontend directory')
    return FileResponse(open(js_path, 'rb'), content_type='application/javascript')


urlpatterns = [
    path('panel.js', serve_panel_js),
    path('api/', include(router.urls)),
]
