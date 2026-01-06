import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCourses } from '../api/courses'
import CourseCard from '../components/CourseCard'
import FAQAccordion from '../components/FAQAccordion'

const Home = () => {
  const [featuredCourses, setFeaturedCourses] = useState([])
  const [loading, setLoading] = useState(true)

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

  const faqs = [
    {
      question: 'What is Zakat Academy?',
      answer: 'Zakat Academy is an online learning platform dedicated to teaching the fundamentals of Zakat, one of the five pillars of Islam. We provide comprehensive courses on Zakat calculation, distribution, and its spiritual significance.',
    },
    {
      question: 'How do I get access to courses?',
      answer: 'You can request access by signing up for an account. Once your account is approved by our admin team, you will be able to enroll in courses and start learning.',
    },
    {
      question: 'Are the courses free?',
      answer: 'Yes, all our courses are free to access once your account is approved. We believe in making Islamic education accessible to everyone.',
    },
    {
      question: 'What will I learn?',
      answer: 'You will learn about Zakat fundamentals, calculation methods, types of wealth subject to Zakat, distribution principles, and contemporary applications of Zakat in modern contexts.',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-za-ivory to-za-sand">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-za-ink mb-6">
            Learn the Fundamentals of Zakat
          </h1>
          <p className="text-xl md:text-2xl text-za-slate mb-8 max-w-3xl mx-auto">
            Deepen your understanding of one of the five pillars of Islam through comprehensive, 
            accessible courses designed for learners at all levels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="px-8 py-3 bg-za-emerald text-white rounded-full hover:bg-za-forest transition font-semibold"
            >
              Explore Courses
            </Link>
            <Link
              to="/signup"
              className="px-8 py-3 bg-za-gold text-za-emerald rounded-full hover:opacity-90 transition font-semibold"
            >
              Request Access
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-za-ink text-center mb-12">
            Why Choose Zakat Academy?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-za-ivory rounded-2xl shadow-sm border border-za-line p-6">
              <div className="w-12 h-12 bg-za-emerald/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-za-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold text-za-ink mb-2">Comprehensive Courses</h3>
              <p className="text-za-slate">
                Structured learning paths from basics to advanced topics.
              </p>
            </div>
            <div className="bg-za-ivory rounded-2xl shadow-sm border border-za-line p-6">
              <div className="w-12 h-12 bg-za-emerald/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-za-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold text-za-ink mb-2">Expert Guidance</h3>
              <p className="text-za-slate">
                Learn from qualified instructors with deep knowledge.
              </p>
            </div>
            <div className="bg-za-ivory rounded-2xl shadow-sm border border-za-line p-6">
              <div className="w-12 h-12 bg-za-emerald/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-za-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold text-za-ink mb-2">Self-Paced Learning</h3>
              <p className="text-za-slate">
                Study at your own pace, anytime, anywhere.
              </p>
            </div>
            <div className="bg-za-ivory rounded-2xl shadow-sm border border-za-line p-6">
              <div className="w-12 h-12 bg-za-emerald/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-za-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold text-za-ink mb-2">Community Support</h3>
              <p className="text-za-slate">
                Join a community of learners on the same journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-za-emerald text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2">100+</div>
              <div className="text-lg opacity-90">Active Learners</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2">10+</div>
              <div className="text-lg opacity-90">Comprehensive Courses</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Video Lessons</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-za-ink text-center mb-12">
            Featured Courses
          </h2>
          {loading ? (
            <div className="text-center text-za-slate">Loading courses...</div>
          ) : featuredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {featuredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center text-za-slate">No courses available yet.</div>
          )}
          <div className="text-center">
            <Link
              to="/courses"
              className="inline-block px-8 py-3 bg-za-emerald text-white rounded-full hover:bg-za-forest transition font-semibold"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-20 bg-za-ivory">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-za-ink mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-za-slate leading-relaxed">
              At Zakat Academy, we believe that understanding Zakat is essential for every Muslim. 
              Our mission is to provide accessible, comprehensive education about Zakat that empowers 
              individuals to fulfill this important pillar of Islam with confidence and clarity. 
              Through structured courses and expert guidance, we aim to make Islamic financial 
              education available to everyone, regardless of their background or prior knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </div>
  )
}

export default Home

