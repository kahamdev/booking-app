from django.shortcuts import render
from rest_framework import viewsets
from .models import AbcSelectionRoute,AbcDetailRoute,AbcPersonDetail
from .serializers import AbcRouteSelectionSerializers,AbcRouteDetailSerializers,AbcPersonDetailSerializers


class AbcRouteSelectionViewSet(viewsets.ModelViewSet):
    queryset = AbcSelectionRoute.objects.all()
    serializer_class = AbcRouteSelectionSerializers

class AbcRouteDetailViewSet(viewsets.ModelViewSet):
    queryset = AbcDetailRoute.objects.all()
    serializer_class = AbcRouteDetailSerializers

class AbcPersonDetailViewSet(viewsets.ModelViewSet):
    queryset = AbcPersonDetail.objects.all()
    serializer_class = AbcPersonDetailSerializers
