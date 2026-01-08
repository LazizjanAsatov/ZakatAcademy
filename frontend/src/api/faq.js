import client from './client'

export const getFAQs = async () => {
  const response = await client.get('/api/faqs/')
  return response.data
}
