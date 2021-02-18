from django.contrib import admin

from .models import Questionnaire, Question, AnswerSheet, Answer, ReceivedQuestionnaire

admin.site.register(Questionnaire)
admin.site.register(Question)
admin.site.register(AnswerSheet)
admin.site.register(Answer)
admin.site.register(ReceivedQuestionnaire)
