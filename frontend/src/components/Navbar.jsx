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
    <nav className="sticky top-0 z-50 bg-za-ivory/95 backdrop-blur-sm border-b border-za-line shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo and Brand Name */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 flex-shrink-0 hover:opacity-90 transition-opacity">
            <img 
              src="/ZakatAcademy.png" 
              alt="Zakat Academy Logo" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain" 
            />
            <span className="text-base md:text-xl font-bold text-za-emerald uppercase tracking-tight font-heading">
              ZAKAT ACADEMY
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link 
              to="/" 
              className="text-za-slate-dark hover:text-za-emerald transition-colors font-body font-medium text-sm xl:text-base px-2 py-1"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-za-slate-dark hover:text-za-emerald transition-colors font-body font-medium text-sm xl:text-base px-2 py-1"
            >
              About
            </Link>
            <Link 
              to="/courses" 
              className="text-za-slate-dark hover:text-za-emerald transition-colors font-body font-medium text-sm xl:text-base px-2 py-1"
            >
              Courses
            </Link>
            <Link 
              to="/blog" 
              className="text-za-slate-dark hover:text-za-emerald transition-colors font-body font-medium text-sm xl:text-base px-2 py-1"
            >
              Blog
            </Link>
            <Link 
              to="/faq" 
              className="text-za-slate-dark hover:text-za-emerald transition-colors font-body font-medium text-sm xl:text-base px-2 py-1"
            >
              FAQ
            </Link>
            <Link 
              to="/events" 
              className="text-za-slate-dark hover:text-za-emerald transition-colors font-body font-medium text-sm xl:text-base px-2 py-1"
            >
              Events
            </Link>
          </div>

          {/* Right Side Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="px-4 xl:px-5 py-2 bg-za-emerald text-white rounded-full hover:bg-za-emerald-dark transition-all font-body font-medium text-sm shadow-sm hover:shadow-md">
              Download App
            </button>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="px-4 xl:px-5 py-2 bg-za-beige text-za-ink rounded-full hover:bg-za-beige-light transition-all font-body font-medium text-sm border border-za-line"
              >
                Log out
              </button>
            ) : (
              <Link
                to="/login"
                className="px-4 xl:px-5 py-2 bg-za-beige text-za-ink rounded-full hover:bg-za-beige-light transition-all font-body font-medium text-sm border border-za-line"
              >
                Log in
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-za-emerald hover:text-za-emerald-dark transition-colors p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
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
          <div className="lg:hidden py-4 space-y-1 border-t border-za-line bg-za-ivory">
            <Link 
              to="/" 
              className="block text-za-slate-dark hover:text-za-emerald hover:bg-za-emerald/5 transition-colors font-body font-medium py-3 px-4 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block text-za-slate-dark hover:text-za-emerald hover:bg-za-emerald/5 transition-colors font-body font-medium py-3 px-4 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/courses" 
              className="block text-za-slate-dark hover:text-za-emerald hover:bg-za-emerald/5 transition-colors font-body font-medium py-3 px-4 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Courses
            </Link>
            <Link 
              to="/blog" 
              className="block text-za-slate-dark hover:text-za-emerald hover:bg-za-emerald/5 transition-colors font-body font-medium py-3 px-4 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/faq" 
              className="block text-za-slate-dark hover:text-za-emerald hover:bg-za-emerald/5 transition-colors font-body font-medium py-3 px-4 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              to="/events" 
              className="block text-za-slate-dark hover:text-za-emerald hover:bg-za-emerald/5 transition-colors font-body font-medium py-3 px-4 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </Link>
            <div className="pt-3 space-y-2 px-4 border-t border-za-line mt-2">
              <button className="w-full px-5 py-3 bg-za-emerald text-white rounded-full hover:bg-za-emerald-dark transition-all font-body font-medium shadow-sm">
                Download App
              </button>
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    handleLogout()
                    setMobileMenuOpen(false)
                  }}
                  className="w-full px-5 py-3 bg-za-beige text-za-ink rounded-full hover:bg-za-beige-light transition-all font-body font-medium border border-za-line"
                >
                  Log out
                </button>
              ) : (
                <Link
                  to="/login"
                  className="block w-full text-center px-5 py-3 bg-za-beige text-za-ink rounded-full hover:bg-za-beige-light transition-all font-body font-medium border border-za-line"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
