from django.contrib.auth.models import User
from rest_framework import serializers
from . import models

# user
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'email', 'username', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

    def validate(self, attrs):
        required_fields = ['first_name', 'last_name', 'email', 'username', 'password']
        
        for field in required_fields:
            if field not in attrs or attrs[field] == '':
                raise serializers.ValidationError({field: f"{field.capitalize()} field is required."})
        
        return attrs
    
# profile
class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.UserProfile
        fields = '__all__'

# property
class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Property
        fields = '__all__'

# amenity
class AmenitySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Amenity
        fields = '__all__'

# transaction
class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Transaction
        fields = '__all__'

# review
class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Review
        fields = '__all__'