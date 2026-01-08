import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getBlogPost } from '../api/blog'

const BlogDetail = () => {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true)
        const data = await getBlogPost(slug)
        setPost(data)
      } catch (err) {
        console.error('Failed to load blog post:', err)
        setError('Post not found')
      } finally {
        setLoading(false)
      }
    }
    loadPost()
  }, [slug])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  if (loading) {
    return (
      <div className="py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center text-za-slate">Loading post...</div>
        </div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-heading font-bold text-za-ink mb-4">Post Not Found</h1>
            <p className="text-za-slate mb-8">{error || 'The blog post you are looking for does not exist.'}</p>
            <Link
              to="/blog"
              className="inline-block px-6 py-3 bg-za-emerald text-white rounded-lg hover:bg-za-forest transition font-body font-semibold"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-10 md:py-16">
      <div className="max-w-4xl mx-auto px-4">
        <Link
          to="/blog"
          className="inline-flex items-center text-za-emerald hover:text-za-forest transition mb-8 font-body"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        <article>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-za-emerald mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-za-slate mb-8 font-body">
            <span>{post.author_name}</span>
            <span>•</span>
            <span>{formatDate(post.created_at)}</span>
          </div>

          {post.featured_image_url && (
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src={post.featured_image_url}
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
          )}

          <div 
            className="prose prose-lg max-w-none text-za-ink font-body leading-relaxed"
            style={{
              whiteSpace: 'pre-wrap',
              lineHeight: '1.8'
            }}
          >
            {post.content}
          </div>
        </article>
      </div>
    </div>
  )
}

export default BlogDetail
