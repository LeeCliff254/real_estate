from django.db import models
from django.contrib.auth.models import User

from django.contrib.auth.models import User
from django.db import models

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True)
    phone_number = models.CharField(max_length=20, blank=True)
    secondary_email = models.EmailField(blank=True)
    bio = models.TextField(blank=True)

    def __str__(self):
        return self.user.username


class Property(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=20)
    property_type = models.CharField(max_length=50)
    bedrooms = models.IntegerField()
    bathrooms = models.DecimalField(max_digits=4, decimal_places=1)
    square_footage = models.IntegerField()
    amenities = models.ManyToManyField('Amenity')
    images = models.ImageField(upload_to='property_images/', blank=True)

    def __str__(self):
        return self.title

class Amenity(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='amenity_images/', blank=True)

    def __str__(self):
        return self.name


class Transaction(models.Model):
    property = models.ForeignKey('Property', on_delete=models.CASCADE)
    buyer = models.ForeignKey('UserProfile', related_name='transactions_as_buyer', on_delete=models.CASCADE)
    seller = models.ForeignKey('UserProfile', related_name='transactions_as_seller', on_delete=models.CASCADE)
    transaction_date = models.DateField()
    transaction_type = models.CharField(max_length=20)  # 'sale' or 'rental'
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"Transaction #{self.pk}"
    
class Review(models.Model):
    property = models.ForeignKey('Property', on_delete=models.CASCADE)
    reviewer = models.ForeignKey('UserProfile', on_delete=models.CASCADE)
    rating = models.IntegerField()
    review_text = models.TextField()
    date_posted = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"Review for {self.property} by {self.reviewer}"