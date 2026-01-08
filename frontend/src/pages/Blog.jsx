import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getBlogPosts } from '../api/blog'

const Blog = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [hasNext, setHasNext] = useState(false)
  const [hasPrevious, setHasPrevious] = useState(false)

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true)
        const data = await getBlogPosts(page)
        setPosts(data.results || data)
        setHasNext(!!data.next)
        setHasPrevious(!!data.previous)
      } catch (error) {
        console.error('Failed to load blog posts:', error)
      } finally {
        setLoading(false)
      }
    }
    loadPosts()
  }, [page])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="py-10 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-za-emerald mb-3 sm:mb-4">
            Blog
          </h1>
          <p className="text-base sm:text-lg text-za-slate">
            Insights, tips, and guidance on Islamic finance and Zakat
          </p>
        </div>

        {loading ? (
          <div className="text-center text-za-slate py-12">Loading posts...</div>
        ) : posts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-12">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="bg-za-ivory rounded-2xl shadow-soft border border-za-line overflow-hidden hover:shadow-soft-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  {post.featured_image_url && (
                    <div className="aspect-video overflow-hidden bg-za-sand">
                      <img
                        src={post.featured_image_url}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-5 sm:p-6">
                    <h2 className="text-lg sm:text-xl font-heading font-bold text-za-ink mb-2 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-za-slate mb-4 line-clamp-3 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs sm:text-sm text-za-slate">
                      <span>{post.author_name}</span>
                      <span>{formatDate(post.created_at)}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {(hasNext || hasPrevious) && (
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <button
                  onClick={() => setPage(page - 1)}
                  disabled={!hasPrevious}
                  className="w-full sm:w-auto px-6 py-2.5 bg-za-emerald text-white rounded-full hover:bg-za-emerald-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed font-body font-medium shadow-sm hover:shadow-md disabled:shadow-sm"
                >
                  Previous
                </button>
                <span className="text-za-slate font-body text-sm sm:text-base">Page {page}</span>
                <button
                  onClick={() => setPage(page + 1)}
                  disabled={!hasNext}
                  className="w-full sm:w-auto px-6 py-2.5 bg-za-emerald text-white rounded-full hover:bg-za-emerald-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed font-body font-medium shadow-sm hover:shadow-md disabled:shadow-sm"
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center text-za-slate py-12">
            No blog posts available yet.
          </div>
        )}
      </div>
    </div>
  )
}

export default Blog
