import React from 'react'

export default function TrustBannerSection() {
  return (
    <section className="bg-[#eaf5fa] border-t border-[#101828] py-3.5 sm:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 lg:gap-16 text-[#0b2a4a] text-sm sm:text-base font-medium">
        
        {/* Trustpilot Block */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          {/* 5 Green Squares with White Stars */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-5 h-5 bg-[#00b67a] flex items-center justify-center rounded-[2px]">
                <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
            ))}
          </div>

          {/* Trustpilot Logo Star & Name */}
          <div className="flex items-center gap-1 text-[#00b67a] font-bold">
            <svg className="w-4 h-4 fill-[#00b67a]" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <span className="text-[#191919] font-bold tracking-tight text-base">Trustpilot</span>
          </div>

          {/* Trustpilot Rating Text */}
          <span className="text-[#0b2a4a] font-medium ml-1">
            4.9 out of 5 based on 125,355 reviews
          </span>
        </div>

        {/* Google Reviews Block */}
        <div className="flex items-center gap-2.5 flex-wrap justify-center">
          {/* 5 Yellow Stars */}
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-[#ffb400]" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>

          {/* Google Rating Text */}
          <span className="text-[#0b2a4a] font-normal">
            200,000+ reviews on <strong className="font-bold">Google</strong>
          </span>
        </div>

      </div>
    </section>
  )
}
