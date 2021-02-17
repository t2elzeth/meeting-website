from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register("tickets", views.TicketViewSet)

urlpatterns = [
    path("support/", include(router.urls))
]
