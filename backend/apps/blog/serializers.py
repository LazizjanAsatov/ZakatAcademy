from rest_framework import serializers
from .models import BlogPost


class BlogPostListSerializer(serializers.ModelSerializer):
    """Blog post serializer for list view."""
    class Meta:
        model = BlogPost
        fields = ('id', 'title', 'slug', 'excerpt', 'featured_image_url', 
                  'author_name', 'created_at', 'updated_at')


class BlogPostDetailSerializer(serializers.ModelSerializer):
    """Blog post serializer for detail view."""
    class Meta:
        model = BlogPost
        fields = ('id', 'title', 'slug', 'excerpt', 'content', 'featured_image_url',
                  'author_name', 'is_published', 'created_at', 'updated_at')
