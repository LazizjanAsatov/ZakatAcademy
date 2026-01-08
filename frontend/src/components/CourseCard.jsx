import { Link } from 'react-router-dom'

const CourseCard = ({ course }) => {
  return (
    <Link
      to={`/courses/${course.slug}`}
      className="block bg-za-ivory rounded-2xl shadow-soft border border-za-line overflow-hidden hover:shadow-soft-md transition-all duration-300 transform hover:-translate-y-1"
    >
      {course.thumbnail_url && (
        <div className="aspect-video bg-za-sand overflow-hidden">
          <img
            src={course.thumbnail_url}
            alt={course.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-heading font-semibold text-za-ink mb-2 line-clamp-2">
          {course.title}
        </h3>
        <p className="text-za-slate text-sm mb-4 line-clamp-2 leading-relaxed">
          {course.short_description}
        </p>
        <div className="flex items-center text-xs sm:text-sm text-za-emerald font-medium">
          <span>View Course →</span>
        </div>
      </div>
    </Link>
  )
}

export default CourseCard

