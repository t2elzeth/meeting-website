from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.exceptions import ValidationError
# from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Questionnaire, AnswerSheet
from .serializers import (CreateQuestionnaireSerializer, QuestionnaireSerializer,
                          CreateAnswerSheetSerializer, AnswerSheetSerializer)


class QuestionnaireViewSet(viewsets.ModelViewSet):
    serializer_class = QuestionnaireSerializer
    queryset = Questionnaire.objects.all()
    # permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = "__all__"

    def filter_queryset(self, queryset):
        queryset = queryset.filter(owner=self.request.user)
        return super().filter_queryset(queryset)

    @action(methods=['post'], detail=True)
    def answer(self, request, pk=None):
        serializer = CreateAnswerSheetSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        answers = serializer.validated_data['answers']
        questions = self.get_object().questions.all()
        if len(answers) != len(questions):
            raise ValidationError({"Not enough answers": f"Questionnaire has {len(questions)} questions. "
                                                         f"Only {len(answers)} answers provided"})

        answer_sheet = serializer.save(from_user=request.user, to_questionnaire=self.get_object())
        for question, answer in zip(questions, answers):
            answer_sheet.answers.create(question=question, answer=answer)

        return Response(AnswerSheetSerializer(answer_sheet).data, status=status.HTTP_201_CREATED)

    @action(methods=['get'], detail=True)
    def answers(self, request, pk=None):
        answer_sheets = AnswerSheet.objects.filter(from_user=request.user, to_questionnaire=self.get_object())
        return Response(AnswerSheetSerializer(answer_sheets, many=True).data)

    def create(self, request, *args, **kwargs):
        user = self.request.user
        serializer = CreateQuestionnaireSerializer(data=request.data)
        serializer.is_valid()
        questionnaire = serializer.save(owner=user)

        for question in serializer.validated_data['questions']:
            questionnaire.questions.create(question=question)
        return Response(QuestionnaireSerializer(questionnaire).data)


class AnswerSheetViewSet(viewsets.ModelViewSet):
    serializer_class = AnswerSheetSerializer
    queryset = AnswerSheet.objects.all()
    # permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = "__all__"

    def filter_queryset(self, queryset):
        queryset = queryset.filter(from_user=self.request.user)
        return super().filter_queryset(queryset)
