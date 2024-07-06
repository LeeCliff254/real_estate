from django.urls import path
from . import views

urlpatterns = [
    # users
    path('users/', views.UserViewSet.as_view()),
    path('users/register/', views.UserCreate.as_view()),
    path('users/<int:pk>/', views.UserDetail.as_view()),

    # profiles
    path('profiles/', views.ProfileList.as_view()),
    path('profiles/<int:pk>/', views.ProfileDetail.as_view()),

    # properties
    path('properties/', views.PropertyListCreate.as_view()),
    path('properties/<int:pk>/', views.PropertyDetail.as_view()),

    # amenities
    path('amenities/', views.AmenityListCreate.as_view()),
    path('amenities/<int:pk>/', views.AmenityDetail.as_view()),

    # transactions
    path('transactions/', views.TransactionListCreate.as_view()),
    path('transactions/<int:pk>/', views.TransactionDetail.as_view()),

    # reviews
    path('reviews/', views.ReviewListCreate.as_view()),
    path('reviews/<int:pk>/', views.ReviewDetail.as_view()),
]
