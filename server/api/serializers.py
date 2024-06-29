from django.contrib.auth.models import User
from rest_framework import serializers

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