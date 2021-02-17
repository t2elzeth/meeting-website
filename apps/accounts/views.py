from django.contrib.auth import get_user_model
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .serializers import UserSerializer
from forms.serializers import QuestionnaireSerializer

User = get_user_model()


class UserViewSet(viewsets.GenericViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    @action(methods=["get"], detail=True)
    def questionnaires(self, request, pk=None):
        return Response(QuestionnaireSerializer(self.get_object().questionnaires.all(), many=True).data)
