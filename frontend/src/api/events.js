import client from './client'

export const getEvents = async (page = 1) => {
  const response = await client.get(`/api/events/?page=${page}`)
  return response.data
}

export const getEvent = async (eventId) => {
  const response = await client.get(`/api/events/${eventId}/`)
  return response.data
}
