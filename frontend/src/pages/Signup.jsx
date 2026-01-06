import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signup } from '../api/auth'

const Signup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password_confirm: '',
    first_name: '',
    last_name: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      await signup(formData)
      setSuccess(true)
      setTimeout(() => {
        navigate('/pending-approval')
      }, 2000)
    } catch (err) {
      const errorMessage = err.response?.data?.email?.[0] || 
                          err.response?.data?.password?.[0] ||
                          err.response?.data?.non_field_errors?.[0] ||
                          'Signup failed. Please try again.'
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="py-10 md:py-16">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-za-ivory rounded-2xl shadow-sm border border-za-line p-8 text-center">
            <div className="w-16 h-16 bg-za-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-za-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-heading font-bold text-za-ink mb-2">
              Request Submitted!
            </h2>
            <p className="text-za-slate">
              Your account request has been submitted. Redirecting...
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-10 md:py-16">
      <div className="max-w-md mx-auto px-4">
        <div className="bg-za-ivory rounded-2xl shadow-sm border border-za-line p-8">
          <h1 className="text-3xl font-heading font-bold text-za-ink mb-2">
            Request Access
          </h1>
          <p className="text-za-slate mb-8">
            Sign up to request access to Zakat Academy courses. Your account will be reviewed by our admin team.
          </p>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="first_name" className="block text-sm font-medium text-za-ink mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  value={formData.first_name}
                  onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                  className="w-full px-4 py-3 border border-za-line rounded-lg focus:ring-2 focus:ring-za-emerald focus:border-transparent bg-white text-za-ink"
                />
              </div>
              <div>
                <label htmlFor="last_name" className="block text-sm font-medium text-za-ink mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  value={formData.last_name}
                  onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                  className="w-full px-4 py-3 border border-za-line rounded-lg focus:ring-2 focus:ring-za-emerald focus:border-transparent bg-white text-za-ink"
                />
              </div>
            </div>

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

            <div>
              <label htmlFor="password_confirm" className="block text-sm font-medium text-za-ink mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="password_confirm"
                required
                value={formData.password_confirm}
                onChange={(e) => setFormData({ ...formData, password_confirm: e.target.value })}
                className="w-full px-4 py-3 border border-za-line rounded-lg focus:ring-2 focus:ring-za-emerald focus:border-transparent bg-white text-za-ink"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-za-emerald text-white rounded-full hover:bg-za-forest transition font-semibold disabled:opacity-50"
            >
              {loading ? 'Submitting...' : 'Request Access'}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-za-slate">
            Already have an account?{' '}
            <Link to="/login" className="text-za-emerald hover:underline font-medium">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup

