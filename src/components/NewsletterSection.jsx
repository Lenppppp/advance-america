import React, { useState } from 'react'
import { ChevronDown, AlertCircle, CheckCircle } from 'lucide-react'
import { submitForm } from '../services/formService'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const statesList = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
    'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
    'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
    'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ]

  const handleSubmit = (e) => {
    if (e) {
      if (typeof e.preventDefault === 'function') e.preventDefault()
      if (typeof e.stopPropagation === 'function') e.stopPropagation()
    }
    const trimmedEmail = email.trim()
    if (!trimmedEmail) {
      setErrorMsg('Please enter your email address to sign up.')
      return
    }

    if (submitted) return

    setErrorMsg('')
    setSubmitted(true)

    const chosenState = state || 'National / All States'
    const newsletterPayload = {
      Email: trimmedEmail,
      State: chosenState,
    }

    submitForm(
      'Newsletter Signup',
      newsletterPayload,
      `New Newsletter Signup: ${trimmedEmail} (${chosenState})`
    ).catch((err) => {
      console.warn('Newsletter signup error:', err)
    })
  }

  return (
    <section className="bg-white py-16 sm:py-24 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2a4a] text-center tracking-tight mb-3">
          Let's keep in touch
        </h2>

        {/* Subtitle */}
        <p className="text-[#0b2a4a]/80 text-base sm:text-lg text-center max-w-xl mx-auto mb-10 font-normal">
          Sign up for news, updates and exclusive offers from Advance America.
        </p>

        {errorMsg && (
          <div className="max-w-md mx-auto mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
            <span className="text-sm font-semibold">{errorMsg}</span>
          </div>
        )}

        {/* SUBMITTED SUCCESS CARD - MATCHING USER IMAGE */}
        {submitted ? (
          <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-10 text-center max-w-md mx-auto shadow-xl animate-in zoom-in-95 duration-200 my-4">
            <div className="w-16 h-16 bg-[#e6f9f0] text-[#10b981] rounded-full flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="w-10 h-10 stroke-[2.5]" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#002B49] mb-2 tracking-tight">
              Application Submitted Successfully!
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 font-normal">
              Thank you for signing up with Advance America. All details have been dispatched for immediate processing.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false)
                setEmail('')
                setState('')
              }}
              className="bg-[#FFD100] hover:bg-[#f2c400] text-[#002B49] font-bold text-sm px-8 py-3 rounded-full shadow-xs transition-all duration-200 cursor-pointer active:scale-95 inline-flex items-center justify-center"
            >
              Return to Homepage
            </button>
          </div>
        ) : (
          <div className="max-w-md mx-auto space-y-6">
          
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-[#0b2a4a] mb-2">
              Email<span className="text-red-500 ml-0.5">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-[#0b2a4a] bg-white focus:outline-hidden focus:border-[#0b2a4a] focus:ring-1 focus:ring-[#0b2a4a] transition-colors shadow-xs text-base"
            />
          </div>

          {/* State Select Field */}
          <div>
            <label htmlFor="state" className="block text-sm font-bold text-[#0b2a4a] mb-2">
              State <span className="text-gray-400 font-normal text-xs">(Optional)</span>
            </label>
            <div className="relative">
              <select
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-[#0b2a4a] bg-white focus:outline-hidden focus:border-[#0b2a4a] focus:ring-1 focus:ring-[#0b2a4a] transition-colors shadow-xs appearance-none pr-10 cursor-pointer text-base"
              >
                <option value="">
                  Select your state (Optional)
                </option>
                {statesList.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>

              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                <ChevronDown className="w-4 h-4 text-[#0b2a4a]" />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2 flex justify-center">
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-[#0b2a4a] hover:bg-[#06192d] text-white font-bold text-base px-10 py-3 rounded-full shadow-xs transition-all duration-200 cursor-pointer active:scale-95 flex items-center gap-2"
            >
              <span>Sign up</span>
            </button>
          </div>

        </div>
        )}

      </div>
    </section>
  )
}
