import django_filters

from .models import Questionnaire


class QuestionnaireFilter(django_filters.rest_framework.FilterSet):
    title = django_filters.CharFilter(lookup_expr="icontains",)

    class Meta:
        model = Questionnaire
        fields = ["title"]
