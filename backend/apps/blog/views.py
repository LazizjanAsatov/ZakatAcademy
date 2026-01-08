from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import BlogPost
from .serializers import BlogPostListSerializer, BlogPostDetailSerializer


class BlogPostViewSet(viewsets.ReadOnlyModelViewSet):
    """ViewSet for public blog post endpoints."""
    queryset = BlogPost.objects.filter(is_published=True)
    permission_classes = [AllowAny]
    lookup_field = 'slug'

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return BlogPostDetailSerializer
        return BlogPostListSerializer

    def get_queryset(self):
        return BlogPost.objects.filter(is_published=True)
