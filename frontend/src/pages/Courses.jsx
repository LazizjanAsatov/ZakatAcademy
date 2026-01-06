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
    <div className="py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-za-ink mb-4">
          All Courses
        </h1>
        <p className="text-lg text-za-slate mb-12">
          Explore our comprehensive collection of Zakat courses.
        </p>

        {loading ? (
          <div className="text-center text-za-slate py-12">Loading courses...</div>
        ) : courses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

