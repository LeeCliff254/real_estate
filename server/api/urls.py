from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.UserViewSet.as_view()),
    path('users/register/', views.UserCreate.as_view()),
    path('users/<int:pk>/', views.UserDetail.as_view()),
]
