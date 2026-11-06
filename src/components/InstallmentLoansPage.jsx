import React from 'react'
import paydayManImg from '../assets/payday-man.webp'
import AdvanceAmericaAdvantageSection from './AdvanceAmericaAdvantageSection'
import { Calendar, Banknote, Clock } from 'lucide-react'

export default function InstallmentLoansPage({ onOpenForm, onOpenStoreLocations, onGoHome }) {
  const steps = [
    {
      number: '1',
      title: 'Apply online or in store',
      description: 'Fill out our short application in just a few minutes - online or at your local store.',
    },
    {
      number: '2',
      title: 'Get an instant decision',
      description: 'Receive an approval decision quickly, so you know where you stand right away.',
    },
    {
      number: '3',
      title: 'Receive your funds',
      description: 'Get your money deposited the same day and start making affordable monthly payments.',
    },
  ]

  const whyChooseFeatures = [
    {
      icon: <Calendar className="w-6 h-6 text-[#0052cc]" />,
      title: 'Fixed monthly payments',
      description:
        "Know exactly how much you'll pay each month - no surprises, no guesswork.",
    },
    {
      icon: <Banknote className="w-6 h-6 text-[#0052cc]" />,
      title: 'Larger loan amounts',
      description:
        'Borrow more for bigger expenses, with flexible repayment built into your budget.',
    },
    {
      icon: <Clock className="w-6 h-6 text-[#0052cc]" />,
      title: 'Quick approval',
      description:
        'Get an instant decision and receive your funds the same day you apply.',
    },
  ]

  return (
    <div className="min-h-screen text-[#0b2a4a]">
      
      {/* Breadcrumb Bar */}
      <div className="bg-white py-2 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs sm:text-sm font-medium text-gray-600 flex items-center gap-1.5">
          <button
            onClick={onGoHome}
            className="hover:text-[#0052cc] transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>&gt;</span>
          <span className="text-[#0b2a4a] font-bold">Installment Loans</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-[#ffd200] relative overflow-hidden py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
            
            {/* Left Image Column */}
            <div className="lg:col-span-6 flex justify-center lg:justify-start">
              <img
                src={paydayManImg}
                alt="Installment Loan applicant smiling"
                className="w-auto h-auto max-h-[440px] sm:max-h-[500px] object-contain block"
              />
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-6 space-y-6 text-[#0b2a4a]">
              
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                Flexible Monthly Payments
              </h2>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Installment Loans
              </h1>

              <p className="text-[#0b2a4a]/90 text-lg sm:text-xl font-medium leading-relaxed">
                Borrow larger amounts and pay back over time in affordable monthly payments.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenForm}
                  className="bg-[#0b2a4a] hover:bg-[#06192d] text-white font-bold text-base sm:text-lg px-8 py-3.5 rounded-full shadow-md transition-all duration-200 cursor-pointer active:scale-95"
                >
                  Start Verification
                </button>

                <button
                  onClick={onOpenStoreLocations}
                  className="bg-transparent border-2 border-[#0b2a4a] text-[#0b2a4a] hover:bg-[#0b2a4a]/10 font-bold text-base sm:text-lg px-8 py-3 rounded-full transition-all duration-200 cursor-pointer active:scale-95"
                >
                  Find a Store
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Trustbar Quote Section */}
      <section className="bg-[#eaf5fa] py-3 border-y border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs sm:text-sm text-[#0b2a4a]">
            
            <div className="flex items-center gap-1 text-center sm:text-left">
              <span className="italic font-semibold">&quot;Friendly service and great rates!&quot;</span>
              <span className="text-[#0b2a4a]/70 font-normal">- Installment Loan customer</span>
            </div>

            <span className="hidden sm:inline text-gray-400">|</span>

            <div className="flex items-center gap-1.5">
              <strong className="font-bold text-[#0b2a4a]">124,938 reviews</strong>
              <span className="text-[#0b2a4a]/75 font-normal">on</span>
              
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2a4a] tracking-tight">
            What is an Installment Loan and how does it work?
          </h2>

          <p className="text-[#0b2a4a]/80 text-base sm:text-lg leading-relaxed font-normal max-w-3xl mx-auto">
            An <strong className="font-bold text-[#0b2a4a]">Installment Loan</strong> allows you to borrow a larger lump sum of money upfront and pay it back over a fixed period with scheduled monthly payments. Unlike short-term loans, installment loans give you more time and flexibility to manage your budget comfortably.
          </p>

          <p className="text-[#0b2a4a]/80 text-base sm:text-lg leading-relaxed font-normal max-w-3xl mx-auto">
            Whether you need to handle major home repairs, consolidate debt, or cover emergency medical bills, our installment loans offer clear terms with no hidden surprises.
          </p>

        </div>
      </section>

      {/* Steps 1-2-3 Section */}
      <section className="bg-[#f4f9fc] py-16 sm:py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2a4a] tracking-tight mb-16">
            Get an Installment Loan in 3 easy steps
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-left mb-12">
            {steps.map((step, idx) => (
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

      {/* Why Choose Installment Loans Features */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2a4a] text-center tracking-tight mb-14">
            Why choose an Installment Loan?
          </h2>

          <div className="space-y-8 max-w-3xl mx-auto">
            {whyChooseFeatures.map((item, idx) => (
              <div key={idx} className="flex items-start gap-5 p-4 rounded-2xl bg-[#f4f9fc] border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#0b2a4a] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-[#0b2a4a]/80 text-base leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
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
