#!/bin/bash
# Script to reset database and migrations (use with caution!)

echo "⚠️  WARNING: This will delete your database and all data!"
echo "Press Ctrl+C to cancel, or Enter to continue..."
read

echo "Deleting database..."
rm -f db.sqlite3

echo "Deleting migration files (keeping __init__.py)..."
find apps -path "*/migrations/*.py" -not -name "__init__.py" -delete
find apps -path "*/migrations/*.pyc" -delete

echo "Creating new migrations..."
python manage.py makemigrations

echo "Running migrations..."
python manage.py migrate

echo "✅ Database reset complete!"
echo ""
echo "Now create a superuser with:"
echo "  python manage.py createsuperuser_email --email admin@example.com"
echo "or use the standard command:"
echo "  python manage.py createsuperuser"

