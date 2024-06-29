from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from . import serializers

# Create your views here.
class UserCreate(generics.CreateAPIView):
    serializer_class = serializers.UserSerializer
    queryset = User.objects.all()

class UserViewSet(generics.ListAPIView):
    serializer_class = serializers.UserSerializer
    queryset = User.objects.all()

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.UserSerializer
    queryset = User.objects.all()