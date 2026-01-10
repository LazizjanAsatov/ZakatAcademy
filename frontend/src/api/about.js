import client from './client'

export const getTeamMembers = async (role = null) => {
  const params = role ? { role } : {}
  const response = await client.get('/api/team-members/', { params })
  return response.data
}

export const getFounders = async () => {
  return getTeamMembers('founder')
}

export const getTeamMates = async () => {
  return getTeamMembers('team')
}

export const getChallenges = async () => {
  const response = await client.get('/api/challenges/')
  return response.data
}
