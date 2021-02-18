from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from rest_framework.decorators import action

from .models import Questionnaire, AnswerSheet
from .serializers import (CreateQuestionnaireSerializer, QuestionnaireSerializer, QuestionnaireDetailSerializer,
                          CreateAnswerSheetSerializer, AnswerSheetSerializer)
from .mixins import SerializerClassByAction
from .filters import QuestionnaireFilter


from rest_framework.permissions import IsAuthenticated


class QuestionnaireViewSet(viewsets.ModelViewSet, SerializerClassByAction):
    serializer_class = QuestionnaireSerializer
    queryset = Questionnaire.objects.all()
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_class = QuestionnaireFilter
    serializer_class_by_action = {
        "answer": CreateAnswerSheetSerializer,
        "answers": AnswerSheetSerializer,
        "create": CreateQuestionnaireSerializer,
        "retrieve": QuestionnaireDetailSerializer
    }

    def filter_queryset(self, queryset):
        if self.action == "answers":
            queryset = AnswerSheet.objects.filter(to_questionnaire=self.get_object(), to_questionnaire__owner=self.request.user)
            return super().filter_queryset(queryset)
        return super().filter_queryset(queryset)

    @action(methods=['post'], detail=True)
    def answer(self, request, pk=None):
        return self.create(request, pk)

    def perform_create(self, serializer):
        if self.action == "answer":
            answer_sheet = serializer.save(from_user=self.request.user, to_questionnaire=self.get_object())
            questions = self.get_object().questions.all()
            answers = serializer.validated_data["answers"]
            for question, answer in zip(questions, answers):
                answer_sheet.answers.create(question=question, answer=answer)
        elif self.action == "create":
            questionnaire = serializer.save(owner=self.request.user)
            for question in serializer.validated_data['questions']:
                questionnaire.questions.create(question=question)
        else:
            super().perform_create(serializer)

    @action(methods=['get'], detail=True)
    def answers(self, request, pk=None):
        return self.list(request, pk)


class AnswerSheetViewSet(viewsets.ModelViewSet):
    serializer_class = AnswerSheetSerializer
    queryset = AnswerSheet.objects.all()
    # permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = "__all__"

    def filter_queryset(self, queryset):
        queryset = queryset.filter(from_user=self.request.user)
        return super().filter_queryset(queryset)
