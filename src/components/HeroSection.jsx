import React from 'react'
import heroWoman from '../assets/hero-woman-clean.png'

export default function HeroSection({ onOpenForm }) {
  return (
    <section className="bg-[#ffd200] relative overflow-hidden flex items-end">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 lg:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-8 lg:gap-4">
          
          {/* Left Column: Woman Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start items-end h-full self-end">
            <img
              src={heroWoman}
              alt="Woman wearing Budget Boss hat smiling"
              className="w-auto h-auto max-h-[480px] sm:max-h-[560px] lg:max-h-[620px] object-contain object-bottom block align-bottom -mb-1"
            />
          </div>

          {/* Right Column: Hero Content */}
          <div className="lg:col-span-6 flex flex-col justify-center py-10 lg:py-16 text-[#0b2a4a] z-10 pl-0 lg:pl-6 self-center">
            
            {/* Sub-headline */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight mb-2">
              You wear a lot of hats.
            </h2>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 max-w-xl">
              Make it work with fast, easy loans.
            </h1>

            {/* Bullet Points */}
            <ul className="space-y-3 mb-8 font-medium text-base sm:text-lg text-[#0b2a4a]">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#0b2a4a] rounded-full shrink-0"></span>
                <span>Approved in minutes.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#0b2a4a] rounded-full shrink-0"></span>
                <span>Money same day.*</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#0b2a4a] rounded-full shrink-0"></span>
                <span>Good credit not needed.</span>
              </li>
            </ul>

            {/* Primary Action Button */}
            <div>
              <button
                onClick={onOpenForm}
                className="bg-[#0b2a4a] hover:bg-[#06192d] text-white font-bold text-base sm:text-lg px-8 py-3 rounded-full shadow-xs transition-all duration-200 cursor-pointer active:scale-95"
              >
                Start Verification
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
