import React from 'react'
import paydayManImg from '../assets/payday-man.webp'
import AdvanceAmericaAdvantageSection from './AdvanceAmericaAdvantageSection'
import {
  Home,
  ShoppingCart,
  Sun,
  Wrench,
  Pencil,
  ThumbsUp,
  Clock,
  CreditCard,
} from 'lucide-react'

export default function PaydayLoansPage({ onOpenForm, onOpenStoreLocations, onGoHome }) {
  const unexpectedUseCases = [
    {
      icon: <Home className="w-8 h-8 text-[#0b2a4a]" />,
      label: 'Rent or mortgage',
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-[#0b2a4a]" />,
      label: 'Groceries',
    },
    {
      icon: <Sun className="w-8 h-8 text-[#0b2a4a]" />,
      label: 'Past-due utilities',
    },
    {
      icon: <Wrench className="w-8 h-8 text-[#0b2a4a]" />,
      label: 'Unexpected repairs',
    },
    {
      icon: <Pencil className="w-8 h-8 text-[#0b2a4a]" />,
      label: 'Back-to-school costs',
    },
  ]

  const steps = [
    {
      number: '1',
      title: 'Start your application online',
      description: 'Apply from your phone or computer in just minutes, or visit any Advance America store.',
    },
    {
      number: '2',
      title: 'Get approved within minutes',
      description: 'Receive an instant decision. Advance America considers more than just your credit score.',
    },
    {
      number: '3',
      title: 'Receive money the same day*',
      description: 'Funds go directly to your bank account, often the same day you apply.',
    },
  ]

  const benefits = [
    {
      icon: <ThumbsUp className="w-6 h-6 text-[#0052cc]" />,
      title: 'Easy application',
      description:
        'Complete our simple application online or in-store in just a few minutes. We keep the process fast, straightforward, and hassle-free.',
    },
    {
      icon: <Clock className="w-6 h-6 text-[#0052cc]" />,
      title: 'Fast decision and funding',
      description:
        'Receive an instant approval decision and get money deposited into your bank account as soon as the same day.',
    },
    {
      icon: <CreditCard className="w-6 h-6 text-[#0052cc]" />,
      title: 'Good credit not needed',
      description:
        'Advance America approves borrowers with all types of credit. We consider factors beyond just your credit score, such as income and employment history.',
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
          <span className="text-[#0b2a4a] font-bold">Payday Loans</span>
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
                alt="Payday Loan applicant holding phone"
                className="w-auto h-auto max-h-[440px] sm:max-h-[500px] object-contain block"
              />
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-6 space-y-6 text-[#0b2a4a]">
              
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                Online Payday Loans
              </h2>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Payday Loans
              </h1>

              <p className="text-[#0b2a4a]/90 text-lg sm:text-xl font-medium leading-relaxed">
                Fast cash advance loans to cover expenses until your next paycheck.
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

      {/* Trustpilot Review Quote Banner */}
      <section className="bg-[#eaf5fa] py-3 border-y border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs sm:text-sm text-[#0b2a4a]">
            
            <div className="flex items-center gap-1 text-center sm:text-left">
              <span className="italic font-semibold">&quot;Quick, fast and easy&quot;</span>
              <span className="text-[#0b2a4a]/70 font-normal">- customer, 04/10/2021</span>
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

      {/* 3rd Section: Explanatory Content */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2a4a] tracking-tight">
            Fast, online Payday Loans when you need cash quickly
          </h2>

          <p className="text-[#0b2a4a]/80 text-base sm:text-lg leading-relaxed font-normal max-w-3xl mx-auto">
            When unexpected expenses pop up between paychecks, a <strong className="font-bold text-[#0b2a4a]">Payday Loan</strong> (also known as a cash advance) can provide the quick financial relief you need. Payday loans are small, short-term loans designed to cover urgent bills, car repairs, medical emergencies, or everyday household costs until your next payday.
          </p>

          <p className="text-[#0b2a4a]/80 text-base sm:text-lg leading-relaxed font-normal max-w-3xl mx-auto">
            At Advance America, our online application takes just a few minutes, with instant approval decisions and money deposited straight into your bank account as fast as the same day.
          </p>

        </div>
      </section>

      {/* 4th Section: Unexpected expenses happen */}
      <section className="bg-[#f4f9fc] py-16 sm:py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2a4a] tracking-tight mb-4">
            Unexpected expenses happen
          </h2>

          <p className="text-[#0b2a4a]/80 text-base sm:text-lg font-normal mb-12">
            A Payday Loan can help cover expenses like:
          </p>

          {/* 5 White Pill Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto mb-12">
            {unexpectedUseCases.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-xs border border-gray-100 flex flex-col items-center justify-center text-center gap-3 transition-transform hover:scale-105"
              >
                <div className="p-3 rounded-full bg-[#eaf5fa]">
                  {item.icon}
                </div>
                <span className="text-[#0b2a4a] font-bold text-sm sm:text-base">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              onClick={onOpenForm}
              className="bg-[#FFD100] hover:bg-[#f2c400] text-[#002B49] font-bold text-base sm:text-lg px-9 py-3.5 rounded-full shadow-md transition-all duration-200 cursor-pointer active:scale-95"
            >
              Start Verification
            </button>
          </div>

        </div>
      </section>

      {/* 5th Section: Getting a Payday Loan is as easy as 1-2-3 */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2a4a] tracking-tight mb-16">
            Getting a Payday Loan is as easy as 1-2-3
          </h2>

          {/* 1-2-3 Steps Grid */}
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

          <p className="text-gray-400 text-xs sm:text-sm font-normal max-w-3xl mx-auto mb-10">
            *Online approvals before 10:30 AM ET (M-F) are typically funded to your bank account by 5 PM ET same-day.
          </p>

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

      {/* 6th Section: Benefits of Payday Loans (Text Only) */}
      <section className="bg-[#f4f9fc] py-16 sm:py-24 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2a4a] text-center tracking-tight mb-14">
            Benefits of Payday Loans
          </h2>

          <div className="space-y-8 max-w-3xl mx-auto">
            {benefits.map((item, idx) => (
              <div key={idx} className="flex items-start gap-5 p-4 rounded-2xl bg-white shadow-xs border border-gray-100 hover:shadow-md transition-shadow">
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

      {/* Advantage Section */}
      <AdvanceAmericaAdvantageSection
        onOpenForm={onOpenForm}
        onOpenStoreLocations={onOpenStoreLocations}
      />

    </div>
  )
}
