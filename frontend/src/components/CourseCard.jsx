import { Link } from 'react-router-dom'

const CourseCard = ({ course }) => {
  return (
    <Link
      to={`/courses/${course.slug}`}
      className="block bg-za-ivory rounded-2xl shadow-sm border border-za-line overflow-hidden hover:shadow-md transition"
    >
      {course.thumbnail_url && (
        <div className="aspect-video bg-za-sand overflow-hidden">
          <img
            src={course.thumbnail_url}
            alt={course.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-heading font-semibold text-za-ink mb-2">
          {course.title}
        </h3>
        <p className="text-za-slate text-sm mb-4 line-clamp-2">
          {course.short_description}
        </p>
        <div className="flex items-center text-xs text-za-slate">
          <span>View Course →</span>
        </div>
      </div>
    </Link>
  )
}

export default CourseCard

