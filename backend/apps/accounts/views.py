from django.contrib.auth import get_user_model
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .serializers import UserSerializer
from forms.serializers import QuestionnaireSerializer, CreateSendQuestionnaireSerializer, SendQuestionnaireSerializer

User = get_user_model()


class UserViewSet(viewsets.GenericViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    @action(methods=["get"], detail=True)
    def questionnaires(self, request, pk=None):
        return Response(QuestionnaireSerializer(self.get_object().questionnaires.all(), many=True).data)

    @action(methods=["post"], detail=True)
    def send_questionnaire(self, request, pk=None):
        serializer = CreateSendQuestionnaireSerializer(data=request.data)
        serializer.is_valid()
        serializer.save(from_user=self.request.user, to_user=self.get_object())
        return Response(serializer.data)

    @action(methods=["get"], detail=True)
    def received_questionnaires(self, request, pk=None):
        return Response(SendQuestionnaireSerializer(self.get_object().received_questionnaires.all(), many=True).data)
