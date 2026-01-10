from rest_framework import viewsets, status
from rest_framework.decorators import action, api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model
from .models import Course, Enrollment, LessonProgress, FAQ, SocialMediaLink, Lesson, Statistics
from .serializers import (
    CourseListSerializer, CourseDetailSerializer, CoursePlayerSerializer,
    EnrollmentSerializer, LessonProgressSerializer, FAQSerializer, SocialMediaLinkSerializer,
    StatisticsSerializer
)
from .pagination import CoursePagination

User = get_user_model()


class CourseViewSet(viewsets.ReadOnlyModelViewSet):
    """ViewSet for public course endpoints."""
    queryset = Course.objects.filter(is_published=True)
    lookup_field = 'slug'
    pagination_class = CoursePagination

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return CourseDetailSerializer
        return CourseListSerializer

    def get_queryset(self):
        return Course.objects.filter(is_published=True)

    @action(detail=True, methods=['post'], permission_classes=[IsAuthenticated])
    def enroll(self, request, slug=None):
        """Enroll authenticated user in a course."""
        course = self.get_object()
        user = request.user

        # Check if already enrolled
        enrollment, created = Enrollment.objects.get_or_create(
            user=user,
            course=course,
            defaults={'status': 'active'}
        )

        if not created:
            if enrollment.status == 'active':
                return Response(
                    {'message': 'You are already enrolled in this course.'},
                    status=status.HTTP_400_BAD_REQUEST
                )
            else:
                enrollment.status = 'active'
                enrollment.save()

        return Response(
            {'message': 'Successfully enrolled in course.', 'enrollment': EnrollmentSerializer(enrollment, context={'request': request}).data},
            status=status.HTTP_201_CREATED
        )


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def my_courses(request):
    """Get list of enrolled courses for authenticated user."""
    enrollments = Enrollment.objects.filter(user=request.user, status='active').select_related('course')
    serializer = EnrollmentSerializer(enrollments, many=True, context={'request': request})
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def course_player(request, slug):
    """Get course player data (modules + lessons) for enrolled user."""
    course = get_object_or_404(Course, slug=slug, is_published=True)
    
    # Check if user is enrolled
    enrollment = Enrollment.objects.filter(user=request.user, course=course, status='active').first()
    if not enrollment:
        return Response(
            {'error': 'You must enroll in this course to access it.'},
            status=status.HTTP_403_FORBIDDEN
        )

    serializer = CoursePlayerSerializer(course, context={'request': request})
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def update_lesson_progress(request, lesson_id):
    """Update lesson progress for authenticated user."""
    from .models import Lesson
    
    lesson = get_object_or_404(Lesson, id=lesson_id)
    
    # Merge lesson_id into request data
    data = request.data.copy()
    data['lesson'] = lesson_id
    
    serializer = LessonProgressSerializer(data=data, context={'request': request})
    if serializer.is_valid():
        progress = serializer.save()
        return Response(LessonProgressSerializer(progress).data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([AllowAny])
def faq_list(request):
    """Get list of published FAQs."""
    faqs = FAQ.objects.filter(is_published=True)
    serializer = FAQSerializer(faqs, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])
def social_media_links(request):
    """Get list of active social media links."""
    links = SocialMediaLink.objects.filter(is_active=True)
    serializer = SocialMediaLinkSerializer(links, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])
def statistics(request):
    """Get platform statistics from Statistics model."""
    stats = Statistics.load()
    serializer = StatisticsSerializer(stats)
    return Response(serializer.data)

