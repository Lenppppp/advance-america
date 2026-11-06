import React from 'react'

export default function AdvanceAmericaAdvantageSection({ onOpenForm, onOpenStoreLocations }) {
  const stats = [
    {
      num: '157+',
      unit: 'million',
      label: 'loans issued',
    },
    {
      num: '800+',
      unit: 'stores',
      label: 'and online loans',
    },
    {
      num: '25+ years',
      unit: '',
      label: 'providing loans',
    },
  ]

  return (
    <section className="bg-[#082947] text-white py-16 sm:py-24 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        
        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          The Advance America advantage
        </h2>

        {/* 3 Stat Columns with Vertical Dividers */}
        <div className="py-6 border-y border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/15">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-1 py-2 md:py-0 px-4 flex flex-col justify-end items-center">
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none">
                  <p>{stat.num}</p>
                  {stat.unit && <p className="mt-0.5">{stat.unit}</p>}
                </div>
                <p className="text-xs sm:text-sm font-normal text-slate-300 pt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenForm}
            className="bg-[#FFD100] hover:bg-[#f2c400] text-[#002B49] font-bold text-base sm:text-lg px-9 py-3.5 rounded-full shadow-lg transition-all duration-200 cursor-pointer active:scale-95"
          >
            Start Verification
          </button>

          <button
            onClick={onOpenStoreLocations}
            className="bg-transparent border border-white text-white hover:bg-white/10 font-bold text-base sm:text-lg px-8 py-3.5 rounded-full transition-all duration-200 cursor-pointer active:scale-95"
          >
            Find a Store
          </button>
        </div>

      </div>
    </section>
  )
}
