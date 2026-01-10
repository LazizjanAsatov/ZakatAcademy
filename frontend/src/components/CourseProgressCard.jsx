import { Link } from 'react-router-dom'

const CourseProgressCard = ({ enrollment }) => {
  const { course, progress_percentage, completed_lessons, total_lessons } = enrollment
  const progress = progress_percentage || 0

  return (
    <Link
      to={`/app/courses/${course.slug}`}
      className="block bg-za-ivory rounded-2xl shadow-soft border border-za-line overflow-hidden hover:shadow-soft-md transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="aspect-video bg-za-sand overflow-hidden relative">
        {course.thumbnail_url ? (
          <img
            src={course.thumbnail_url}
            alt={course.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-za-emerald/10 to-za-emerald/5">
            <div className="text-4xl text-za-emerald/30">📚</div>
          </div>
        )}
        {/* Progress overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-za-line-light">
          <div
            className="h-full bg-za-emerald transition-all duration-500"
            style={{ width: `${Math.max(progress, 0)}%` }}
          />
        </div>
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-heading font-semibold text-za-ink mb-2 line-clamp-2">
          {course.title}
        </h3>
        <p className="text-za-slate text-sm mb-4 line-clamp-2 leading-relaxed">
          {course.short_description}
        </p>
        
        {/* Progress Section */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-za-slate font-medium">Progress</span>
            <span className="text-za-emerald font-semibold">{Math.round(progress)}%</span>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full h-2.5 bg-za-beige rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-za-emerald to-za-emerald-light transition-all duration-500 rounded-full"
              style={{ width: `${Math.max(progress, 0)}%` }}
            />
          </div>
          
          {/* Lesson Count */}
          <div className="flex items-center justify-between text-xs text-za-slate">
            <span>
              {completed_lessons || 0} of {total_lessons || 0} lessons completed
            </span>
            <span className="text-za-emerald font-medium flex items-center gap-1">
              Continue Learning →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CourseProgressCard
