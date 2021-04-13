from django.contrib.auth import get_user_model
from rest_framework import serializers

from . import models

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = models.User
        fields = [
            'id',
            'full_name',
            'email',
            'age',
            'city',
            'marrital_status',
            'about',
            'sex',
            'religion',
            'password',
            'password2',
        ]
        read_only_fields = ["id"]
        extra_kwargs = {'password': {'write_only': True}}
        ref_name = "user_serializer"

    def validate(self, data: dict):
        """Custom data validation"""

        # Check if given passwords match
        if data.get('password') != data.get('password2'):
            raise serializers.ValidationError({'password': "Passwords didn't match"})

        return data

    @property
    def model(self):
        return self.Meta.model

    def create(self, validated_data: dict):
        """Create user"""
        validated_data.pop("password2", None)
        return self.model.objects.create_user(**validated_data)
