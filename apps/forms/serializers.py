from django.contrib.auth import get_user_model
from rest_framework import serializers

from .models import Questionnaire, Question, AnswerSheet, Answer

User = get_user_model()


class CreateQuestionnaireSerializer(serializers.ModelSerializer):
    questions = serializers.ListField(child=serializers.CharField(), write_only=True)

    class Meta:
        model = Questionnaire
        fields = ['title', 'questions']

    def create(self, validated_data):
        validated_data.pop("questions", None)
        return super().create(validated_data)


class QuestionSerializer(serializers.ModelSerializer):
    question = serializers.SerializerMethodField("_question")

    def _question(self, question_instance):
        return question_instance.question

    class Meta:
        model = Question
        fields = ["question"]


class QuestionnaireSerializer(serializers.ModelSerializer):
    questions = serializers.SerializerMethodField('_questions')

    def _questions(self, questionnaire_instance):
        return QuestionSerializer(questionnaire_instance.questions.all(), many=True).data

    class Meta:
        model = Questionnaire
        fields = ['id', 'title', 'questions']
        read_only_fields = ['id', 'questions']


class CreateAnswerSheetSerializer(serializers.ModelSerializer):
    answers = serializers.ListField(child=serializers.CharField(), write_only=True)

    class Meta:
        model = AnswerSheet
        fields = ['answers']

    def create(self, validated_data):
        validated_data.pop("answers", None)
        return super().create(validated_data)


class FromUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["email", "full_name"]


class AnswerSerializer(serializers.ModelSerializer):
    question = serializers.SerializerMethodField("_question")

    def _question(self, answer_instance):
        return answer_instance.question.question

    class Meta:
        model = Answer
        fields = ["question", "answer"]


class ToQuestionnaireSerializer(serializers.ModelSerializer):
    class Meta:
        model = Questionnaire
        fields = ["title"]


class AnswerSheetSerializer(serializers.ModelSerializer):
    from_user = FromUserSerializer()

    answers = serializers.SerializerMethodField('_answers')
    to_questionnaire = ToQuestionnaireSerializer()

    def _answers(self, answer_sheet_instance):
        return AnswerSerializer(answer_sheet_instance.answers.all(), many=True).data

    class Meta:
        model = AnswerSheet
        fields = ['id', 'from_user', 'to_questionnaire', 'answers']
        read_only_fields = ['id', 'from_user', 'to_questionnaire', 'answers']
