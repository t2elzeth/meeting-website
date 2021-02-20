from django.contrib.auth import get_user_model
from rest_framework import viewsets
from rest_framework.decorators import action

from .filters import UserFilter
from .serializers import UserSerializer

User = get_user_model()


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    filterset_class = UserFilter
