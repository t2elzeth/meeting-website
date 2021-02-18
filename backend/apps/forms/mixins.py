from rest_framework import viewsets


class SerializerClassByAction(viewsets.GenericViewSet):
    serializer_class_by_action = {}

    def get_serializer_class(self):
        serializer = super().get_serializer_class()
        return self.serializer_class_by_action.get(self.action, serializer)
