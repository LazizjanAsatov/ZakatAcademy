import client from './client'

export const getBlogPosts = async (page = 1) => {
  const response = await client.get(`/api/blog/posts/?page=${page}`)
  return response.data
}

export const getBlogPost = async (slug) => {
  const response = await client.get(`/api/blog/posts/${slug}/`)
  return response.data
}

export const getFeaturedBlogPosts = async (limit = 3) => {
  const response = await client.get(`/api/blog/posts/?page=1`)
  const posts = response.data.results || response.data
  return Array.isArray(posts) ? posts.slice(0, limit) : []
}
