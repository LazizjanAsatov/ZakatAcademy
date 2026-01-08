import { useEffect, useState } from 'react'
import { getFAQs } from '../api/faq'
import FAQAccordion from '../components/FAQAccordion'

const FAQ = () => {
  const [faqs, setFaqs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadFAQs = async () => {
      try {
        const data = await getFAQs()
        setFaqs(data)
      } catch (error) {
        console.error('Failed to load FAQs:', error)
      } finally {
        setLoading(false)
      }
    }
    loadFAQs()
  }, [])

  return (
    <div className="py-10 md:py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-za-emerald mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-za-slate mb-12">
          Find answers to common questions about Zakat Academy and Islamic finance.
        </p>

        {loading ? (
          <div className="text-center text-za-slate py-12">Loading FAQs...</div>
        ) : faqs.length > 0 ? (
          <FAQAccordion faqs={faqs} />
        ) : (
          <div className="text-center text-za-slate py-12">No FAQs available yet.</div>
        )}
      </div>
    </div>
  )
}

export default FAQ
