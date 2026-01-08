import { useState } from 'react'

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-za-line last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 sm:py-5 text-left flex justify-between items-start gap-4 hover:bg-za-emerald/5 transition-colors rounded-lg px-2 -mx-2"
      >
        <span className="font-semibold text-za-ink text-sm sm:text-base flex-1">{question}</span>
        <svg
          className={`w-5 h-5 text-za-emerald transition-transform flex-shrink-0 mt-0.5 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-4 sm:pb-5 text-za-slate text-sm sm:text-base leading-relaxed px-2">
          {answer}
        </div>
      )}
    </div>
  )
}

const FAQAccordion = ({ faqs, showTitle = false }) => {
  return (
    <div className="bg-za-ivory rounded-2xl shadow-soft border border-za-line p-5 sm:p-6 md:p-8">
      {showTitle && (
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-za-ink mb-6 sm:mb-8">Frequently Asked Questions</h2>
      )}
      <div className="space-y-0">
        {faqs.map((faq, index) => (
          <FAQItem key={faq.id || index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  )
}

export default FAQAccordion

