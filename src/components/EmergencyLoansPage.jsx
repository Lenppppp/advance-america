import React from 'react'
import AdvanceAmericaAdvantageSection from './AdvanceAmericaAdvantageSection'
import {
  AlertTriangle,
  Clock,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  HeartPulse,
  Wrench,
  Zap,
} from 'lucide-react'

export default function EmergencyLoansPage({ onOpenForm, onOpenStoreLocations, onGoHome }) {
  const emergencyFeatures = [
    {
      icon: <Zap className="w-6 h-6 text-[#0052cc]" />,
      title: 'Same-day funding available*',
      description: 'Get money deposited directly into your bank account quickly when unexpected emergencies arise.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#0052cc]" />,
      title: 'All credit scores considered',
      description: 'We evaluate your overall financial capability, not just your credit score.',
    },
    {
      icon: <Clock className="w-6 h-6 text-[#0052cc]" />,
      title: 'Fast online application',
      description: 'Complete our simple application form in just a few minutes from any device.',
    },
  ]

  const emergencyCases = [
    {
      icon: <HeartPulse className="w-6 h-6 text-[#0052cc]" />,
      title: 'Urgent medical bills',
      description: 'Cover copays, emergency room visits, or unexpected dental work.',
    },
    {
      icon: <Wrench className="w-6 h-6 text-[#0052cc]" />,
      title: 'Vehicle repairs',
      description: 'Fix your car fast so you can commute to work without interruption.',
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-[#0052cc]" />,
      title: 'Home & utility repairs',
      description: 'Handle broken HVAC units, plumbing leaks, or past-due utility notices.',
    },
  ]

  const steps = [
    {
      number: '1',
      title: 'Apply online or in store',
      description: 'Fill out our quick form with your basic details.',
    },
    {
      number: '2',
      title: 'Instant decision',
      description: 'Get an instant approval decision without waiting.',
    },
    {
      number: '3',
      title: 'Fast funding',
      description: 'Receive your cash fast, often the same day you apply.',
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
          <span className="text-[#0b2a4a] font-bold">Emergency Loans</span>
        </div>
      </div>

      {/* 1st Section / Hero Section */}
      <section className="bg-[#082947] text-white relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 sm:space-y-8">
            
            <p className="text-[#FFD100] font-bold text-lg sm:text-xl tracking-wide uppercase">
              Immediate Relief
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05]">
              Emergency Loans
            </h1>

            <p className="text-slate-200 text-xl sm:text-2xl font-medium leading-relaxed">
              Fast cash to handle unexpected emergencies with confidence.
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

      {/* Trustbar Section */}
      <section className="bg-[#eaf5fa] py-3.5 border-y border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#0b2a4a]">
            <strong className="font-bold">124,938 reviews</strong> on
            <span className="font-bold text-[#00b67a]">Trustpilot</span>
          </div>
        </div>
      </section>

      {/* Explanatory Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2a4a] tracking-tight mb-8">
            What is an Emergency Loan?
          </h2>

          <p className="text-[#0b2a4a]/85 text-base sm:text-lg leading-relaxed font-normal max-w-3xl mx-auto mb-6">
            An <strong className="font-bold text-[#0b2a4a]">Emergency Loan</strong> is a fast, short-term financial solution designed to help you cover urgent, unexpected expenses when savings aren&apos;t enough.
          </p>

          <p className="text-[#0b2a4a]/85 text-base sm:text-lg leading-relaxed font-normal max-w-3xl mx-auto">
            Whether you need a Payday Loan, Installment Loan, or Title Loan, Advance America provides immediate access to funds to get you back on track quickly.
          </p>
        </div>
      </section>

      {/* Emergency Cases Section */}
      <section className="bg-[#f4f9fc] py-16 sm:py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2a4a] tracking-tight mb-14">
            Common reasons for an Emergency Loan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {emergencyCases.map((item, idx) => (
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
        </div>
      </section>

      {/* Steps Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2a4a] tracking-tight mb-16">
            Get emergency cash in 3 easy steps
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
