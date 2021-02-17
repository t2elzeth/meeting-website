from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated

from .models import Ticket
from .serializers import TicketSerializer, TicketMessageSerializer, TicketDetailSerializer
from forms.mixins import SerializerClassByAction


class TicketViewSet(viewsets.ModelViewSet, SerializerClassByAction):
    serializer_class = TicketSerializer
    queryset = Ticket.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class_by_action = {
        "message": TicketMessageSerializer,
        "retrieve": TicketDetailSerializer
    }

    @action(methods=["post"], detail=True)
    def message(self, request, pk=None):
        return self.create(request, pk)

    def perform_create(self, serializer):
        save_kwargs = {}
        if self.action == "message":
            save_kwargs.update({"ticket": self.get_object(), "sender": self.request.user})
        elif self.action == "create":
            save_kwargs.update({"owner": self.request.user})

        serializer.save(**save_kwargs)
