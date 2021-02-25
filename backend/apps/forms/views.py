from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from rest_framework.decorators import action

from .models import Questionnaire, AnswerSheet
from .serializers import (CreateQuestionnaireSerializer, QuestionnaireSerializer,
                          CreateAnswerSheetSerializer, AnswerSheetSerializer, CreateSendQuestionnaireSerializer,
                          SendQuestionnaireSerializer)
from .mixins import SerializerClassByActionMixin
from .filters import QuestionnaireFilter

from rest_framework.permissions import IsAuthenticated


class QuestionnaireViewSet(viewsets.ModelViewSet, SerializerClassByActionMixin):
    serializer_class = QuestionnaireSerializer
    queryset = Questionnaire.objects.all()
    permission_classes = [IsAuthenticated]
    filterset_class = QuestionnaireFilter
    serializer_class_by_action = {
        "answer": CreateAnswerSheetSerializer,
        "answers": AnswerSheetSerializer,
        "create": CreateQuestionnaireSerializer,
        "send": CreateSendQuestionnaireSerializer,
        "received": SendQuestionnaireSerializer
    }

    def filter_queryset(self, queryset):
        if self.action == "answers":
            return self.get_object().answer_sheets.filter(to_questionnaire__owner=self.request.user)
        elif self.action == "received":
            return self.request.user.received_questionnaires.all()
        elif self.action == "my":
            return self.request.user.questionnaires.all()
        elif self.action in ["send", "retrieve"]:
            return super().filter_queryset(queryset)

        queryset = queryset.exclude(owner=self.request.user)
        return super().filter_queryset(queryset)

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
        elif self.action == "send":
            serializer.save(from_user=self.request.user, questionnaire=self.get_object())
        else:
            super().perform_create(serializer)

    @action(methods=['post'], detail=True)
    def answer(self, request, pk=None):
        return self.create(request, pk)

    @action(methods=['get'], detail=True)
    def answers(self, request, pk=None):
        return self.list(request, pk)

    @action(methods=["post"], detail=True)
    def send(self, request, pk):
        return self.create(request, pk)

    @action(methods=["get"], detail=False)
    def received(self, request):
        return self.list(request)

    @action(methods=["get"], detail=False)
    def my(self, request):
        return self.list(request)


class AnswerSheetViewSet(viewsets.ModelViewSet, SerializerClassByActionMixin):
    serializer_class = AnswerSheetSerializer
    queryset = AnswerSheet.objects.all()
    # permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = "__all__"
    serializer_class_by_action = {
        "my": AnswerSheetSerializer,
        "to_my_questionnaires": AnswerSheetSerializer
    }

    def filter_queryset(self, queryset):
        if self.action == "my":
            return AnswerSheet.objects.filter(from_user=self.request.user)
        if self.action == "to_my_questionnaires":
            myquestionnaires = self.request.user.questionnaires.all()
            return AnswerSheet.objects.filter(to_questionnaire__in=myquestionnaires)
        else:
            return super().filter_queryset(queryset)

    @action(methods=["get"], detail=False)
    def my(self, request):
        return self.list(request)

    @action(methods=["get"], detail=False)
    def to_my_questionnaires(self, request):
        return self.list(request)
