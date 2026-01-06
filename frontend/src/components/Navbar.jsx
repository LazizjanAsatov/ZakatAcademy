import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth()
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  return (
    <nav className="bg-za-ivory border-b border-za-line shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-heading font-bold text-za-emerald">
            Zakat Academy
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-za-ink hover:text-za-emerald transition">
              Home
            </Link>
            <Link to="/courses" className="text-za-ink hover:text-za-emerald transition">
              Courses
            </Link>
            <Link to="/about" className="text-za-ink hover:text-za-emerald transition">
              About
            </Link>
            <Link to="/contact" className="text-za-ink hover:text-za-emerald transition">
              Contact
            </Link>
            {isAuthenticated ? (
              <>
                <Link to="/app" className="text-za-ink hover:text-za-emerald transition">
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-za-emerald text-white rounded-full hover:bg-za-forest transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-za-emerald text-white rounded-full hover:bg-za-forest transition"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-za-ink"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link to="/" className="block text-za-ink hover:text-za-emerald">Home</Link>
            <Link to="/courses" className="block text-za-ink hover:text-za-emerald">Courses</Link>
            <Link to="/about" className="block text-za-ink hover:text-za-emerald">About</Link>
            <Link to="/contact" className="block text-za-ink hover:text-za-emerald">Contact</Link>
            {isAuthenticated ? (
              <>
                <Link to="/app" className="block text-za-ink hover:text-za-emerald">Dashboard</Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 bg-za-emerald text-white rounded-full hover:bg-za-forest"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block px-4 py-2 bg-za-emerald text-white rounded-full text-center hover:bg-za-forest"
              >
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

