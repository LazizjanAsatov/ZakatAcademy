import client from './client'

export const getEvents = async () => {
  const response = await client.get('/api/events/')
  return response.data
}

export const getEvent = async (eventId) => {
  const response = await client.get(`/api/events/${eventId}/`)
  return response.data
}
