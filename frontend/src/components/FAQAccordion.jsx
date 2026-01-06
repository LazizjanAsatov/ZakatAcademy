import { useState } from 'react'

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-za-line">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 text-left flex justify-between items-center"
      >
        <span className="font-semibold text-za-ink">{question}</span>
        <svg
          className={`w-5 h-5 text-za-emerald transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-4 text-za-slate">
          {answer}
        </div>
      )}
    </div>
  )
}

const FAQAccordion = ({ faqs }) => {
  return (
    <div className="bg-za-ivory rounded-2xl shadow-sm border border-za-line p-6 md:p-8">
      <h2 className="text-3xl font-heading font-bold text-za-ink mb-8">Frequently Asked Questions</h2>
      <div className="space-y-0">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  )
}

export default FAQAccordion

