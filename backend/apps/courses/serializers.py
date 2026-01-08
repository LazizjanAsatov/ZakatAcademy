from rest_framework import serializers
from .models import Course, Module, Lesson, Enrollment, LessonProgress, FAQ, SocialMediaLink, Statistics


class LessonSerializer(serializers.ModelSerializer):
    """Lesson serializer for course player."""
    progress = serializers.SerializerMethodField()

    class Meta:
        model = Lesson
        fields = ('id', 'title', 'order', 'content', 'video_provider', 'youtube_video_id', 
                  'duration_minutes', 'is_preview', 'progress')

    def get_progress(self, obj):
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            try:
                progress = obj.progress.get(user=request.user)
                return {
                    'completed': progress.completed,
                    'last_position_seconds': progress.last_position_seconds
                }
            except LessonProgress.DoesNotExist:
                return {'completed': False, 'last_position_seconds': None}
        return None


class ModuleSerializer(serializers.ModelSerializer):
    """Module serializer with lessons."""
    lessons = LessonSerializer(many=True, read_only=True)

    class Meta:
        model = Module
        fields = ('id', 'title', 'order', 'lessons')


class CourseListSerializer(serializers.ModelSerializer):
    """Course serializer for list view."""
    class Meta:
        model = Course
        fields = ('id', 'title', 'slug', 'short_description', 'thumbnail_url', 'created_at')


class CourseDetailSerializer(serializers.ModelSerializer):
    """Course serializer for detail view."""
    modules = ModuleSerializer(many=True, read_only=True)
    is_enrolled = serializers.SerializerMethodField()

    class Meta:
        model = Course
        fields = ('id', 'title', 'slug', 'short_description', 'description', 
                  'thumbnail_url', 'is_published', 'created_at', 'modules', 'is_enrolled')

    def get_is_enrolled(self, obj):
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            return obj.enrollments.filter(user=request.user, status='active').exists()
        return False


class CoursePlayerSerializer(serializers.ModelSerializer):
    """Course serializer for player view (includes all modules and lessons)."""
    modules = ModuleSerializer(many=True, read_only=True)

    class Meta:
        model = Course
        fields = ('id', 'title', 'slug', 'description', 'modules')


class EnrollmentSerializer(serializers.ModelSerializer):
    """Enrollment serializer."""
    course = CourseListSerializer(read_only=True)

    class Meta:
        model = Enrollment
        fields = ('id', 'course', 'status', 'created_at')


class LessonProgressSerializer(serializers.ModelSerializer):
    """Lesson progress serializer."""
    lesson = serializers.PrimaryKeyRelatedField(queryset=Lesson.objects.all())

    class Meta:
        model = LessonProgress
        fields = ('lesson', 'completed', 'last_position_seconds')

    def create(self, validated_data):
        user = self.context['request'].user
        lesson = validated_data['lesson']
        progress, created = LessonProgress.objects.update_or_create(
            user=user,
            lesson=lesson,
            defaults={
                'completed': validated_data.get('completed', False),
                'last_position_seconds': validated_data.get('last_position_seconds')
            }
        )
        return progress


class FAQSerializer(serializers.ModelSerializer):
    """FAQ serializer."""
    class Meta:
        model = FAQ
        fields = ('id', 'question', 'answer', 'order', 'created_at', 'updated_at')


class SocialMediaLinkSerializer(serializers.ModelSerializer):
    """Social media link serializer."""
    platform_display = serializers.CharField(source='get_platform_display', read_only=True)
    
    class Meta:
        model = SocialMediaLink
        fields = ('id', 'platform', 'platform_display', 'url', 'icon_class', 'order', 'is_active')


class StatisticsSerializer(serializers.ModelSerializer):
    """Statistics serializer."""
    class Meta:
        model = Statistics
        fields = ('active_learners', 'courses', 'video_lessons')

