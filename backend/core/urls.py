from django.contrib import admin
from django.urls import path, include
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions

schema_view = get_schema_view(
    openapi.Info(
        title="IPTV",
        default_version='v1',
        description="My swagger description",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(url="https://telegram.me/t2elzeth"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/v1/auth/', include('djoser.urls')),
    path('api/v1/auth/', include('djoser.urls.authtoken')),

    path('api/v1/', include('forms.urls')),
    path('api/v1/', include('support.urls')),

    path('', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
]
