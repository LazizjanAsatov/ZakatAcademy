from rest_framework import serializers
from .models import TeamMember, Event


class TeamMemberSerializer(serializers.ModelSerializer):
    """Team member serializer."""
    role_display = serializers.CharField(source='get_role_display', read_only=True)
    
    class Meta:
        model = TeamMember
        fields = (
            'id', 'name', 'role', 'role_display', 'position', 'bio', 
            'photo_url', 'email', 'linkedin_url', 'twitter_url', 
            'order', 'created_at', 'updated_at'
        )


class EventSerializer(serializers.ModelSerializer):
    """Event serializer."""
    class Meta:
        model = Event
        fields = (
            'id', 'title', 'description', 'location', 'event_date', 
            'image_url', 'registration_url', 'is_published', 
            'created_at', 'updated_at'
        )
