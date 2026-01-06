# Zakat Academy

A production-ready MVP learning platform for teaching the fundamentals of Zakat, built as a monorepo with Django REST Framework backend and React frontend.

## Project Structure

```
zakat-academy/
├── backend/          # Django + DRF API
│   ├── apps/
│   │   ├── users/    # User authentication & approval
│   │   └── courses/  # Course management
│   └── zakat_backend/
└── frontend/         # React + Vite + Tailwind
    └── src/
        ├── api/      # API client & endpoints
        ├── components/
        ├── pages/
        └── contexts/
```

## Features

### Public (Marketing Site)
- Homepage with hero, features, stats, and FAQ
- Course listing and detail pages
- Responsive design with custom Islamic-academy aesthetic

### Private (Learning Platform)
- User signup with admin approval workflow
- JWT-based authentication
- Course enrollment and progress tracking
- Lesson player with YouTube video embedding
- Dashboard for enrolled courses

## Tech Stack

**Backend:**
- Django 5.0
- Django REST Framework
- SimpleJWT for authentication
- PostgreSQL (SQLite for dev)
- django-cors-headers

**Frontend:**
- React 18
- Vite
- React Router
- Tailwind CSS (custom theme)
- Axios

## Setup Instructions

### Prerequisites
- Python 3.10+
- Node.js 18+
- PostgreSQL (optional, SQLite works for dev)

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Create virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Create `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

Edit `.env` with your settings:
```
SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

# For SQLite (default), leave DB settings empty
# For PostgreSQL, uncomment and configure:
# DB_ENGINE=postgresql
# DB_NAME=zakat_academy
# DB_USER=postgres
# DB_PASSWORD=postgres
# DB_HOST=localhost
# DB_PORT=5432
```

5. Run migrations:
```bash
python manage.py migrate
```

6. Create superuser:
```bash
python manage.py createsuperuser
```

7. Seed demo data:
```bash
python manage.py seed_demo
```

8. Run development server:
```bash
python manage.py runserver
```

Backend will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (optional, defaults to localhost:8000):
```
VITE_API_BASE_URL=http://localhost:8000
```

4. Run development server:
```bash
npm run dev
```

Frontend will be available at `http://localhost:5173`

## Usage

### Admin Approval Workflow

1. User signs up via `/signup` → Account created with `is_active=False`
2. User sees "Pending Approval" message
3. Admin logs into Django admin (`/admin`)
4. Admin goes to Users section and sets `is_active=True` for the user
5. User can now login and access courses

### Creating Courses

1. Log into Django admin
2. Navigate to Courses section
3. Create a Course (set `is_published=True` to make it public)
4. Add Modules to the course
5. Add Lessons to modules (include `youtube_video_id` for video lessons)

### Testing the Flow

1. Visit homepage → Browse courses
2. Sign up → Get pending approval message
3. Admin approves user in Django admin
4. User logs in → Enrolls in course
5. Access course player → Watch lessons → Mark complete

## API Endpoints

### Authentication
- `POST /api/auth/signup/` - Create account (pending approval)
- `POST /api/auth/login/` - Login (requires approval)
- `POST /api/auth/logout/` - Logout
- `POST /api/auth/refresh/` - Refresh access token
- `GET /api/auth/me/` - Get current user profile

### Courses (Public)
- `GET /api/courses/` - List published courses
- `GET /api/courses/:slug/` - Course detail

### Courses (Authenticated)
- `POST /api/courses/:slug/enroll/` - Enroll in course
- `GET /api/my/courses/` - Get enrolled courses
- `GET /api/my/courses/:slug/player/` - Get course player data
- `POST /api/progress/lesson/:id/` - Update lesson progress

## Design System

### Colors
- `za-sand`: #F6F1E7 (main background)
- `za-ivory`: #FFFCF6 (cards/sections)
- `za-emerald`: #0B3D2E (brand green)
- `za-forest`: #0F5132 (hover/darker)
- `za-gold`: #C9A227 (buttons/badges)
- `za-ink`: #0F172A (main text)
- `za-slate`: #475569 (secondary text)
- `za-line`: rgba(11,61,46,0.15) (borders)

### Typography
- Headings: Playfair Display (serif)
- Body: Inter (sans-serif)

## Development Notes

- JWT tokens are stored in localStorage (MVP). For production, consider HttpOnly cookies.
- YouTube videos should be UNLISTED. Store only the video ID in the database.
- CORS is configured for localhost:5173. Update for production.
- SQLite is used by default. Switch to PostgreSQL for production.

## Production Checklist

- [ ] Set `DEBUG=False` in production
- [ ] Use strong `SECRET_KEY`
- [ ] Configure PostgreSQL database
- [ ] Set up proper CORS origins
- [ ] Use environment variables for all secrets
- [ ] Consider HttpOnly cookies for JWT
- [ ] Set up static file serving (WhiteNoise or CDN)
- [ ] Configure proper ALLOWED_HOSTS
- [ ] Set up SSL/HTTPS

## License

This project is for educational purposes.

