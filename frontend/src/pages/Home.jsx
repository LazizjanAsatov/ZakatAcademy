import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCourses, getStatistics } from '../api/courses'
import { getFeaturedBlogPosts } from '../api/blog'
import { getFAQs } from '../api/faq'
import CourseCard from '../components/CourseCard'
import FAQAccordion from '../components/FAQAccordion'
import AnimatedStatistic from '../components/AnimatedStatistic'

const Home = () => {
  const [featuredCourses, setFeaturedCourses] = useState([])
  const [featuredPosts, setFeaturedPosts] = useState([])
  const [faqs, setFaqs] = useState([])
  const [statistics, setStatistics] = useState({
    active_learners: 0,
    courses: 0,
    video_lessons: 0,
  })
  const [loading, setLoading] = useState(true)
  const [blogLoading, setBlogLoading] = useState(true)
  const [faqLoading, setFaqLoading] = useState(true)
  const [statsLoading, setStatsLoading] = useState(true)

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const data = await getCourses()
        setFeaturedCourses(data.results?.slice(0, 3) || data.slice(0, 3) || [])
      } catch (error) {
        console.error('Failed to load courses:', error)
      } finally {
        setLoading(false)
      }
    }
    loadCourses()
  }, [])

  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        const posts = await getFeaturedBlogPosts(3)
        setFeaturedPosts(posts)
      } catch (error) {
        console.error('Failed to load blog posts:', error)
      } finally {
        setBlogLoading(false)
      }
    }
    loadBlogPosts()
  }, [])

  useEffect(() => {
    const loadFAQs = async () => {
      try {
        const data = await getFAQs()
        // Show first 7 FAQs on home page
        setFaqs(data.slice(0, 7))
      } catch (error) {
        console.error('Failed to load FAQs:', error)
      } finally {
        setFaqLoading(false)
      }
    }
    loadFAQs()
  }, [])

  useEffect(() => {
    const loadStatistics = async () => {
      try {
        const data = await getStatistics()
        setStatistics(data)
      } catch (error) {
        console.error('Failed to load statistics:', error)
        // Fallback to default values if API fails
        setStatistics({
          active_learners: 100,
          courses: 10,
          video_lessons: 50,
        })
      } finally {
        setStatsLoading(false)
      }
    }
    loadStatistics()
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[750px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero1.png)',
          backgroundPosition: 'center 30%'
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-za-ivory/98 via-za-ivory/90 via-za-ivory/75 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-10 sm:py-12 md:py-16 lg:py-20">
            {/* Left Panel - Text Content */}
            <div className="space-y-5 sm:space-y-6 md:space-y-8 z-10 pt-8 sm:pt-12">
              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-za-emerald leading-tight font-heading text-balance">
                Empowering Muslim Women Through Islamic Finance
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-za-ink/90 leading-relaxed font-body max-w-xl">
                We provide free education in halal finance, budgeting, and zakat so women can become financially independent in a halal way.
              </p>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <Link
                  to="/courses"
                  className="px-6 sm:px-8 py-3 sm:py-3.5 bg-za-emerald text-white rounded-full hover:bg-za-emerald-dark transition-all font-body font-semibold text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Start Learning Free
                </Link>
                <Link
                  to="/signup"
                  className="px-6 sm:px-8 py-3 sm:py-3.5 bg-za-beige text-za-ink rounded-full hover:bg-za-beige-light transition-all font-body font-semibold text-center border border-za-line shadow-sm hover:shadow-md"
                >
                  Join the Academy
                </Link>
              </div>
            </div>

            {/* Right Panel - Empty space for image visibility */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-za-ivory overflow-hidden">
        {/* Background illustration - Islamic architecture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute right-0 bottom-0 w-full h-full bg-gradient-to-t from-za-emerald/10 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-za-emerald text-center mb-12 sm:mb-16 md:mb-20 max-w-4xl mx-auto px-4 text-balance">
            Zakat Academy gives women the knowledge to control their money — in a halal way.
          </h2>

          {/* Three Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Card 1: No Access */}
            <div className="flex flex-col items-center transform hover:-translate-y-1 transition-all duration-300">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mb-5 sm:mb-6">
                <div className="w-full h-full rounded-full bg-za-beige flex items-center justify-center relative overflow-hidden shadow-soft">
                  {/* Woman icon placeholder */}
                  <svg className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-za-emerald/70" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                  {/* Forbidden icon overlay */}
                  <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-za-emerald rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl px-5 sm:px-6 py-4 sm:py-5 shadow-soft border border-za-line text-center w-full max-w-[280px]">
                <p className="text-base sm:text-lg font-semibold text-za-ink font-body">No access to Islamic finance</p>
              </div>
            </div>

            {/* Card 2: Confusion */}
            <div className="flex flex-col items-center transform hover:-translate-y-1 transition-all duration-300">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mb-5 sm:mb-6">
                <div className="w-full h-full rounded-full bg-za-emerald flex items-center justify-center relative overflow-hidden shadow-soft">
                  {/* Woman icon with question mark */}
                  <div className="relative">
                    <svg className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-white/90" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                    {/* Question mark */}
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                      <span className="text-za-emerald font-bold text-lg sm:text-xl">?</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl px-5 sm:px-6 py-4 sm:py-5 shadow-soft border border-za-line text-center w-full max-w-[280px]">
                <p className="text-base sm:text-lg font-semibold text-za-ink font-body">Confusion about halal income</p>
              </div>
            </div>

            {/* Card 3: Dependence */}
            <div className="flex flex-col items-center sm:col-span-2 lg:col-span-1 transform hover:-translate-y-1 transition-all duration-300">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mb-5 sm:mb-6">
                <div className="w-full h-full rounded-full bg-za-beige flex items-center justify-center relative overflow-hidden shadow-soft">
                  {/* Woman icon */}
                  <svg className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-za-emerald/70" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                  {/* Dependency icon overlay */}
                  <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-za-emerald" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl px-5 sm:px-6 py-4 sm:py-5 shadow-soft border border-za-line text-center w-full max-w-[280px]">
                <p className="text-base sm:text-lg font-semibold text-za-ink font-body">Dependence on others</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Learning Tracks Section */}
      <section 
        className="relative min-h-[450px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[650px] bg-cover bg-center bg-no-repeat py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
        style={{
          backgroundImage: 'url(/hero2.png)'
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-za-sand/97 via-za-sand/90 via-za-sand/80 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center py-6 sm:py-8">
            {/* Left Side - Text Content (2/3 width) */}
            <div className="lg:col-span-2 space-y-5 sm:space-y-6 md:space-y-8 z-10">
              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-za-emerald leading-tight font-heading text-balance">
                Flexible Learning Tracks
              </h2>

              {/* Sub-headline */}
              <p className="text-lg sm:text-xl md:text-2xl text-za-emerald/90 font-body">
                Study at your own pace and maximize your productivity
              </p>

              {/* Call to Action Button */}
              <div className="pt-2 sm:pt-4">
                <Link
                  to="/courses"
                  className="inline-block px-6 sm:px-8 py-3 sm:py-3.5 bg-za-emerald text-white rounded-full hover:bg-za-emerald-dark transition-all font-body font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Get Started
                </Link>
              </div>

              {/* Contact Information */}
              <div className="pt-6 sm:pt-8 space-y-1.5 text-za-emerald font-body">
                <p className="text-xs sm:text-sm md:text-base opacity-90">contact@zakatacademy.com</p>
                <p className="text-xs sm:text-sm md:text-base opacity-90">www.zakatacademy.com</p>
              </div>
            </div>

            {/* Right Side - Empty space (1/3 width) */}
            <div className="lg:col-span-1 relative hidden lg:block">
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-za-ink text-center mb-10 sm:mb-12 px-4">
            Why Choose Zakat Academy?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            <div className="bg-za-ivory rounded-2xl shadow-soft border border-za-line p-5 sm:p-6 transform hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-za-emerald/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-za-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold text-za-ink mb-2">Comprehensive Courses</h3>
              <p className="text-sm sm:text-base text-za-slate leading-relaxed">
                Structured learning paths from basics to advanced topics.
              </p>
            </div>
            <div className="bg-za-ivory rounded-2xl shadow-soft border border-za-line p-5 sm:p-6 transform hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-za-emerald/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-za-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold text-za-ink mb-2">Expert Guidance</h3>
              <p className="text-sm sm:text-base text-za-slate leading-relaxed">
                Learn from qualified instructors with deep knowledge.
              </p>
            </div>
            <div className="bg-za-ivory rounded-2xl shadow-soft border border-za-line p-5 sm:p-6 transform hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-za-emerald/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-za-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold text-za-ink mb-2">Self-Paced Learning</h3>
              <p className="text-sm sm:text-base text-za-slate leading-relaxed">
                Study at your own pace, anytime, anywhere.
              </p>
            </div>
            <div className="bg-za-ivory rounded-2xl shadow-soft border border-za-line p-5 sm:p-6 transform hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-za-emerald/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-za-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold text-za-ink mb-2">Community Support</h3>
              <p className="text-sm sm:text-base text-za-slate leading-relaxed">
                Join a community of learners on the same journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-za-emerald text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {statsLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-8 text-center">
              <div className="py-4">
                <div className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-2">0+</div>
                <div className="text-base sm:text-lg opacity-90">Active Learners</div>
              </div>
              <div className="py-4">
                <div className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-2">0+</div>
                <div className="text-base sm:text-lg opacity-90">Comprehensive Courses</div>
              </div>
              <div className="py-4">
                <div className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-2">0+</div>
                <div className="text-base sm:text-lg opacity-90">Video Lessons</div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-8 text-center">
              <AnimatedStatistic
                value={statistics.active_learners}
                label="Active Learners"
                suffix="+"
              />
              <AnimatedStatistic
                value={statistics.courses}
                label="Comprehensive Courses"
                suffix="+"
              />
              <AnimatedStatistic
                value={statistics.video_lessons}
                label="Video Lessons"
                suffix="+"
              />
            </div>
          )}
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-12 sm:py-16 md:py-20 bg-za-ivory">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-za-ink text-center mb-10 sm:mb-12 px-4">
            Featured Courses
          </h2>
          {loading ? (
            <div className="text-center text-za-slate py-12">Loading courses...</div>
          ) : featuredCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-8 sm:mb-10">
              {featuredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center text-za-slate py-12">No courses available yet.</div>
          )}
          <div className="text-center">
            <Link
              to="/courses"
              className="inline-block px-6 sm:px-8 py-3 sm:py-3.5 bg-za-emerald text-white rounded-full hover:bg-za-emerald-dark transition-all font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-za-ink mb-5 sm:mb-6 px-4">
              Our Mission
            </h2>
            <p className="text-base sm:text-lg text-za-slate leading-relaxed px-4">
              At Zakat Academy, we believe that understanding Zakat is essential for every Muslim. 
              Our mission is to provide accessible, comprehensive education about Zakat that empowers 
              individuals to fulfill this important pillar of Islam with confidence and clarity. 
              Through structured courses and expert guidance, we aim to make Islamic financial 
              education available to everyone, regardless of their background or prior knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-za-ivory">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 sm:mb-12 gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-za-ink px-2">
              Latest from Our Blog
            </h2>
            <Link
              to="/blog"
              className="text-za-emerald hover:text-za-emerald-dark transition-colors font-body font-semibold px-2"
            >
              View All →
            </Link>
          </div>
          {blogLoading ? (
            <div className="text-center text-za-slate py-12">Loading blog posts...</div>
          ) : featuredPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="bg-white rounded-2xl shadow-soft border border-za-line overflow-hidden hover:shadow-soft-md transition-all duration-300 transform hover:-translate-y-1"
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
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-za-ink mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-za-slate mb-4 line-clamp-3 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-za-slate">
                      <span>{post.author_name}</span>
                      <span>{new Date(post.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center text-za-slate py-12">No blog posts available yet.</div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-za-ink px-2">
              Frequently Asked Questions
            </h2>
            <Link
              to="/faq"
              className="text-za-emerald hover:text-za-emerald-dark transition-colors font-body font-semibold px-2"
            >
              View All →
            </Link>
          </div>
          {faqLoading ? (
            <div className="text-center text-za-slate py-12">Loading FAQs...</div>
          ) : faqs.length > 0 ? (
            <FAQAccordion faqs={faqs} />
          ) : (
            <div className="text-center text-za-slate py-12">No FAQs available yet.</div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Home
