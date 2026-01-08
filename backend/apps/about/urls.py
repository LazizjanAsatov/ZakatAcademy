from django.urls import path
from .views import team_members, events, event_detail

urlpatterns = [
    path('team-members/', team_members, name='team-members'),
    path('events/', events, name='events'),
    path('events/<int:event_id>/', event_detail, name='event-detail'),
]
