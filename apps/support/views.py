from rest_framework import viewsets

from .models import Ticket, TicketMessage


class TicketViewSet(viewsets.ModelViewSet):
    queryset = Ticket.objects.all()
