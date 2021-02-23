from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from .models import Questionnaire, Question, AnswerSheet, Answer, ReceivedQuestionnaire

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
    class Meta:
        model = Question
        fields = ["question"]


class FromUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "full_name"]


class QuestionnaireSerializer(serializers.ModelSerializer):
    owner = FromUserSerializer()
    questions = QuestionSerializer(source="questions.all", many=True)

    class Meta:
        model = Questionnaire
        fields = ['id', 'owner', 'title', 'questions']
        read_only_fields = ['id', 'owner', 'questions']


class ToQuestionnaireSerializer(serializers.ModelSerializer):
    class Meta:
        model = Questionnaire
        fields = ["id", "title"]


class CreateAnswerSheetSerializer(serializers.ModelSerializer):
    answers = serializers.ListField(child=serializers.CharField(), write_only=True)
    from_user = FromUserSerializer(read_only=True)
    to_questionnaire = ToQuestionnaireSerializer(read_only=True)

    class Meta:
        model = AnswerSheet
        fields = ['id', 'from_user', 'to_questionnaire', 'answers']
        read_only_fields = ['id']

    def validate_answers(self, value):
        questions = self.context["view"].get_object().questions.all()
        if len(value) != len(questions):
            raise ValidationError({"Not enough answers": f"Questionnaire has {len(questions)} questions. "
                                                         f"Only {len(value)} answers provided"})
        return value

    def create(self, validated_data):
        validated_data.pop("answers", None)
        return super().create(validated_data)


class AnswerSerializer(serializers.ModelSerializer):
    question = serializers.CharField(source="question.question")

    class Meta:
        model = Answer
        fields = ["question", "answer"]


class AnswerSheetSerializer(serializers.ModelSerializer):
    from_user = FromUserSerializer()

    answers = AnswerSerializer(source="answers.all", many=True)
    to_questionnaire = ToQuestionnaireSerializer()

    class Meta:
        model = AnswerSheet
        fields = ['id', 'from_user', 'to_questionnaire', 'answers']
        read_only_fields = ['id', 'from_user', 'to_questionnaire', 'answers']


class CreateSendQuestionnaireSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReceivedQuestionnaire
        fields = ["to_user"]


class SendQuestionnaireSerializer(serializers.ModelSerializer):
    owner = FromUserSerializer(source="from_user")
    to_user = FromUserSerializer()
    questionnaire = QuestionnaireSerializer()

    class Meta:
        model = ReceivedQuestionnaire
        fields = ["owner", "to_user", "questionnaire"]
