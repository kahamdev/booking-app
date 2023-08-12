from rest_framework import serializers
from .models import AbcSelectionRoute,AbcDetailRoute,AbcPersonDetail

class AbcRouteSelectionSerializers(serializers.ModelSerializer):
    class Meta:
        model = AbcSelectionRoute
        fields = "__all__"

class AbcRouteDetailSerializers(serializers.ModelSerializer):
    class Meta:
        model = AbcDetailRoute
        fields = "__all__"
class AbcPersonDetailSerializers(serializers.ModelSerializer):
    class Meta:
        model = AbcPersonDetail
        fields = "__all__"