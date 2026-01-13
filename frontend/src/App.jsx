import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import CoursePlayer from './pages/CoursePlayer'
import Profile from './pages/Profile'
import ProtectedRoute from './components/ProtectedRoute'
import PendingApproval from './pages/PendingApproval'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import FAQ from './pages/FAQ'
import About from './pages/About'
import Events from './pages/Events'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import CookiePolicy from './pages/CookiePolicy'

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:slug" element={<CourseDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/pending-approval" element={<PendingApproval />} />
              <Route
                path="/app"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/app/courses/:slug"
                element={
                  <ProtectedRoute>
                    <CoursePlayer />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/app/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App

