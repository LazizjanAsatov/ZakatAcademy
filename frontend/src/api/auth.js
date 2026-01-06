import client from './client'

export const signup = async (data) => {
  const response = await client.post('/api/auth/signup/', data)
  return response.data
}

export const login = async (email, password) => {
  const response = await client.post('/api/auth/login/', { email, password })
  return response.data
}

export const logout = async () => {
  try {
    await client.post('/api/auth/logout/')
  } catch (error) {
    // Ignore errors on logout
  }
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
  localStorage.removeItem('user')
}

export const getMe = async () => {
  const response = await client.get('/api/auth/me/')
  return response.data
}

