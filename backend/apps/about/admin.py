from django.contrib import admin
from .models import TeamMember, Event, Challenge


@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ('name', 'role', 'position', 'order', 'is_published', 'created_at')
    list_filter = ('role', 'is_published', 'created_at')
    search_fields = ('name', 'position', 'bio')
    ordering = ('role', 'order', 'name')
    readonly_fields = ('created_at', 'updated_at')
    fieldsets = (
        ('Basic Information', {
            'fields': ('name', 'role', 'position', 'bio', 'photo_url')
        }),
        ('Contact & Social', {
            'fields': ('email', 'linkedin_url', 'twitter_url')
        }),
        ('Display Settings', {
            'fields': ('order', 'is_published')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'location', 'event_date', 'is_published', 'created_at')
    list_filter = ('is_published', 'event_date', 'created_at')
    search_fields = ('title', 'description', 'location')
    ordering = ('-event_date', '-created_at')
    readonly_fields = ('created_at', 'updated_at')
    fieldsets = (
        ('Event Information', {
            'fields': ('title', 'description', 'location', 'event_date')
        }),
        ('Media & Registration', {
            'fields': ('image_url', 'registration_url')
        }),
        ('Display Settings', {
            'fields': ('is_published',)
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )


@admin.register(Challenge)
class ChallengeAdmin(admin.ModelAdmin):
    list_display = ('title', 'photo_url', 'icon_type', 'order', 'is_published', 'created_at')
    list_filter = ('icon_type', 'is_published', 'created_at')
    search_fields = ('title', 'description')
    ordering = ('order', 'created_at')
    readonly_fields = ('created_at', 'updated_at')
    fieldsets = (
        ('Challenge Information', {
            'fields': ('title', 'description', 'photo_url', 'icon_type')
        }),
        ('Display Settings', {
            'fields': ('order', 'is_published')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
