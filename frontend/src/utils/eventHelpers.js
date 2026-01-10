/**
 * Determines if an event is finished based on its date(s).
 * 
 * Rules:
 * - If event has endDate/endsAt: finished when endDate < now
 * - Else if event has date/startsAt/event_date: finished when date < now
 * - For date-only (time is midnight 00:00:00): finished only after the day has passed
 *   (today's events are NOT finished)
 * 
 * @param {Object} event - Event object with date fields
 * @param {Date} now - Current date/time (defaults to new Date())
 * @returns {boolean} - True if event is finished, false otherwise
 */
export const isEventFinished = (event, now = new Date()) => {
  if (!event) return false

  // Get the reference date to check against
  let eventDate = null

  // Priority: endDate > endsAt > event_date > date > startsAt
  if (event.endDate) {
    eventDate = new Date(event.endDate)
  } else if (event.endsAt) {
    eventDate = new Date(event.endsAt)
  } else if (event.event_date) {
    eventDate = new Date(event.event_date)
  } else if (event.date) {
    eventDate = new Date(event.date)
  } else if (event.startsAt) {
    eventDate = new Date(event.startsAt)
  } else {
    // No date field found
    return false
  }

  if (isNaN(eventDate.getTime())) {
    // Invalid date
    return false
  }

  // Check if the date is date-only (time is midnight 00:00:00)
  const isDateOnly = 
    eventDate.getHours() === 0 && 
    eventDate.getMinutes() === 0 && 
    eventDate.getSeconds() === 0 && 
    eventDate.getMilliseconds() === 0

  if (isDateOnly) {
    // For date-only: finished only after the day has passed
    // Compare dates at start of day (midnight) in local timezone
    const eventDay = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate())
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    
    // Finished if event day is strictly before today
    return eventDay < today
  } else {
    // For date-time: finished if event date/time is before now
    return eventDate < now
  }
}
