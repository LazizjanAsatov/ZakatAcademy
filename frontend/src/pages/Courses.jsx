import { useEffect, useState } from 'react'
import { getCourses } from '../api/courses'
import CourseCard from '../components/CourseCard'

const Courses = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [hasNext, setHasNext] = useState(false)
  const [hasPrevious, setHasPrevious] = useState(false)

  useEffect(() => {
    const loadCourses = async () => {
      try {
        setLoading(true)
        const data = await getCourses(page)
        setCourses(data.results || data || [])
        setHasNext(!!data.next)
        setHasPrevious(!!data.previous)
      } catch (error) {
        console.error('Failed to load courses:', error)
      } finally {
        setLoading(false)
      }
    }
    loadCourses()
  }, [page])

  return (
    <div className="py-10 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-za-ink mb-3 sm:mb-4">
            All Courses
          </h1>
          <p className="text-base sm:text-lg text-za-slate">
            Explore our comprehensive collection of Zakat courses.
          </p>
        </div>

        {loading ? (
          <div className="text-center text-za-slate py-12">Loading courses...</div>
        ) : courses.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-12">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>

            {/* Pagination */}
            {(hasNext || hasPrevious) && (
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <button
                  onClick={() => setPage(page - 1)}
                  disabled={!hasPrevious}
                  className="w-full sm:w-auto px-6 py-2.5 bg-za-emerald text-white rounded-full hover:bg-za-emerald-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed font-body font-medium shadow-sm hover:shadow-md disabled:shadow-sm"
                >
                  Previous
                </button>
                <span className="text-za-slate font-body text-sm sm:text-base">Page {page}</span>
                <button
                  onClick={() => setPage(page + 1)}
                  disabled={!hasNext}
                  className="w-full sm:w-auto px-6 py-2.5 bg-za-emerald text-white rounded-full hover:bg-za-emerald-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed font-body font-medium shadow-sm hover:shadow-md disabled:shadow-sm"
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center text-za-slate py-12">
            No courses available at the moment.
          </div>
        )}
      </div>
    </div>
  )
}

export default Courses

