from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register("questionnaires", views.QuestionnaireViewSet)
router.register("answers", views.AnswerSheetViewSet)

urlpatterns = [
    path("forms/", include(router.urls)),
]
