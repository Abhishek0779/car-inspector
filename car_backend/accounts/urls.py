from django.urls import path
from .views import SignupView, LoginView, LogoutView, CreateBookingView, UserProfileView

urlpatterns = [
    path('signup/', SignupView.as_view()),
    path('login/', LoginView.as_view()),
    path('logout/', LogoutView.as_view()),
    path('bookings/create/', CreateBookingView.as_view()),
    path('user/profile/', UserProfileView.as_view()),
]