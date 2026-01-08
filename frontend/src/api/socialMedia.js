import client from './client'

export const getSocialMediaLinks = async () => {
  const response = await client.get('/api/social-media/')
  return response.data
}
