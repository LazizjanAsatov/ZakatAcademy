from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .models import TeamMember, Event
from .serializers import TeamMemberSerializer, EventSerializer


@api_view(['GET'])
@permission_classes([AllowAny])
def team_members(request):
    """Get list of published team members."""
    role = request.query_params.get('role', None)
    queryset = TeamMember.objects.filter(is_published=True)
    
    if role:
        queryset = queryset.filter(role=role)
    
    serializer = TeamMemberSerializer(queryset, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])
def events(request):
    """Get list of published events."""
    events = Event.objects.filter(is_published=True)
    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])
def event_detail(request, event_id):
    """Get a single event by ID."""
    from django.shortcuts import get_object_or_404
    
    event = get_object_or_404(Event, id=event_id, is_published=True)
    serializer = EventSerializer(event)
    return Response(serializer.data)
