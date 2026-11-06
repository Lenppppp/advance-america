import React from 'react'

export default function HowItWorksSection({ onOpenForm }) {
  const steps = [
    {
      num: '1',
      text: 'Start your application online or apply in the store.',
    },
    {
      num: '2',
      text: 'Get approved within minutes.',
    },
    {
      num: '3',
      text: 'Receive money the same day.*',
    },
  ]

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2a4a] text-center tracking-tight mb-12 sm:mb-16">
          Getting a loan is fast and easy
        </h2>

        {/* 3 Steps Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto mb-12 sm:mb-16">
          {steps.map((step) => (
            <div key={step.num} className="flex items-center gap-4">
              {/* Circular Number Badge */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#b8e2f8] bg-[#eaf5fa] flex items-center justify-center shrink-0">
                <span className="text-xl sm:text-2xl font-bold italic text-[#0b2a4a]">
                  {step.num}
                </span>
              </div>

              {/* Step Text */}
              <p className="text-[#0b2a4a] font-medium text-base sm:text-lg leading-snug">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* Center CTA Button */}
        <div className="flex justify-center mb-10">
          <button
            onClick={onOpenForm}
            className="bg-[#FFD100] hover:bg-[#f2c400] text-[#002B49] font-bold text-base sm:text-lg px-8 py-3.5 rounded-full shadow-xs transition-all duration-200 cursor-pointer active:scale-95"
          >
            Start Verification
          </button>
        </div>

        {/* Footnote Disclaimer */}
        <p className="text-[11px] sm:text-xs text-[#0b2a4a]/75 text-center max-w-2xl mx-auto leading-normal font-normal">
          *Online approvals before 10:30 AM ET (M-F) are typically funded to your bank account by 5 PM ET same-day. Approvals after 10:30 AM ET are typically funded in the morning the next business day.
        </p>

      </div>
    </section>
  )
}
