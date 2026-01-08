import { useEffect, useState } from 'react'
import { getCourses } from '../api/courses'
import CourseCard from '../components/CourseCard'

const Courses = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const data = await getCourses()
        setCourses(data.results || data || [])
      } catch (error) {
        console.error('Failed to load courses:', error)
      } finally {
        setLoading(false)
      }
    }
    loadCourses()
  }, [])

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
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

