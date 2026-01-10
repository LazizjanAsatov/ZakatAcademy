from rest_framework import serializers
from django.contrib.auth import authenticate
from django.contrib.auth.password_validation import validate_password
from .models import User


class UserSerializer(serializers.ModelSerializer):
    """User serializer for profile display."""
    full_name = serializers.SerializerMethodField()
    
    class Meta:
        model = User
        fields = ('id', 'email', 'first_name', 'last_name', 'full_name', 'country', 'gender', 'is_active', 'created_at')
        read_only_fields = ('id', 'is_active', 'created_at')
    
    def get_full_name(self, obj):
        """Return full name combining first and last name."""
        parts = [obj.first_name, obj.last_name]
        return ' '.join(filter(None, parts)) or None


class SignupSerializer(serializers.ModelSerializer):
    """Serializer for user signup."""
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password_confirm = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('email', 'password', 'password_confirm', 'first_name', 'last_name', 'country', 'gender')

    def validate(self, attrs):
        if attrs['password'] != attrs['password_confirm']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        return attrs

    def create(self, validated_data):
        validated_data.pop('password_confirm')
        user = User.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', ''),
            country=validated_data.get('country', ''),
            gender=validated_data.get('gender', ''),
            is_active=False  # Requires admin approval
        )
        return user


class LoginSerializer(serializers.Serializer):
    """Serializer for user login."""
    email = serializers.EmailField(required=True)
    password = serializers.CharField(required=True, write_only=True)

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')

        if email and password:
            user = authenticate(username=email, password=password)
            if not user:
                raise serializers.ValidationError('Invalid email or password.')
            if not user.is_active:
                raise serializers.ValidationError('Account pending approval. Please wait for admin approval.')
            attrs['user'] = user
        else:
            raise serializers.ValidationError('Must include "email" and "password".')

        return attrs

