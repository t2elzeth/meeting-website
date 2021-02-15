from rest_framework import serializers

from .models import Questionnaire, Question


class CreateQuestionnaireSerializer(serializers.ModelSerializer):
    questions = serializers.ListField(child=serializers.CharField(), write_only=True)

    class Meta:
        model = Questionnaire
        fields = ['id', 'title', 'questions']
        read_only_fields = ['id']

    def create(self, validated_data):
        user = self.context['request'].user
        questionnaire = Questionnaire.objects.create(owner=user, **validated_data)

        for question in validated_data['questions']:
            Question.objects.create(questionnaire=questionnaire, question=question)
        return questionnaire


class QuestionnaireSerializer(serializers.ModelSerializer):
    questions = serializers.SerializerMethodField('_questions')

    def _questions(self, obj):
        return [question.question for question in obj.questions.all()]

    class Meta:
        model = Questionnaire
        fields = ['id', 'title', 'questions']
        read_only_fields = ['id', 'questions']
