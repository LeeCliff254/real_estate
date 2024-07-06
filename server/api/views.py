from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from . import models
from . import serializers

# Create your views here.
# user
class UserCreate(generics.CreateAPIView):
    serializer_class = serializers.UserSerializer
    queryset = User.objects.all()

class UserViewSet(generics.ListAPIView):
    serializer_class = serializers.UserSerializer
    queryset = User.objects.all()

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.UserSerializer
    queryset = User.objects.all()
    # permission_classes = [IsAuthenticated]

    # def get_queryset(self):
    #     return User.objects.filter(user=self.request.user)

# profile
# automatically created on sign up
class ProfileList(generics.ListAPIView):
    serializer_class = serializers.UserProfileSerializer
    queryset = models.UserProfile.objects.all()

class ProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.UserProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return models.UserProfile.objects.filter(user=self.request.user)
    
# property
class PropertyListCreate(generics.ListCreateAPIView):
    serializer_class = serializers.PropertySerializer
    queryset = models.Property.objects.all()

class PropertyDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.PropertySerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return models.Property.objects.filter(user=self.request.user)

# amenity
class AmenityListCreate(generics.ListCreateAPIView):
    serializer_class = serializers.AmenitySerializer
    queryset = models.Amenity.objects.all()

class AmenityDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.AmenitySerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return models.Amenity.objects.filter(user=self.request.user)

# transaction
class TransactionListCreate(generics.ListCreateAPIView):
    serializer_class = serializers.TransactionSerializer
    queryset = models.Transaction.objects.all()

class TransactionDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.TransactionSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return models.Transaction.objects.filter(user=self.request.user)

# review
class ReviewListCreate(generics.ListCreateAPIView):
    serializer_class = serializers.ReviewSerializer
    queryset = models.Review.objects.all()

class ReviewDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.ReviewSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return models.Review.objects.filter(user=self.request.user)