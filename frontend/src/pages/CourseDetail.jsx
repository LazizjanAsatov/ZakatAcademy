import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCourse, enrollInCourse } from '../api/courses'
import { useAuth } from '../contexts/AuthContext'

const CourseDetail = () => {
  const { slug } = useParams()
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(true)
  const [enrolling, setEnrolling] = useState(false)
  const [enrollError, setEnrollError] = useState(null)

  useEffect(() => {
    const loadCourse = async () => {
      try {
        const data = await getCourse(slug)
        setCourse(data)
      } catch (error) {
        console.error('Failed to load course:', error)
      } finally {
        setLoading(false)
      }
    }
    loadCourse()
  }, [slug])

  const handleEnroll = async () => {
    if (!isAuthenticated) {
      navigate('/login')
      return
    }

    setEnrolling(true)
    setEnrollError(null)
    try {
      await enrollInCourse(slug)
      navigate(`/app/courses/${slug}`)
    } catch (error) {
      setEnrollError(error.response?.data?.message || 'Failed to enroll. Please try again.')
    } finally {
      setEnrolling(false)
    }
  }

  if (loading) {
    return (
      <div className="py-16 text-center text-za-slate">Loading course...</div>
    )
  }

  if (!course) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-2xl font-heading text-za-ink mb-4">Course not found</h1>
        <Link to="/courses" className="text-za-emerald hover:underline">
          Back to Courses
        </Link>
      </div>
    )
  }

  return (
    <div>
      {/* Banner */}
      {course.thumbnail_url && (
        <div className="h-64 md:h-96 bg-za-sand overflow-hidden">
          <img
            src={course.thumbnail_url}
            alt={course.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-za-ink mb-4">
            {course.title}
          </h1>
          <p className="text-xl text-za-slate mb-8">
            {course.short_description}
          </p>

          <div className="bg-za-ivory rounded-2xl shadow-sm border border-za-line p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-heading font-semibold text-za-ink mb-4">
              About This Course
            </h2>
            <div className="prose prose-lg text-za-slate whitespace-pre-line">
              {course.description}
            </div>
          </div>

          {/* Modules Preview */}
          {course.modules && course.modules.length > 0 && (
            <div className="bg-za-ivory rounded-2xl shadow-sm border border-za-line p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-heading font-semibold text-za-ink mb-6">
                Course Structure
              </h2>
              <div className="space-y-4">
                {course.modules.map((module, index) => (
                  <div key={module.id} className="border-l-4 border-za-emerald pl-4">
                    <h3 className="font-semibold text-za-ink mb-2">
                      Module {index + 1}: {module.title}
                    </h3>
                    {module.lessons && module.lessons.length > 0 && (
                      <ul className="text-za-slate space-y-1">
                        {module.lessons.map((lesson) => (
                          <li key={lesson.id} className="flex items-center">
                            <span className="w-2 h-2 bg-za-emerald rounded-full mr-2"></span>
                            {lesson.title}
                            {lesson.is_preview && (
                              <span className="ml-2 text-xs bg-za-gold text-za-emerald px-2 py-1 rounded">
                                Preview
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Enroll Button */}
          <div className="flex flex-col sm:flex-row gap-4">
            {isAuthenticated ? (
              <>
                {course.is_enrolled ? (
                  <Link
                    to={`/app/courses/${slug}`}
                    className="px-8 py-3 bg-za-emerald text-white rounded-full hover:bg-za-forest transition font-semibold text-center"
                  >
                    Go to Course
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={handleEnroll}
                      disabled={enrolling}
                      className="px-8 py-3 bg-za-emerald text-white rounded-full hover:bg-za-forest transition font-semibold disabled:opacity-50"
                    >
                      {enrolling ? 'Enrolling...' : 'Enroll Now'}
                    </button>
                    {enrollError && (
                      <div className="text-red-600 text-sm mt-2">{enrollError}</div>
                    )}
                  </>
                )}
              </>
            ) : (
              <Link
                to="/login"
                className="px-8 py-3 bg-za-emerald text-white rounded-full hover:bg-za-forest transition font-semibold text-center"
              >
                Login to Enroll
              </Link>
            )}
            <Link
              to="/courses"
              className="px-8 py-3 bg-za-ivory border border-za-line text-za-ink rounded-full hover:bg-za-sand transition font-semibold text-center"
            >
              Back to Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail

