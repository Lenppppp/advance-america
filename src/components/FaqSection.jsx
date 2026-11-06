import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FaqSection() {
  const faqs = [
    {
      question: 'What do I need to apply for a loan?',
      answer:
        'To apply, you typically need a government-issued ID, proof of income (like a pay stub), an active checking account, and a valid SSN.',
    },
    {
      question: 'How long does it take to get approved?',
      answer:
        'Many customers receive an approval decision in just minutes. Once approved, you can often get your money the same day.',
    },
    {
      question: 'Can I get a loan with bad credit?',
      answer:
        'Yes! Advance America looks at more than just your credit score. We consider your overall ability to repay the loan.',
    },
    {
      question: 'Is my personal information secure?',
      answer:
        'Absolutely. We use bank-level encryption and rigorous security protocols to ensure your data is always protected.',
    },
  ]

  // Track open state for each item (first open by default)
  const [openIndexes, setOpenIndexes] = useState([0])

  const toggleFaq = (idx) => {
    if (openIndexes.includes(idx)) {
      setOpenIndexes(openIndexes.filter((i) => i !== idx))
    } else {
      setOpenIndexes([...openIndexes, idx])
    }
  }

  return (
    <section className="bg-white py-16 sm:py-24 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2a4a] text-center tracking-tight mb-12 sm:mb-16">
          Frequently Asked Questions
        </h2>

        {/* FAQ Accordion List */}
        <div className="divide-y divide-gray-100 border-t border-b border-gray-100">
          {faqs.map((faq, idx) => {
            const isOpen = openIndexes.includes(idx)
            return (
              <div key={idx} className="py-5 sm:py-6">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer focus:outline-hidden"
                >
                  <span className="text-lg sm:text-xl font-bold text-[#0b2a4a] group-hover:text-[#0052cc] transition-colors">
                    {faq.question}
                  </span>
                  <div className="text-[#0b2a4a] shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#0b2a4a]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#0b2a4a]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <p className="mt-3.5 text-[#0b2a4a]/80 text-base sm:text-lg leading-relaxed font-normal pr-8">
                    {faq.answer}
                  </p>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
