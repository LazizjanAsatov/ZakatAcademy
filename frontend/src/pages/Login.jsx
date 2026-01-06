import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const result = await login(formData.email, formData.password)
    
    if (result.success) {
      navigate('/app')
    } else {
      if (result.error?.includes('pending approval')) {
        navigate('/pending-approval')
      } else {
        setError(result.error || 'Login failed. Please try again.')
      }
    }
    
    setLoading(false)
  }

  return (
    <div className="py-10 md:py-16">
      <div className="max-w-md mx-auto px-4">
        <div className="bg-za-ivory rounded-2xl shadow-sm border border-za-line p-8">
          <h1 className="text-3xl font-heading font-bold text-za-ink mb-2">
            Welcome Back
          </h1>
          <p className="text-za-slate mb-8">
            Sign in to continue your learning journey.
          </p>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-za-ink mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-za-line rounded-lg focus:ring-2 focus:ring-za-emerald focus:border-transparent bg-white text-za-ink"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-za-ink mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 border border-za-line rounded-lg focus:ring-2 focus:ring-za-emerald focus:border-transparent bg-white text-za-ink"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-za-emerald text-white rounded-full hover:bg-za-forest transition font-semibold disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-za-slate">
            Don't have an account?{' '}
            <Link to="/signup" className="text-za-emerald hover:underline font-medium">
              Request Access
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

