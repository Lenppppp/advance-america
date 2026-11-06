import React from 'react'
import AdvanceAmericaAdvantageSection from './AdvanceAmericaAdvantageSection'
import {
  CheckCircle2,
  Clock,
  ThumbsUp,
  CreditCard,
  Laptop,
  Shield,
  Zap,
} from 'lucide-react'

export default function OnlineLoansPage({ onOpenForm, onOpenStoreLocations, onGoHome }) {
  const badCreditFeatures = [
    {
      icon: <Laptop className="w-6 h-6 text-[#0052cc]" />,
      title: 'Easy online application',
      description: 'Apply in minutes from your smartphone, tablet, or desktop with no paperwork hassle.',
    },
    {
      icon: <Shield className="w-6 h-6 text-[#0052cc]" />,
      title: 'Decisions beyond credit scores',
      description: 'We evaluate your overall financial picture, including income and employment stability.',
    },
    {
      icon: <Zap className="w-6 h-6 text-[#0052cc]" />,
      title: 'Fast funding options',
      description: 'Get money deposited directly into your bank account as fast as the same day.',
    },
  ]

  const useCases = [
    'Rent or mortgage',
    'Groceries & essential supplies',
    'Unexpected car repairs',
    'Medical or dental bills',
    'Utility & utility bill deadlines',
    'Household emergency repairs',
  ]

  const steps123 = [
    {
      number: '1',
      title: 'Apply online in minutes',
      description: 'Fill out our short online form with your basic details.',
    },
    {
      number: '2',
      title: 'Get an instant decision',
      description: 'We review your application immediately and provide a fast decision.',
    },
    {
      number: '3',
      title: 'Receive money the same day*',
      description: 'Approved funds are sent straight to your bank account.',
    },
  ]

  return (
    <div className="min-h-screen text-[#0b2a4a]">
      
      {/* Breadcrumb Bar */}
      <div className="bg-white py-2.5 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs sm:text-sm font-medium text-gray-600 flex items-center gap-1.5">
          <button
            onClick={onGoHome}
            className="hover:text-[#0052cc] transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>&gt;</span>
          <span className="text-[#0b2a4a] font-bold">Online Loans</span>
        </div>
      </div>

      {/* 1st Section / Full Width Hero Section */}
      <section className="bg-[#082947] text-white relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 sm:space-y-8">
            
            <p className="text-[#FFD100] font-bold text-lg sm:text-xl tracking-wide uppercase">
              Fast Digital Funding
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05]">
              Online Loans
            </h1>

            <p className="text-slate-200 text-xl sm:text-2xl font-medium leading-relaxed">
              Fast, convenient loans from the comfort of home.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#FFD100] shrink-0" />
                <span className="text-slate-200 font-semibold text-base">Instant Approval Decision</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#FFD100] shrink-0" />
                <span className="text-slate-200 font-semibold text-base">Same-Day Deposit*</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#FFD100] shrink-0" />
                <span className="text-slate-200 font-semibold text-base">All Credit Types Welcome</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenForm}
                className="bg-[#FFD100] hover:bg-[#f2c400] text-[#002B49] font-bold text-base sm:text-lg px-9 py-4 rounded-full shadow-lg transition-all duration-200 cursor-pointer active:scale-95"
              >
                Start Verification
              </button>

              <button
                onClick={onOpenStoreLocations}
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold text-base sm:text-lg px-8 py-3.5 rounded-full transition-all duration-200 cursor-pointer active:scale-95"
              >
                Find a Store
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Trustbar Section */}
      <section className="bg-[#eaf5fa] py-3.5 border-y border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm text-[#0b2a4a]">
            <div className="flex items-center gap-1.5 text-center sm:text-left">
              <span className="italic font-semibold">&quot;Quick, fast and easy&quot;</span>
              <span className="text-[#0b2a4a]/75 font-normal">- customer, 04/10/2021</span>
            </div>

            <span className="hidden sm:inline text-gray-400 font-light">|</span>

            <div className="flex items-center gap-1.5">
              <strong className="font-extrabold text-[#0b2a4a]">124,938 reviews</strong>
              <span className="text-[#0b2a4a]/80 font-normal">on</span>
              
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-[#00b67a] flex items-center justify-center rounded-xs">
                  <svg className="w-3 h-3 text-white fill-current" viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <span className="font-bold text-base tracking-tight text-[#0b2a4a]">
                  Trustpilot
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explanatory Content Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2a4a] tracking-tight mb-8">
            Fast and easy Online Loans
          </h2>

          <p className="text-[#0b2a4a]/85 text-base sm:text-lg leading-relaxed font-normal mb-6 max-w-3xl mx-auto">
            When life presents unexpected expenses, an Advance America <strong className="font-bold text-[#0b2a4a]">Online Loan</strong> offers a quick and simple way to get cash without visiting a store. Apply anytime from your desktop or mobile device.
          </p>

          <p className="text-[#0b2a4a]/85 text-base sm:text-lg leading-relaxed font-normal max-w-3xl mx-auto">
            Our streamlined digital process ensures you get an instant approval decision and fast funding directly to your bank account.
          </p>
        </div>
      </section>

      {/* Bad Credit Section */}
      <section className="bg-[#f4f9fc] py-16 sm:py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2a4a] tracking-tight mb-4">
            Online Loans for Bad Credit
          </h2>

          <p className="text-[#0b2a4a]/80 text-base sm:text-lg font-normal mb-14 max-w-2xl mx-auto">
            Don&apos;t let a less-than-perfect credit score hold you back. Advance America looks beyond traditional credit scores to help you qualify.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {badCreditFeatures.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 shadow-xs border border-gray-100 flex flex-col items-center text-center transition-transform hover:scale-105"
              >
                <div className="w-14 h-14 rounded-full bg-[#eaf5fa] flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0b2a4a] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#0b2a4a]/75 text-sm sm:text-base leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              onClick={onOpenForm}
              className="bg-[#FFD100] hover:bg-[#f2c400] text-[#002B49] font-bold text-base sm:text-lg px-10 py-3.5 rounded-full shadow-md transition-all duration-200 cursor-pointer active:scale-95"
            >
              Start Verification
            </button>
          </div>
        </div>
      </section>

      {/* Cash when you need it Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2a4a] tracking-tight mb-4">
            Cash when you need it
          </h2>

          <p className="text-[#0b2a4a]/80 text-base sm:text-lg font-normal mb-12">
            Online loans can help cover expenses like:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="bg-[#f4f9fc] rounded-2xl py-4 px-6 border border-gray-100 flex items-center gap-3 text-left"
              >
                <CheckCircle2 className="w-5 h-5 text-[#0052cc] shrink-0" />
                <span className="text-[#0b2a4a] font-bold text-sm sm:text-base">
                  {useCase}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps 1-2-3 Section */}
      <section className="bg-[#f4f9fc] py-16 sm:py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2a4a] tracking-tight mb-16">
            Getting a loan is as easy as 1-2-3
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-left mb-12">
            {steps123.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FFD100] text-[#002B49] font-black text-lg flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0b2a4a] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#0b2a4a]/75 text-sm sm:text-base leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenForm}
              className="bg-[#FFD100] hover:bg-[#f2c400] text-[#002B49] font-bold text-base sm:text-lg px-8 py-3.5 rounded-full shadow-md transition-all duration-200 cursor-pointer active:scale-95"
            >
              Start Verification
            </button>

            <button
              onClick={onOpenStoreLocations}
              className="bg-transparent border-2 border-[#0b2a4a] text-[#0b2a4a] hover:bg-[#0b2a4a]/10 font-bold text-base sm:text-lg px-8 py-3 rounded-full transition-all duration-200 cursor-pointer active:scale-95"
            >
              Find a store
            </button>
          </div>
        </div>
      </section>

      {/* Advantage Section */}
      <AdvanceAmericaAdvantageSection
        onOpenForm={onOpenForm}
        onOpenStoreLocations={onOpenStoreLocations}
      />

    </div>
  )
}
