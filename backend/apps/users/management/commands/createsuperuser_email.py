"""
Custom management command to create superuser with email.
This is a helper command that makes it easier to create superusers.
"""
from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from getpass import getpass

User = get_user_model()


class Command(BaseCommand):
    help = 'Create a superuser with email (interactive)'

    def add_arguments(self, parser):
        parser.add_argument(
            '--email',
            type=str,
            help='Email address for the superuser',
        )
        parser.add_argument(
            '--password',
            type=str,
            help='Password for the superuser',
        )
        parser.add_argument(
            '--noinput',
            action='store_true',
            help='Use provided email and password without prompting',
        )

    def handle(self, *args, **options):
        email = options.get('email')
        password = options.get('password')
        noinput = options.get('noinput', False)

        if not email and not noinput:
            email = input('Email address: ')

        if not password and not noinput:
            password = getpass('Password: ')
            password_confirm = getpass('Password (again): ')
            if password != password_confirm:
                self.stdout.write(self.style.ERROR('Passwords do not match.'))
                return

        if not email:
            self.stdout.write(self.style.ERROR('Email is required.'))
            return

        if not password:
            self.stdout.write(self.style.ERROR('Password is required.'))
            return

        if User.objects.filter(email=email).exists():
            self.stdout.write(self.style.ERROR(f'User with email {email} already exists.'))
            return

        try:
            user = User.objects.create_superuser(
                email=email,
                password=password,
                is_active=True,
                is_staff=True,
                is_superuser=True
            )
            self.stdout.write(self.style.SUCCESS(f'Superuser {email} created successfully!'))
        except Exception as e:
            self.stdout.write(self.style.ERROR(f'Error creating superuser: {str(e)}'))

