import React from 'react'

export default function AboutSection() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#009fe3]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "We're here to help",
      description: "With over 800 locations and 24/7 online access.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#009fe3]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      title: "We offer same-day funding*",
      description: "Receive approval in minutes and get the money you need to tackle your day.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#009fe3]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="5" rx="2" />
          <line x1="2" x2="22" y1="10" y2="10" />
          <path d="M7 15h.01" />
          <path d="M11 15h2" />
        </svg>
      ),
      title: "We keep it real",
      description: "We're committed to transparency and protecting your personal information.",
    },
  ]

  const handleExploreLoans = () => {
    const el = document.getElementById('loan-types')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-[#f4f9fc] py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2a4a] text-center tracking-tight leading-tight max-w-3xl mx-auto">
          Turning someday into today starts at Advance America
        </h2>

        {/* Subtitle */}
        <p className="text-[#0b2a4a]/85 text-base sm:text-lg text-center max-w-2xl mx-auto mt-4 mb-14 sm:mb-16 leading-relaxed font-normal">
          Through 25+ years and over 157 million loans, Advance America has helped our customers build stronger tomorrows. Let's get started on yours.
        </p>

        {/* 3 Feature Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto mb-14 sm:mb-16">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              
              {/* Icon Circle */}
              <div className="w-18 h-18 rounded-full bg-white shadow-xs border border-gray-100 flex items-center justify-center mb-6">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#0b2a4a] mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[#0b2a4a]/75 text-sm sm:text-base leading-relaxed max-w-xs font-normal">
                {feature.description}
              </p>

            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex justify-center">
          <button
            onClick={handleExploreLoans}
            className="bg-[#FFD100] hover:bg-[#f2c400] text-[#002B49] font-bold text-base sm:text-lg px-8 py-3.5 rounded-full shadow-xs transition-all duration-200 cursor-pointer active:scale-95"
          >
            Explore our loans
          </button>
        </div>

      </div>
    </section>
  )
}
