from django.contrib import admin
# from django.core.exceptions import ValidationError
# from django.forms import formset_factory
from django.forms.models import BaseInlineFormSet
# from django.urls import resolve
from django import forms

from .models import Questionnaire, Question, AnswerSheet, Answer


class AnswersInlineFormSet(BaseInlineFormSet):
    def clean(self):
        print(self.forms)
        return super().clean()


class QuestionInline(admin.StackedInline):
    model = Question
    extra = 0


class AnswerForm(forms.ModelForm):
    class Meta:
        model = Answer
        fields = ['answer_sheet', 'answer']


class AnswerInline(admin.StackedInline):
    model = Answer
    extra = 0
    form = AnswerForm


class QuestionnaireAdmin(admin.ModelAdmin):
    inlines = [QuestionInline]


class AnswerSheetAdmin(admin.ModelAdmin):
    inlines = [AnswerInline]

    # def save_formset(self, request, form, formset, change):
    #     if len(formset.cleaned_data) != form.cleaned_data['to_questionnaire'].questions.count():
    #         raise ValidationError("Not enough answers")
    #
    #     return super().save_formset(request, form, formset, change)


admin.site.register(Questionnaire, QuestionnaireAdmin)
admin.site.register(AnswerSheet, AnswerSheetAdmin)
