from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/v1/auth/', include('djoser.urls')),
    path('api/v1/auth/', include('accounts.urls')),
    path('api/v1/auth/', include('djoser.urls.authtoken')),

    path('api/v1/', include('forms.urls')),
    path('api/v1/', include('support.urls')),
]
