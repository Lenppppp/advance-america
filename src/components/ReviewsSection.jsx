import React from 'react'
import bbbBadge from '../assets/bbb-badge-clean.png'
import directLenderBadge from '../assets/direct-lender-badge-clean.png'

export default function ReviewsSection() {
  const reviews = [
    {
      quote: '"Good customer services!"',
      author: '— Thomas, 03/24/2026',
    },
    {
      quote: '"Great experience fast and easy"',
      author: '— Michael, 03/24/2026',
    },
    {
      quote: '"Great service with Christina and fast process with title loans!!!"',
      author: '— Bonnie, 03/24/2026',
    },
  ]

  return (
    <section className="bg-white py-16 sm:py-24 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2a4a] text-center tracking-tight mb-10">
          Trusted by millions of customers
        </h2>

        {/* Badges Row */}
        <div className="flex items-center justify-center gap-6 sm:gap-10 mb-12">
          <img
            src={bbbBadge}
            alt="BBB Accredited Business A+ Rating"
            className="h-20 sm:h-24 w-auto object-contain"
          />
          <img
            src={directLenderBadge}
            alt="State Licensed Direct Lender"
            className="h-20 sm:h-24 w-auto object-contain"
          />
        </div>

        {/* Aggregate Ratings Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 lg:gap-16 text-[#0b2a4a] text-sm sm:text-base mb-16 font-normal">
          
          {/* Google Rating */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-[#ffb400]" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span>
              200,000+ reviews on <strong className="font-bold">Google</strong>
            </span>
          </div>

          {/* Trustpilot Summary Rating */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-5 h-5 bg-[#00b67a] flex items-center justify-center rounded-[2px]">
                  <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1 font-bold text-[#00b67a]">
              <svg className="w-4 h-4 fill-[#00b67a]" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <span className="text-[#191919] font-bold">Trustpilot</span>
            </div>
            <span>Rated 4.9/5 based on 125,355 reviews</span>
          </div>

        </div>

        {/* 3 Customer Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {reviews.map((rev, idx) => (
            <div key={idx} className="flex flex-col items-center text-center justify-between min-h-[130px]">
              
              {/* Quote */}
              <p className="text-[#0b2a4a] font-normal text-base sm:text-lg mb-2 leading-snug">
                {rev.quote}
              </p>

              {/* Author & Rating */}
              <div className="flex flex-col items-center gap-2">
                <span className="text-[#0b2a4a]/75 text-sm font-normal">
                  {rev.author}
                </span>

                {/* Trustpilot Badge */}
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="flex items-center gap-1 text-[#00b67a] font-bold text-xs">
                    <svg className="w-3.5 h-3.5 fill-[#00b67a]" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <span className="text-[#191919] font-bold text-xs">Trustpilot</span>
                  </div>

                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-3.5 h-3.5 bg-[#00b67a] flex items-center justify-center rounded-[1.5px]">
                        <svg className="w-2.5 h-2.5 fill-white" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
