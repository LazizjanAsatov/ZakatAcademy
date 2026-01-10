import { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { getMyCourses } from '../api/courses'
import CourseProgressCard from '../components/CourseProgressCard'
import { Link } from 'react-router-dom'

const Profile = () => {
  const { user } = useAuth()
  const [enrollments, setEnrollments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadMyCourses = async () => {
      try {
        const data = await getMyCourses()
        setEnrollments(data || [])
      } catch (error) {
        console.error('Failed to load enrolled courses:', error)
      } finally {
        setLoading(false)
      }
    }
    loadMyCourses()
  }, [])

  return (
    <div className="py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-za-ink mb-8">
          My Profile
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Profile Information Section */}
          <div className="lg:col-span-1">
            <div className="bg-za-ivory rounded-2xl shadow-soft border border-za-line p-6 md:p-8 sticky top-6">
              <h2 className="text-2xl font-heading font-bold text-za-ink mb-6">
                Account Information
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-za-slate mb-2">Email</label>
                  <div className="text-lg text-za-ink font-medium">{user?.email}</div>
                </div>

                {(user?.full_name || (user?.first_name || user?.last_name)) && (
                  <div>
                    <label className="block text-sm font-medium text-za-slate mb-2">Full Name</label>
                    <div className="text-lg text-za-ink font-medium">
                      {user?.full_name || `${user?.first_name || ''} ${user?.last_name || ''}`.trim() || 'Not provided'}
                    </div>
                  </div>
                )}

                {user?.country && (
                  <div>
                    <label className="block text-sm font-medium text-za-slate mb-2">Country</label>
                    <div className="text-lg text-za-ink">{user.country}</div>
                  </div>
                )}

                {user?.gender && (
                  <div>
                    <label className="block text-sm font-medium text-za-slate mb-2">Gender</label>
                    <div className="text-lg text-za-ink">
                      {user.gender === 'M' ? 'Male' : 
                       user.gender === 'F' ? 'Female' : 
                       user.gender === 'O' ? 'Other' : 
                       user.gender === 'P' ? 'Prefer not to say' : user.gender}
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-za-slate mb-2">Account Status</label>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      user?.is_active
                        ? 'bg-za-emerald/10 text-za-emerald'
                        : 'bg-za-gold/20 text-za-gold'
                    }`}>
                      {user?.is_active ? 'Active' : 'Pending Approval'}
                    </span>
                  </div>
                </div>

                {user?.created_at && (
                  <div>
                    <label className="block text-sm font-medium text-za-slate mb-2">Member Since</label>
                    <div className="text-lg text-za-ink">
                      {new Date(user.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* My Courses Section */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-za-ink mb-2">
                  My Courses
                </h2>
                <p className="text-za-slate">
                  {enrollments.length > 0 
                    ? `${enrollments.length} ${enrollments.length === 1 ? 'course' : 'courses'} enrolled`
                    : 'No courses enrolled yet'
                  }
                </p>
              </div>
              {enrollments.length > 0 && (
                <Link
                  to="/courses"
                  className="text-za-emerald hover:text-za-emerald-dark font-medium text-sm flex items-center gap-1 transition-colors"
                >
                  Browse Courses →
                </Link>
              )}
            </div>

            {loading ? (
              <div className="text-center text-za-slate py-12">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-za-emerald"></div>
                <p className="mt-4">Loading your courses...</p>
              </div>
            ) : enrollments.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {enrollments.map((enrollment) => (
                  <CourseProgressCard key={enrollment.id} enrollment={enrollment} />
                ))}
              </div>
            ) : (
              <div className="bg-za-ivory rounded-2xl shadow-soft border border-za-line p-12 text-center">
                <div className="max-w-md mx-auto">
                  <div className="text-6xl mb-4">📚</div>
                  <h3 className="text-xl font-heading font-semibold text-za-ink mb-2">
                    No Courses Yet
                  </h3>
                  <p className="text-za-slate mb-6">
                    Start your learning journey by enrolling in one of our courses.
                  </p>
                  <Link
                    to="/courses"
                    className="inline-block bg-za-emerald text-white px-6 py-3 rounded-full font-medium hover:bg-za-emerald-dark transition-colors shadow-soft"
                  >
                    Browse Courses
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

