import React from 'react'
import AdvanceAmericaAdvantageSection from './AdvanceAmericaAdvantageSection'
import {
  CreditCard,
  RefreshCw,
  Zap,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Percent,
} from 'lucide-react'

export default function LineOfCreditPage({ onOpenForm, onOpenStoreLocations, onGoHome }) {
  const locBenefits = [
    {
      icon: <RefreshCw className="w-6 h-6 text-[#0052cc]" />,
      title: 'Revolving access to funds',
      description:
        'Draw money up to your approved credit limit whenever you need it, and reuse your credit line as you pay it down.',
    },
    {
      icon: <Percent className="w-6 h-6 text-[#0052cc]" />,
      title: 'Only pay for what you draw',
      description:
        'Interest and fees only accrue on the amount you actually borrow, not your total approved credit limit.',
    },
    {
      icon: <Zap className="w-6 h-6 text-[#0052cc]" />,
      title: 'Fast online cash draws',
      description:
        'Request cash draws online anytime 24/7 with fast direct deposit to your checking account.',
    },
  ]

  const steps = [
    {
      number: '1',
      title: 'Apply online or in store',
      description: 'Fill out our quick application to get evaluated for a Line of Credit.',
    },
    {
      number: '2',
      title: 'Get approved for a credit limit',
      description: 'Receive your credit limit decision fast with transparent terms.',
    },
    {
      number: '3',
      title: 'Draw cash whenever needed',
      description: 'Transfer cash to your bank account anytime you need extra funds.',
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
          <span className="text-[#0b2a4a] font-bold">Line of Credit</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-[#082947] text-white relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 sm:space-y-8">
            
            <p className="text-[#FFD100] font-bold text-lg sm:text-xl tracking-wide uppercase">
              Flexible Revolving Credit
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05]">
              Line of Credit
            </h1>

            <p className="text-slate-200 text-xl sm:text-2xl font-medium leading-relaxed">
              Open revolving cash access to draw funds whenever you need them.
            </p>

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

      {/* Explanatory Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2a4a] tracking-tight mb-8">
            How a Line of Credit works
          </h2>

          <p className="text-[#0b2a4a]/85 text-base sm:text-lg leading-relaxed font-normal max-w-3xl mx-auto mb-6">
            A <strong className="font-bold text-[#0b2a4a]">Line of Credit</strong> gives you open access to funds up to your approved credit limit. Instead of taking a lump sum, you draw cash as needed and only pay interest on what you use.
          </p>
        </div>
      </section>

      {/* Benefits Section (Text Only) */}
      <section className="bg-[#f4f9fc] py-16 sm:py-24 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2a4a] text-center tracking-tight mb-14">
            Benefits of a personal Line of Credit
          </h2>

          <div className="space-y-8 max-w-3xl mx-auto">
            {locBenefits.map((item, idx) => (
              <div key={idx} className="flex items-start gap-5 p-6 rounded-2xl bg-white shadow-xs border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#eaf5fa] flex items-center justify-center shrink-0 mt-0.5">
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

      {/* Steps Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2a4a] tracking-tight mb-16">
            Get a Line of Credit in 3 easy steps
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

      {/* Advantage Section */}
      <AdvanceAmericaAdvantageSection
        onOpenForm={onOpenForm}
        onOpenStoreLocations={onOpenStoreLocations}
      />

    </div>
  )
}
