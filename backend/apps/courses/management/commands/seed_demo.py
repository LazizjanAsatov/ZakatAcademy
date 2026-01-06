from django.core.management.base import BaseCommand
from apps.courses.models import Course, Module, Lesson


class Command(BaseCommand):
    help = 'Seed demo courses with modules and lessons'

    def handle(self, *args, **options):
        self.stdout.write('Seeding demo data...')

        # Course 1: Introduction to Zakat
        course1, created = Course.objects.get_or_create(
            slug='introduction-to-zakat',
            defaults={
                'title': 'Introduction to Zakat',
                'short_description': 'Learn the fundamentals of Zakat, one of the five pillars of Islam.',
                'description': '''
                This comprehensive course introduces you to Zakat, one of the five pillars of Islam. 
                You will learn about the spiritual and social significance of Zakat, its calculation methods, 
                and how it transforms both the giver and the recipient.
                
                Topics covered:
                - The meaning and importance of Zakat
                - Conditions for Zakat obligation
                - Types of wealth subject to Zakat
                - Calculation methods
                - Distribution of Zakat
                ''',
                'thumbnail_url': 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800',
                'is_published': True
            }
        )

        if created:
            # Module 1
            module1 = Module.objects.create(
                course=course1,
                title='Understanding Zakat',
                order=1
            )
            Lesson.objects.create(
                module=module1,
                title='What is Zakat?',
                order=1,
                content='Zakat is a form of almsgiving and religious tax in Islam. It is one of the five pillars of Islam.',
                youtube_video_id='dQw4w9WgXcQ',  # Placeholder
                duration_minutes=15,
                is_preview=True
            )
            Lesson.objects.create(
                module=module1,
                title='The Spiritual Significance',
                order=2,
                content='Zakat purifies wealth and soul, fostering compassion and social justice.',
                youtube_video_id='dQw4w9WgXcQ',  # Placeholder
                duration_minutes=12
            )

            # Module 2
            module2 = Module.objects.create(
                course=course1,
                title='Zakat Calculation',
                order=2
            )
            Lesson.objects.create(
                module=module2,
                title='Nisab: The Minimum Threshold',
                order=1,
                content='Nisab is the minimum amount of wealth one must possess before Zakat becomes obligatory.',
                youtube_video_id='dQw4w9WgXcQ',  # Placeholder
                duration_minutes=20
            )
            Lesson.objects.create(
                module=module2,
                title='Calculating Your Zakat',
                order=2,
                content='Step-by-step guide to calculating Zakat on different types of assets.',
                youtube_video_id='dQw4w9WgXcQ',  # Placeholder
                duration_minutes=25
            )

            self.stdout.write(self.style.SUCCESS(f'Created course: {course1.title}'))

        # Course 2: Advanced Zakat Studies
        course2, created = Course.objects.get_or_create(
            slug='advanced-zakat-studies',
            defaults={
                'title': 'Advanced Zakat Studies',
                'short_description': 'Deep dive into complex Zakat scenarios and contemporary applications.',
                'description': '''
                This advanced course explores complex Zakat scenarios, contemporary applications, 
                and scholarly interpretations. Perfect for those who want to deepen their understanding 
                and apply Zakat principles in modern contexts.
                
                Topics covered:
                - Zakat on business assets
                - Zakat on investments and stocks
                - Zakat on agricultural produce
                - Contemporary issues and fatwas
                - Case studies and practical examples
                ''',
                'thumbnail_url': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
                'is_published': True
            }
        )

        if created:
            # Module 1
            module3 = Module.objects.create(
                course=course2,
                title='Business Zakat',
                order=1
            )
            Lesson.objects.create(
                module=module3,
                title='Zakat on Business Assets',
                order=1,
                content='Understanding how to calculate Zakat on business inventory, receivables, and cash.',
                youtube_video_id='dQw4w9WgXcQ',  # Placeholder
                duration_minutes=30
            )
            Lesson.objects.create(
                module=module3,
                title='Zakat on Investments',
                order=2,
                content='Calculating Zakat on stocks, bonds, and other investment vehicles.',
                youtube_video_id='dQw4w9WgXcQ',  # Placeholder
                duration_minutes=28
            )

            # Module 2
            module4 = Module.objects.create(
                course=course2,
                title='Contemporary Applications',
                order=2
            )
            Lesson.objects.create(
                module=module4,
                title='Modern Financial Instruments',
                order=1,
                content='Applying Zakat principles to modern financial products and services.',
                youtube_video_id='dQw4w9WgXcQ',  # Placeholder
                duration_minutes=35
            )

            self.stdout.write(self.style.SUCCESS(f'Created course: {course2.title}'))

        self.stdout.write(self.style.SUCCESS('Demo data seeded successfully!'))

