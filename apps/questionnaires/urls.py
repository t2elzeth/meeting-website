from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register("", views.QuestionnaireViewSet)

urlpatterns = [
    path("create/", views.CreateQuestionnaireView.as_view()),
    path("", include(router.urls)),
]
