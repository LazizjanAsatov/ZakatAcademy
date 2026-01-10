import { useEffect, useState } from 'react'
import { getEvents } from '../api/events'
import { isEventFinished } from '../utils/eventHelpers'

const Events = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [hasNext, setHasNext] = useState(false)
  const [hasPrevious, setHasPrevious] = useState(false)
  const [showFinishedModal, setShowFinishedModal] = useState(false)
  const [finishedEventTitle, setFinishedEventTitle] = useState('')

  useEffect(() => {
    const loadEvents = async () => {
      try {
        setLoading(true)
        const data = await getEvents(page)
        setEvents(data.results || data || [])
        setHasNext(!!data.next)
        setHasPrevious(!!data.previous)
      } catch (error) {
        console.error('Failed to load events:', error)
      } finally {
        setLoading(false)
      }
    }
    loadEvents()
  }, [page])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const handleRegistrationClick = (e, event, finished) => {
    if (finished) {
      e.preventDefault()
      setFinishedEventTitle(event.title)
      setShowFinishedModal(true)
    }
    // If not finished, let the link work normally
  }

  return (
    <div className="py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-za-emerald mb-6">
            Upcoming Events
          </h1>
          <p className="text-lg md:text-xl text-za-slate max-w-3xl mx-auto leading-relaxed">
            Join us for workshops, seminars, and community gatherings focused on Islamic finance 
            and financial empowerment.
          </p>
        </div>

        {loading ? (
          <div className="text-center text-za-slate py-12">Loading events...</div>
        ) : events.length > 0 ? (
          <>
            <div className="space-y-12 mb-10 sm:mb-12">
              {events.map((event) => {
                const finished = isEventFinished(event)
                return (
                  <div
                    key={event.id}
                    className={`bg-white rounded-2xl shadow-sm border border-za-line overflow-hidden hover:shadow-md transition ${
                      finished ? 'opacity-75' : ''
                    }`}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      {/* Image Section */}
                      {event.image_url && (
                        <div className="lg:order-2">
                          <div className="aspect-video lg:aspect-auto lg:h-full overflow-hidden bg-za-sand">
                            <img
                              src={event.image_url}
                              alt={event.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      )}

                      {/* Content Section */}
                      <div className="lg:order-1 p-8 md:p-12 flex flex-col justify-center">
                        <div className="mb-4 flex items-center gap-3 flex-wrap">
                          <div className="inline-block px-4 py-2 bg-za-emerald/10 text-za-emerald rounded-full text-sm font-semibold">
                            {formatDate(event.event_date)}
                          </div>
                          {finished && (
                            <div className="inline-block px-4 py-2 bg-za-slate/20 text-za-slate rounded-full text-sm font-semibold">
                              Finished
                            </div>
                          )}
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-za-ink mb-4">
                          {event.title}
                        </h2>

                        {event.location && (
                          <div className="flex items-start gap-2 mb-4 text-za-slate">
                            <svg className="w-5 h-5 text-za-emerald mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-lg">{event.location}</span>
                          </div>
                        )}

                        <p className="text-za-slate leading-relaxed mb-6 text-lg">
                          {event.description}
                        </p>

                        {event.registration_url && (
                          <a
                            href={finished ? '#' : event.registration_url}
                            onClick={(e) => handleRegistrationClick(e, event, finished)}
                            target={finished ? undefined : '_blank'}
                            rel={finished ? undefined : 'noopener noreferrer'}
                            className={`inline-block px-6 py-3 rounded-lg transition font-body font-semibold ${
                              finished
                                ? 'bg-za-slate/30 text-za-slate cursor-not-allowed'
                                : 'bg-za-emerald text-white hover:bg-za-forest cursor-pointer'
                            }`}
                          >
                            Register Now
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
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
          <div className="text-center py-16">
            <div className="bg-za-ivory rounded-2xl shadow-sm border border-za-line p-12 max-w-2xl mx-auto">
              <svg className="w-16 h-16 text-za-emerald/40 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-2xl font-heading font-bold text-za-ink mb-2">
                No Events Scheduled
              </h3>
              <p className="text-za-slate">
                Check back soon for upcoming events and workshops.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Finished Event Modal */}
      {showFinishedModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowFinishedModal(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-lg border border-za-line max-w-md w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-za-slate/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-za-slate"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-heading font-bold text-za-ink mb-2">
                Event Finished
              </h3>
              <p className="text-za-slate mb-6">
                The event <span className="font-semibold text-za-ink">"{finishedEventTitle}"</span> has already finished. Registration is no longer available.
              </p>
              <button
                onClick={() => setShowFinishedModal(false)}
                className="px-6 py-3 bg-za-emerald text-white rounded-lg hover:bg-za-forest transition font-body font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Events
