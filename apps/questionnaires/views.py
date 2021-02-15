from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics, viewsets
from rest_framework.permissions import IsAuthenticated

from .models import Questionnaire
from .serializers import CreateQuestionnaireSerializer, QuestionnaireSerializer


class CreateQuestionnaireView(generics.CreateAPIView):
    serializer_class = CreateQuestionnaireSerializer
    queryset = Questionnaire.objects.all()
    permission_classes = [IsAuthenticated]


class QuestionnaireViewSet(viewsets.ModelViewSet):
    serializer_class = QuestionnaireSerializer
    queryset = Questionnaire.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_fields = "__all__"

    def filter_queryset(self, queryset):
        queryset = queryset.filter(owner=self.request.user)
        return super().filter_queryset(queryset)
