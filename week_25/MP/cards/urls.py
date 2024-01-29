from django.urls import path
from .views import CardListView, CardDetailView, UserProfileView, BuyCardView, SellCardView

urlpatterns = [
    path('cards/', CardListView.as_view(), name='card-list'),
    path('cards/<int:card_id>/', CardDetailView.as_view(), name='card-detail'),
    path('profile/<int:user_id>/', UserProfileView.as_view(), name='user-profile'),
    path('cards/<int:card_id>/buy/<int:user_id>/', BuyCardView.as_view(), name='buy-card'),
    path('cards/<int:card_id>/sell/<int:user_id>/', SellCardView.as_view(), name='sell-card'),
]
