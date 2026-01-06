import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getMyCourses } from '../api/courses'

const Dashboard = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const data = await getMyCourses()
        setCourses(data)
      } catch (error) {
        console.error('Failed to load courses:', error)
      } finally {
        setLoading(false)
      }
    }
    loadCourses()
  }, [])

  return (
    <div className="py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-za-ink mb-4">
          My Courses
        </h1>
        <p className="text-lg text-za-slate mb-12">
          Continue your learning journey.
        </p>

        {loading ? (
          <div className="text-center text-za-slate py-12">Loading your courses...</div>
        ) : courses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((enrollment) => (
              <Link
                key={enrollment.id}
                to={`/app/courses/${enrollment.course.slug}`}
                className="block bg-za-ivory rounded-2xl shadow-sm border border-za-line overflow-hidden hover:shadow-md transition"
              >
                {enrollment.course.thumbnail_url && (
                  <div className="aspect-video bg-za-sand overflow-hidden">
                    <img
                      src={enrollment.course.thumbnail_url}
                      alt={enrollment.course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-za-ink mb-2">
                    {enrollment.course.title}
                  </h3>
                  <p className="text-za-slate text-sm mb-4 line-clamp-2">
                    {enrollment.course.short_description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-za-slate">
                      Status: <span className="text-za-emerald font-medium">{enrollment.status}</span>
                    </span>
                    <span className="text-za-emerald">Continue →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-za-ivory rounded-2xl shadow-sm border border-za-line p-12 text-center">
            <p className="text-za-slate mb-6">You haven't enrolled in any courses yet.</p>
            <Link
              to="/courses"
              className="inline-block px-8 py-3 bg-za-emerald text-white rounded-full hover:bg-za-forest transition font-semibold"
            >
              Browse Courses
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard

