from django.contrib import admin

from .models import Questionnaire, Question, AnswerSheet, Answer

admin.site.register(Questionnaire)
admin.site.register(Question)
admin.site.register(AnswerSheet)
admin.site.register(Answer)
