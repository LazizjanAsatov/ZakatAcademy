from django.contrib import admin
from .models import Course, Module, Lesson, Enrollment, LessonProgress


class LessonInline(admin.TabularInline):
    model = Lesson
    extra = 1
    ordering = ['order']


class ModuleInline(admin.TabularInline):
    model = Module
    extra = 1
    ordering = ['order']
    show_change_link = True


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'is_published', 'created_at')
    list_filter = ('is_published', 'created_at')
    search_fields = ('title', 'slug', 'description')
    prepopulated_fields = {'slug': ('title',)}
    inlines = [ModuleInline]


@admin.register(Module)
class ModuleAdmin(admin.ModelAdmin):
    list_display = ('title', 'course', 'order', 'created_at')
    list_filter = ('course', 'created_at')
    search_fields = ('title', 'course__title')
    ordering = ('course', 'order')
    inlines = [LessonInline]


@admin.register(Lesson)
class LessonAdmin(admin.ModelAdmin):
    list_display = ('title', 'module', 'order', 'video_provider', 'youtube_video_id', 'is_preview', 'created_at')
    list_filter = ('video_provider', 'is_preview', 'created_at')
    search_fields = ('title', 'module__title', 'module__course__title')
    ordering = ('module__course', 'module__order', 'order')


@admin.register(Enrollment)
class EnrollmentAdmin(admin.ModelAdmin):
    list_display = ('user', 'course', 'status', 'created_at')
    list_filter = ('status', 'created_at')
    search_fields = ('user__email', 'course__title')
    readonly_fields = ('created_at', 'updated_at')


@admin.register(LessonProgress)
class LessonProgressAdmin(admin.ModelAdmin):
    list_display = ('user', 'lesson', 'completed', 'last_position_seconds', 'updated_at')
    list_filter = ('completed', 'updated_at')
    search_fields = ('user__email', 'lesson__title')
    readonly_fields = ('updated_at',)

