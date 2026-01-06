from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CourseViewSet, my_courses, course_player, update_lesson_progress

router = DefaultRouter()
router.register(r'courses', CourseViewSet, basename='course')

urlpatterns = [
    path('', include(router.urls)),
    path('my/courses/', my_courses, name='my-courses'),
    path('my/courses/<slug:slug>/player/', course_player, name='course-player'),
    path('progress/lesson/<int:lesson_id>/', update_lesson_progress, name='lesson-progress'),
]

