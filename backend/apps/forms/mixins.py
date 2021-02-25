from rest_framework import viewsets


class SerializerClassByActionMixin(viewsets.GenericViewSet):
    serializer_class_by_action = {}

    def get_serializer_class(self):
        base_serializer = super().get_serializer_class()
        return self.serializer_class_by_action.get(self.action, base_serializer)
