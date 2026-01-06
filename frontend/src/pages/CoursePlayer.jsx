import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCoursePlayer, updateLessonProgress } from '../api/courses'

const CoursePlayer = () => {
  const { slug } = useParams()
  const [course, setCourse] = useState(null)
  const [selectedLesson, setSelectedLesson] = useState(null)
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [markingComplete, setMarkingComplete] = useState(false)

  useEffect(() => {
    const loadCourse = async () => {
      try {
        const data = await getCoursePlayer(slug)
        setCourse(data)
        // Select first lesson by default
        if (data.modules && data.modules.length > 0) {
          const firstModule = data.modules[0]
          if (firstModule.lessons && firstModule.lessons.length > 0) {
            setSelectedLesson(firstModule.lessons[0])
          }
        }
      } catch (error) {
        console.error('Failed to load course:', error)
      } finally {
        setLoading(false)
      }
    }
    loadCourse()
  }, [slug])

  const handleMarkComplete = async () => {
    if (!selectedLesson) return

    setMarkingComplete(true)
    try {
      await updateLessonProgress(selectedLesson.id, {
        lesson: selectedLesson.id,
        completed: !selectedLesson.progress?.completed,
      })
      // Reload course to get updated progress
      const data = await getCoursePlayer(slug)
      setCourse(data)
      // Update selected lesson
      const updatedLesson = findLessonInCourse(data, selectedLesson.id)
      if (updatedLesson) {
        setSelectedLesson(updatedLesson)
      }
    } catch (error) {
      console.error('Failed to update progress:', error)
    } finally {
      setMarkingComplete(false)
    }
  }

  const findLessonInCourse = (courseData, lessonId) => {
    for (const module of courseData.modules || []) {
      const lesson = module.lessons?.find((l) => l.id === lessonId)
      if (lesson) return lesson
    }
    return null
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
      </div>
    )
  }

  const getYouTubeEmbedUrl = (videoId) => {
    if (!videoId) return null
    return `https://www.youtube.com/embed/${videoId}`
  }

  return (
    <div className="flex h-screen bg-za-sand">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'w-80' : 'w-0'
        } bg-za-ivory border-r border-za-line transition-all duration-300 overflow-hidden flex-shrink-0`}
      >
        <div className="p-4 border-b border-za-line">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-heading font-semibold text-za-ink">
              {course.title}
            </h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="md:hidden text-za-slate hover:text-za-ink"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div className="overflow-y-auto h-full pb-20">
          {course.modules?.map((module) => (
            <div key={module.id} className="p-4">
              <h3 className="font-semibold text-za-ink mb-2">{module.title}</h3>
              <div className="space-y-1">
                {module.lessons?.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => setSelectedLesson(lesson)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition ${
                      selectedLesson?.id === lesson.id
                        ? 'bg-za-emerald text-white'
                        : 'text-za-slate hover:bg-za-sand'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{lesson.title}</span>
                      {lesson.progress?.completed && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Mobile Sidebar Toggle */}
        {!sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden fixed top-20 left-4 z-10 bg-za-emerald text-white p-2 rounded-lg shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}

        {selectedLesson ? (
          <div className="max-w-5xl mx-auto px-4 py-8">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-za-ink mb-6">
              {selectedLesson.title}
            </h1>

            {/* Video Player */}
            {selectedLesson.youtube_video_id && (
              <div className="mb-8">
                <div className="aspect-video bg-za-ink rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src={getYouTubeEmbedUrl(selectedLesson.youtube_video_id)}
                    title={selectedLesson.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            )}

            {/* Lesson Content */}
            {selectedLesson.content && (
              <div className="bg-za-ivory rounded-2xl shadow-sm border border-za-line p-6 md:p-8 mb-6">
                <h2 className="text-2xl font-heading font-semibold text-za-ink mb-4">
                  Lesson Notes
                </h2>
                <div className="prose prose-lg text-za-slate whitespace-pre-line">
                  {selectedLesson.content}
                </div>
              </div>
            )}

            {/* Progress Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={handleMarkComplete}
                disabled={markingComplete}
                className={`px-6 py-3 rounded-full font-semibold transition ${
                  selectedLesson.progress?.completed
                    ? 'bg-za-slate text-white hover:bg-za-ink'
                    : 'bg-za-gold text-za-emerald hover:opacity-90'
                } disabled:opacity-50`}
              >
                {markingComplete
                  ? 'Updating...'
                  : selectedLesson.progress?.completed
                  ? 'Mark as Incomplete'
                  : 'Mark as Complete'}
              </button>
              {selectedLesson.progress?.completed && (
                <span className="text-za-emerald font-medium flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Completed
                </span>
              )}
            </div>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto px-4 py-16 text-center text-za-slate">
            Select a lesson to begin
          </div>
        )}
      </div>
    </div>
  )
}

export default CoursePlayer

