from rest_framework import serializers
from .models import Booking,User

class SignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['name', 'email', 'password', 'city']

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'
        read_only_fields = ['user', 'reference_number', 'created_at']

class UserProfileSerializer(serializers.ModelSerializer):
    bookings = BookingSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['name', 'email', 'city', 'bookings']