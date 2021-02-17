from django.contrib.auth import get_user_model
from rest_framework import serializers

from .models import Ticket, TicketMessage

User = get_user_model()


class TicketMessageSenderSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["email", "full_name"]


class TicketMessageSerializer(serializers.ModelSerializer):
    sender = TicketMessageSenderSerializer(read_only=True)

    class Meta:
        model = TicketMessage
        fields = ["sender", "content"]
        read_only_fields = ["sender"]


class TicketMessagesSerializer(serializers.ModelSerializer):
    sender = TicketMessageSenderSerializer()

    class Meta:
        model = TicketMessage
        fields = ["sender", "content"]


class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = ["id", "title", "is_active"]
        read_only_fields = ["id"]


class TicketDetailSerializer(TicketSerializer):
    ticket_messages = TicketMessagesSerializer(source="ticket_messages.all", many=True)

    class Meta(TicketSerializer.Meta):
        model = Ticket
        fields = ["id", "title", "is_active", "ticket_messages"]
        read_only_fields = ["id", "is_active", "ticket_messages"]
