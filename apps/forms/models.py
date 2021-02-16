from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Questionnaire(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='questionnaires')
    title = models.CharField(max_length=255, default='My title')

    def __str__(self):
        return f"{self.owner.get_username()}'s questionnaire ID: {self.id}"


class Question(models.Model):
    questionnaire = models.ForeignKey(Questionnaire, on_delete=models.CASCADE, related_name='questions')
    question = models.TextField()

    def __str__(self):
        return f"{self.questionnaire.id}: {self.question}"


class AnswerSheet(models.Model):
    from_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='answer_sheets')
    to_questionnaire = models.ForeignKey(Questionnaire, on_delete=models.CASCADE, related_name='answer_sheets')


class Answer(models.Model):
    answer_sheet = models.ForeignKey(AnswerSheet, on_delete=models.CASCADE, related_name='answers')
    question = models.ForeignKey(Question, on_delete=models.CASCADE, blank=True, null=True)
    answer = models.TextField()
