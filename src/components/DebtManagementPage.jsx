import React from 'react'

export default function DebtManagementPage({
  onOpenForm,
  onOpenPersonalLoans,
  onGoHome,
}) {
  const pillBadges = [
    'Debt Snowball',
    'Debt Avalanche',
    'Consolidation',
    'Credit Cards',
    'Negotiation',
  ]

  const stats = [
    {
      value: '$17.5T',
      label: 'Total US household debt',
    },
    {
      value: '77%',
      label: 'Americans carry some debt',
    },
    {
      value: '$6,500',
      label: 'Average credit card balance',
    },
    {
      value: '2-5 yrs',
      label: 'Average payoff timeline',
    },
  ]

  const guides = [
    {
      tag: 'Strategy',
      title:
        'Debt Avalanche vs. Debt Snowball: Which Method is Right for You?',
      description:
        'Two proven strategies for paying off debt – one saves more money, the other gives faster psychological wins. Learn which fits your personality.',
      date: 'March 7, 2026',
      readTime: '6 min read',
      image:
        'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80',
    },
    {
      tag: 'Credit Cards',
      title: 'How to Pay Off Credit Card Debt Faster',
      description:
        'From balance transfers to extra payments, these proven strategies will help you eliminate credit card debt without sacrificing your lifestyle.',
      date: 'February 26, 2026',
      readTime: '7 min read',
      image:
        'https://images.unsplash.com/photo-1556742049-0a67daf64f40?w=600&auto=format&fit=crop&q=80',
    },
    {
      tag: 'Loans',
      title: 'Should You Use a Personal Loan to Consolidate Debt?',
      description:
        "Debt consolidation can simplify payments and reduce your interest rate. Here's how to decide if it's the right move for you.",
      date: 'February 12, 2026',
      readTime: '5 min read',
      image:
        'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=600&auto=format&fit=crop&q=80',
    },
    {
      tag: 'Budgeting',
      title: 'Living Debt-Free: A Realistic Roadmap',
      description:
        'Becoming debt-free is possible at any income level. This step-by-step plan will show you how to get there without extreme sacrifice.',
      date: 'January 28, 2026',
      readTime: '8 min read',
      image:
        'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&auto=format&fit=crop&q=80',
    },
    {
      tag: 'Credit',
      title: 'How Debt Affects Your Credit Score',
      description:
        'Your debt levels make up 30% of your credit score. Learn how to manage your balances strategically to improve your credit.',
      date: 'January 14, 2026',
      readTime: '5 min read',
      image:
        'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=80',
    },
    {
      tag: 'Negotiation',
      title: 'How to Negotiate With Creditors to Reduce Your Debt',
      description:
        "Creditors are often willing to work with you. Here's a script and strategy for negotiating lower rates, waived fees, or settlement amounts.",
      date: 'January 5, 2026',
      readTime: '6 min read',
      image:
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80',
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
          <span className="text-[#0b2a4a] font-bold">Debt Management</span>
        </div>
      </div>

      {/* 1st Section / Dark Navy Hero Section */}
      <section className="bg-[#082947] text-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 sm:space-y-8">
            
            {/* Sub-headline */}
            <p className="text-[#FFD100] font-bold text-sm sm:text-base tracking-widest uppercase">
              MONEY TIPS
            </p>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05]">
              Debt <br />
              Management
            </h1>

            {/* Subtitle Description */}
            <p className="text-slate-200 text-lg sm:text-xl lg:text-2xl font-normal leading-relaxed">
              Practical strategies to help you reduce, manage, and eliminate debt &mdash; so you can take back control of your financial future.
            </p>

            {/* 5 Dark Pill Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {pillBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className="bg-[#0e3b64] text-slate-100 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full border border-white/10"
                >
                  {badge}
                </span>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Yellow 4-Stat Bar */}
      <section className="bg-[#FFD100] text-[#002B49] py-8 sm:py-10 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002B49] tracking-tight">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-[#002B49]/85">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2nd Section / Guides & Strategies Grid */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2a4a] tracking-tight mb-12">
            Guides &amp; Strategies
          </h2>

          {/* 6 Article Cards Grid (3 cols x 2 rows) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guides.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Article Image Container */}
                  <div className="h-52 w-full overflow-hidden bg-gray-100 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Article Text Details */}
                  <div className="p-6 sm:p-7">
                    
                    {/* Category Tag Badge */}
                    <span className="inline-block bg-[#FFD100] text-[#002B49] text-xs font-bold px-3.5 py-1 rounded-full mb-4">
                      {item.tag}
                    </span>

                    {/* Article Title */}
                    <h3 className="text-xl font-bold text-[#0b2a4a] group-hover:text-[#0052cc] transition-colors leading-snug mb-3">
                      {item.title}
                    </h3>

                    {/* Description snippet */}
                    <p className="text-[#0b2a4a]/75 text-sm leading-relaxed font-normal mb-6">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Article Footer Info */}
                <div className="px-6 sm:px-7 pb-6 pt-0 flex items-center justify-between text-xs text-gray-400 border-t border-gray-50 mt-auto">
                  <span>{item.date}</span>
                  <span>{item.readTime}</span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3rd Section / Consolidate debt with a Personal Loan Dark Navy Banner */}
      <section className="bg-[#082947] text-white py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Consolidate debt with a Personal Loan
          </h2>

          {/* Subtitle */}
          <p className="text-slate-200 text-base sm:text-lg font-normal max-w-2xl mx-auto">
            A personal loan from Advance America can combine multiple debts into one manageable monthly payment.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <button
              onClick={onOpenPersonalLoans}
              className="bg-[#FFD100] hover:bg-[#f2c400] text-[#002B49] font-bold text-base sm:text-lg px-8 py-3.5 rounded-full shadow-md transition-all duration-200 cursor-pointer active:scale-95"
            >
              Learn about Personal Loans
            </button>

            <button
              onClick={onOpenForm}
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold text-base sm:text-lg px-8 py-3.5 rounded-full transition-all duration-200 cursor-pointer active:scale-95"
            >
              Start Verification
            </button>
          </div>

        </div>
      </section>

    </div>
  )
}
