from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
import uuid
from django.conf import settings

class UserManager(BaseUserManager):
    def create_user(self, email, name, city, password=None):
        if not email:
            raise ValueError("Users must have an email address")
        email = self.normalize_email(email)
        user = self.model(email=email, name=name, city=city)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, city, password):
        user = self.create_user(email, name, city, password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser, PermissionsMixin):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    city = models.CharField(max_length=100)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'city']

    def __str__(self):
        return self.email



class Booking(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='bookings')
    package = models.CharField(max_length=100)
    car_make = models.CharField(max_length=100)
    car_model = models.CharField(max_length=100)
    year = models.CharField(max_length=4)
    registration_number = models.CharField(max_length=20)
    
    schedule_date = models.CharField(max_length=100)
    schedule_time = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    address = models.TextField()
    city = models.CharField(max_length=100)

    card_number = models.CharField(max_length=20)
    expiry_date = models.CharField(max_length=10)
    cvv = models.CharField(max_length=4)
    card_holder_name = models.CharField(max_length=100)

    reference_number = models.CharField(max_length=100, unique=True, default=uuid.uuid4)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.reference_number} - {self.user.email}"
