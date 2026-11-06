import React, { useState } from 'react'
import appPhoneImg from '../assets/app-phone-illustration-clean.png'
import {
  CreditCard,
  Banknote,
  Repeat,
  Calendar,
  Clock,
  ShieldCheck,
} from 'lucide-react'

export default function FinancialLiteracyPage({ onOpenForm, onGoHome }) {
  const [activeTab, setActiveTab] = useState(0)

  const topics = [
    {
      icon: <CreditCard className="w-6 h-6 text-[#0b2a4a]" />,
      label: 'Credit Scores',
    },
    {
      icon: <Banknote className="w-6 h-6 text-[#0b2a4a]" />,
      label: 'Banking Basics',
    },
    {
      icon: <Repeat className="w-6 h-6 text-[#0b2a4a]" />,
      label: 'Saving & Investing',
    },
    {
      icon: <Calendar className="w-6 h-6 text-[#0b2a4a]" />,
      label: 'Tax Planning',
    },
    {
      icon: <Clock className="w-6 h-6 text-[#0b2a4a]" />,
      label: 'Retirement',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#0b2a4a]" />,
      label: 'Insurance',
    },
  ]

  const articles = [
    {
      tag: 'Credit',
      title: 'Understanding Your Credit Score: A Complete Guide',
      description:
        'Your credit score affects loan rates, apartment applications, and more. Learn exactly what makes up your score and how to improve it.',
      date: 'March 8, 2026',
      readTime: '8 min read',
      image:
        'https://images.unsplash.com/photo-1556742049-0a67daf64f40?w=600&auto=format&fit=crop&q=80',
    },
    {
      tag: 'Saving',
      title: 'The Difference Between Saving and Investing',
      description:
        "Both are essential for financial health — but they serve very different purposes. Here's when to do each and why it matters.",
      date: 'February 25, 2026',
      readTime: '5 min read',
      image:
        'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=80',
    },
    {
      tag: 'Banking',
      title: "Checking vs. Savings Account: What's the Difference?",
      description:
        'Understand the key differences between these two account types and how to use them together to maximize your money.',
      date: 'February 18, 2026',
      readTime: '4 min read',
      image:
        'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&auto=format&fit=crop&q=80',
    },
    {
      tag: 'Credit',
      title: 'What Is APR and Why Does It Matter for Loans?',
      description:
        'Annual Percentage Rate affects how much you truly pay for a loan. Learn how to compare APRs and find the best deal.',
      date: 'February 5, 2026',
      readTime: '6 min read',
      image:
        'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=600&auto=format&fit=crop&q=80',
    },
    {
      tag: 'Taxes',
      title: 'Tax Basics Everyone Should Know',
      description:
        'From W-2s to deductions, here are the tax fundamentals that will save you money and stress every year.',
      date: 'January 22, 2026',
      readTime: '7 min read',
      image:
        'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80',
    },
    {
      tag: 'Planning',
      title: 'How to Start Planning for Retirement in Your 30s',
      description:
        "It's never too early — or too late — to start. Here's a beginner-friendly retirement planning guide for every income level.",
      date: 'January 10, 2026',
      readTime: '6 min read',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80',
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
          <span className="text-[#0b2a4a] font-bold">Financial Literacy</span>
        </div>
      </div>

      {/* 1st Section / Bright Yellow Hero Section */}
      <section className="bg-[#FFD100] text-[#002B49] py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <p className="font-bold text-sm sm:text-base tracking-widest uppercase text-[#0b2a4a]">
                MONEY TIPS
              </p>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#0b2a4a] tracking-tight leading-[1.05]">
                Financial <br />
                Literacy
              </h1>

              <p className="text-[#0b2a4a]/90 text-lg sm:text-xl leading-relaxed font-medium max-w-xl">
                Build the financial knowledge you need to make smarter decisions with your money &mdash; no finance degree required.
              </p>
            </div>

            {/* Right Topic Cards Grid (3 cols x 2 rows) */}
            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
              {topics.map((t, idx) => {
                const isActive = activeTab === idx
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-white shadow-xl scale-105 border-2 border-white'
                        : 'bg-[#ffe359] hover:bg-[#ffde3d] border border-black/5'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#eaf5fa]/80 flex items-center justify-center mb-3">
                      {t.icon}
                    </div>
                    <span className="font-bold text-sm sm:text-base text-[#0b2a4a] leading-tight">
                      {t.label}
                    </span>
                  </button>
                )
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 2nd Section / Latest Articles Grid */}
      <section className="bg-white py-16 sm:py-24">
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

      {/* 3rd Section / Did You Know? Dark Navy Card Banner */}
      <section className="bg-[#f4f9fc] py-16 sm:py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#082947] text-white rounded-[32px] p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column Text */}
              <div className="lg:col-span-8 space-y-4 sm:space-y-6">
                <p className="text-[#FFD100] font-bold text-xs sm:text-sm tracking-widest uppercase">
                  DID YOU KNOW?
                </p>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                  Only 57% of Americans are financially literate.
                </h2>

                <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
                  Understanding the basics of credit, saving, and budgeting can save you thousands of dollars over your lifetime. Start learning today.
                </p>
              </div>

              {/* Right Column App Illustration */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <img
                  src={appPhoneImg}
                  alt="Financial Literacy Smartphone App Approval"
                  className="h-56 sm:h-64 lg:h-72 w-auto object-contain"
                />
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
