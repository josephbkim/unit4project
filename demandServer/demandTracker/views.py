from django.shortcuts import render
from rest_framework import viewsets
from .serializers import *
from .models import *


class StateView(viewsets.ModelViewSet):
    serializer_class = StateSerializer
    queryset = State.objects.all()


class SiteView(viewsets.ModelViewSet):
    serializer_class = SiteSerializer
    queryset = Site.objects.all()


class StoreView(viewsets.ModelViewSet):
    serializer_class = StoreSerializer
    queryset = Store.objects.all()


class DeliveryView(viewsets.ModelViewSet):
    serializer_class = DeliverySerializer
    queryset = Deliver.objects.all()


class CustomerView(viewsets.ModelViewSet):
    serializer_class = CustomerSerializer
    queryset = Customer.objects.all()
