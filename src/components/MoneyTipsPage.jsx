import React from 'react'
import AdvanceAmericaAdvantageSection from './AdvanceAmericaAdvantageSection'
import { Wallet, GraduationCap, TrendingUp, CheckCircle2 } from 'lucide-react'

export default function MoneyTipsPage({ onOpenForm, onGoHome }) {
  const tipsCategories = [
    {
      icon: <Wallet className="w-8 h-8 text-[#0052cc]" />,
      title: 'Budgeting Tools',
      description:
        'Discover interactive budgeting worksheets, spending trackers, and monthly expense calculators to keep your finances on track.',
      bullets: [
        '50/30/20 Rule Calculator',
        'Monthly Expense Tracker',
        'Emergency Savings Planner',
      ],
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-[#0052cc]" />,
      title: 'Financial Literacy',
      description:
        'Master financial basics including credit scores, interest rate calculations, and smart borrowing strategies.',
      bullets: [
        'Understanding Your Credit Score',
        'APR vs Interest Rate Explained',
        'Building Good Credit Habits',
      ],
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#0052cc]" />,
      title: 'Debt Management',
      description:
        'Explore proven techniques for paying off existing debt, consolidating loans, and achieving long-term financial freedom.',
      bullets: [
        'Debt Snowball vs Avalanche Method',
        'How Loan Consolidation Works',
        'Managing Unexpected Expenses',
      ],
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
          <span className="text-[#0b2a4a] font-bold">Money Tips</span>
        </div>
      </div>

      {/* 1st Section / Hero Section */}
      <section className="bg-[#082947] text-white relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 sm:space-y-8">
            
            <p className="text-[#FFD100] font-bold text-lg sm:text-xl tracking-wide uppercase">
              Financial Wellness &amp; Advice
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05]">
              Money Tips
            </h1>

            <p className="text-slate-200 text-xl sm:text-2xl font-medium leading-relaxed">
              Budgeting tools, financial literacy guides, and debt management strategies to help you achieve your goals.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenForm}
                className="bg-[#FFD100] hover:bg-[#f2c400] text-[#002B49] font-bold text-base sm:text-lg px-9 py-4 rounded-full shadow-lg transition-all duration-200 cursor-pointer active:scale-95"
              >
                Start Verification
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2nd Section / Money Tips Categories Grid */}
      <section className="bg-[#f4f9fc] py-16 sm:py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2a4a] text-center tracking-tight mb-14">
            Smart Financial Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tipsCategories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 shadow-xs border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#eaf5fa] flex items-center justify-center mb-6">
                    {cat.icon}
                  </div>

                  <h3 className="text-xl font-bold text-[#0b2a4a] mb-3">
                    {cat.title}
                  </h3>

                  <p className="text-[#0b2a4a]/75 text-sm sm:text-base leading-relaxed font-normal mb-6">
                    {cat.description}
                  </p>

                  <ul className="space-y-2.5 pt-2 border-t border-gray-100">
                    {cat.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#0b2a4a]">
                        <CheckCircle2 className="w-4 h-4 text-[#0052cc] shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3rd Section / Advantage Section */}
      <AdvanceAmericaAdvantageSection onOpenForm={onOpenForm} />

    </div>
  )
}
