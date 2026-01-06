import client from './client'

export const getCourses = async () => {
  const response = await client.get('/api/courses/')
  return response.data
}

export const getCourse = async (slug) => {
  const response = await client.get(`/api/courses/${slug}/`)
  return response.data
}

export const enrollInCourse = async (slug) => {
  const response = await client.post(`/api/courses/${slug}/enroll/`)
  return response.data
}

export const getMyCourses = async () => {
  const response = await client.get('/api/my/courses/')
  return response.data
}

export const getCoursePlayer = async (slug) => {
  const response = await client.get(`/api/my/courses/${slug}/player/`)
  return response.data
}

export const updateLessonProgress = async (lessonId, data) => {
  const response = await client.post(`/api/progress/lesson/${lessonId}/`, data)
  return response.data
}

