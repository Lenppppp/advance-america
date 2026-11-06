import React from 'react'
import { Wallet, Zap, CalendarCheck } from 'lucide-react'

export default function BudgetingToolsPage({ onOpenForm, onGoHome }) {
  const budgetingFeatures = [
    {
      icon: <Wallet className="w-6 h-6 text-[#0b2a4a]" />,
      title: 'Track every dollar',
      description:
        'Knowing where your money goes is the first step to taking control of it.',
    },
    {
      icon: <Zap className="w-6 h-6 text-[#0b2a4a]" />,
      title: 'Automate savings',
      description:
        'Set up automatic transfers so saving happens before you have a chance to spend.',
    },
    {
      icon: <CalendarCheck className="w-6 h-6 text-[#0b2a4a]" />,
      title: 'Review monthly',
      description:
        'Spend 15 minutes at month-end reviewing your budget and adjusting for next month.',
    },
  ]

  const articles = [
    {
      tag: 'Budgeting',
      title: 'How to Create a Monthly Budget That Actually Works',
      description:
        'Learn how to track your income and expenses, set realistic savings goals, and stick to a budget that fits your lifestyle.',
      date: 'March 5, 2026',
      readTime: '5 min read',
      image:
        'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80',
    },
    {
      tag: 'Saving',
      title: 'The 50/30/20 Rule: A Simple Budgeting Framework',
      description:
        "Allocate 50% of your income to needs, 30% to wants, and 20% to savings. Here's how to make this classic rule work for you.",
      date: 'February 28, 2026',
      readTime: '4 min read',
      image:
        'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&auto=format&fit=crop&q=80',
    },
    {
      tag: 'Tools',
      title: 'Best Free Budgeting Apps to Track Your Spending',
      description:
        'From Mint to YNAB, discover the top free tools that make tracking every dollar easier than ever before.',
      date: 'February 20, 2026',
      readTime: '6 min read',
      image:
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80',
    },
    {
      tag: 'Saving',
      title: '10 Ways to Cut Monthly Expenses Without Feeling Deprived',
      description:
        'Small tweaks to your daily habits can save hundreds each month. Here are the most effective (and painless) cuts you can make today.',
      date: 'February 10, 2026',
      readTime: '7 min read',
      image:
        'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&auto=format&fit=crop&q=80',
    },
    {
      tag: 'Budgeting',
      title: 'How to Build an Emergency Fund on a Tight Budget',
      description:
        "Even saving $10 a week adds up. Here's a step-by-step guide to building your financial safety net when money is tight.",
      date: 'January 30, 2026',
      readTime: '5 min read',
      image:
        'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=600&auto=format&fit=crop&q=80',
    },
    {
      tag: 'Tools',
      title: 'Zero-Based Budgeting: Give Every Dollar a Job',
      description:
        'Zero-based budgeting assigns a purpose to every dollar you earn. Learn how this powerful method can transform your finances.',
      date: 'January 15, 2026',
      readTime: '5 min read',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
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
          <span className="text-[#0b2a4a] font-bold">Budgeting Tools</span>
        </div>
      </div>

      {/* 1st Section / Clean Dark Navy Hero Section */}
      <section className="bg-[#082947] text-white py-16 sm:py-20 lg:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          {/* Sub-headline */}
          <p className="text-[#FFD100] font-bold text-sm sm:text-base tracking-widest uppercase">
            MONEY TIPS
          </p>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05]">
            Budgeting Tools
          </h1>

          {/* Subtitle */}
          <p className="text-slate-200 text-lg sm:text-xl lg:text-2xl font-normal leading-relaxed max-w-3xl mx-auto pt-2">
            Practical tools, guides, and strategies to help you build a budget that fits your life - and actually stick to it.
          </p>

        </div>
      </section>

      {/* 2nd Section / 3 Feature Cards */}
      <section className="bg-[#f4f9fc] py-16 sm:py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {budgetingFeatures.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 sm:p-8 shadow-xs border border-gray-100 flex items-start gap-4 text-left"
              >
                {/* Soft Icon Badge */}
                <div className="w-12 h-12 rounded-full bg-[#eaf5fa] flex items-center justify-center shrink-0 mt-0.5">
                  {card.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0b2a4a] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[#0b2a4a]/75 text-sm sm:text-base leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3rd Section / Latest Articles Grid */}
      <section className="bg-white py-16 sm:py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2a4a] tracking-tight mb-12">
            Latest Articles
          </h2>

          {/* 6 Article Cards Grid (3 cols x 2 rows) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((item, idx) => (
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

      {/* 4th Section / Yellow CTA Banner */}
      <section className="bg-[#FFD100] py-14 sm:py-16 text-[#002B49]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          
          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Need cash while you build your budget?
          </h2>

          {/* Subtitle */}
          <p className="text-[#002B49]/90 text-base sm:text-lg font-medium">
            Advance America is here when unexpected expenses come up.
          </p>

          {/* Start Verification Button */}
          <div className="pt-2 flex justify-center">
            <button
              onClick={onOpenForm}
              className="bg-[#082947] hover:bg-[#061e35] text-white font-bold text-base sm:text-lg px-10 py-3.5 rounded-full shadow-lg transition-all duration-200 cursor-pointer active:scale-95"
            >
              Start Verification
            </button>
          </div>

        </div>
      </section>

    </div>
  )
}
