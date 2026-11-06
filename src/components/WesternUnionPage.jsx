import React, { useState } from 'react'
import {
  MapPin,
  FileText,
  CheckCircle2,
  Globe,
  Clock,
  ShieldCheck,
  Smartphone,
  Banknote,
} from 'lucide-react'

export default function WesternUnionPage({ onOpenForm, onOpenStoreLocations, onGoHome }) {
  const [activeCountry, setActiveCountry] = useState(3) // Honduras default active

  const stats = [
    {
      value: '200+',
      label: 'Countries & territories',
    },
    {
      value: '500K+',
      label: 'Agent locations worldwide',
    },
    {
      value: '170+',
      label: 'Years in business',
    },
    {
      value: 'Minutes',
      label: 'Typical transfer time',
    },
  ]

  const steps = [
    {
      number: '1',
      icon: <MapPin className="w-5 h-5 text-[#0b2a4a]" />,
      title: 'Find a store',
      description:
        'Visit any Advance America location that offers Western Union services. Use our store locator to find one near you.',
    },
    {
      number: '2',
      icon: <FileText className="w-5 h-5 text-[#0b2a4a]" />,
      title: 'Fill out a form',
      description:
        "Complete a simple send form with the recipient's name, destination country, and the amount you want to send.",
    },
    {
      number: '3',
      icon: <CheckCircle2 className="w-5 h-5 text-[#0b2a4a]" />,
      title: 'Pay and get your MTCN',
      description:
        "Pay the transfer amount plus any applicable fees. You'll receive a Money Transfer Control Number (MTCN) to share with your recipient.",
    },
    {
      number: '4',
      icon: <Globe className="w-5 h-5 text-[#0b2a4a]" />,
      title: 'Recipient picks up cash',
      description:
        'Your recipient can pick up the funds in cash at any Western Union agent location worldwide, usually within minutes.',
    },
  ]

  const whyChooseUs = [
    {
      icon: <Globe className="w-6 h-6 text-[#0b2a4a]" />,
      title: 'Global reach',
      description:
        'Send money to over 200 countries and territories through 500,000+ agent locations around the world.',
    },
    {
      icon: <Clock className="w-6 h-6 text-[#0b2a4a]" />,
      title: 'Fast transfers',
      description:
        'In most cases, cash is available for pickup within minutes of sending your transfer.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#0b2a4a]" />,
      title: 'Trusted brand',
      description:
        'Western Union has been moving money safely for over 170 years with trusted global security.',
    },
    {
      icon: <Banknote className="w-6 h-6 text-[#0b2a4a]" />,
      title: 'Competitive rates',
      description:
        'Transparent transfer fees and competitive exchange rates with no hidden surprises.',
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#0b2a4a]" />,
      title: 'Convenient locations',
      description:
        'Visit your local Advance America store to send or receive money in person with friendly assistance.',
    },
    {
      icon: <Smartphone className="w-6 h-6 text-[#0b2a4a]" />,
      title: 'Easy tracking',
      description:
        'Track your transfer online or via the Western Union app using your unique MTCN tracking number.',
    },
  ]

  const countries = [
    { flag: '🇲🇽', name: 'Mexico' },
    { flag: '🇬🇹', name: 'Guatemala' },
    { flag: '🇸🇻', name: 'El Salvador' },
    { flag: '🇭🇳', name: 'Honduras' },
    { flag: '🇩🇴', name: 'Dominican Republic' },
    { flag: '🇨🇴', name: 'Colombia' },
    { flag: '🇵🇭', name: 'Philippines' },
    { flag: '🇮🇳', name: 'India' },
    { flag: '🇳🇬', name: 'Nigeria' },
    { flag: '🇯🇲', name: 'Jamaica' },
    { flag: '🇻🇳', name: 'Vietnam' },
    { flag: '🌎', name: '+ 200 more' },
  ]

  const requiredDocuments = [
    {
      title: 'Valid government-issued photo ID',
      desc: '(driver&apos;s license, state ID, passport, or matricula consular)',
    },
    {
      title: 'Sender information',
      desc: '(full legal name, physical address, and phone number)',
    },
    {
      title: 'Recipient information',
      desc: '(full name matching their official ID and destination country)',
    },
    {
      title: 'Payment',
      desc: '(cash or debit card for transfer amount and applicable fees)',
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
          <span className="text-[#0b2a4a] font-bold">Western Union</span>
        </div>
      </div>

      {/* 1st Section / Full Width Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white min-h-[480px] lg:min-h-[540px] flex items-center">
        {/* Background Lifestyle Image */}
        <img
          src="https://images.unsplash.com/photo-1556742049-0a670f4a4591?w=1600&auto=format&fit=crop&q=80"
          alt="Happy woman sending money via Western Union"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2a4a]/90 via-[#0b2a4a]/75 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <div className="max-w-xl">
            
            {/* Floating White Rectangular Card */}
            <div className="bg-white rounded-lg p-8 sm:p-10 shadow-2xl text-[#0b2a4a] border border-gray-100 space-y-6">
              
              {/* Western Union Yellow & Black Badge Logo */}
              <div className="flex items-center gap-3">
                <div className="bg-black text-[#FFD100] px-3.5 py-1.5 rounded-xs font-black text-xl tracking-tight flex items-center gap-1.5">
                  <span className="bg-[#FFD100] text-black w-5 h-5 rounded-full flex items-center justify-center text-xs font-black">
                    WU
                  </span>
                  <span>WESTERN UNION</span>
                </div>
              </div>

              {/* Card Main Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b2a4a] leading-tight tracking-tight">
                Send Money 24/7 around the world
              </h1>

              {/* Card Subtitle */}
              <p className="text-[#0b2a4a]/80 text-base sm:text-lg font-normal leading-relaxed">
                Fast, convenient money transfers at Advance America stores nationwide.
              </p>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenStoreLocations}
                  className="bg-[#0b2a4a] hover:bg-[#06192d] text-white font-bold text-base sm:text-lg px-8 py-3.5 rounded-full shadow-lg transition-all duration-200 cursor-pointer active:scale-95 flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <MapPin className="w-5 h-5 text-[#FFD100]" />
                  <span>Find a Store</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2nd Section / 4-Stat Bar in Dark Navy Container */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#082947] rounded-3xl p-8 sm:p-12 text-white shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`text-center space-y-2 ${idx > 0 ? 'pt-6 sm:pt-0 sm:pl-4' : ''}`}
                >
                  <p className="text-4xl sm:text-5xl font-black text-[#FFD100] tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-sm sm:text-base font-medium text-slate-200 max-w-xs mx-auto">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3rd Section / How it works 4-Step Process */}
      <section className="bg-[#f4f9fc] py-16 sm:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2a4a] tracking-tight mb-4">
            How it works
          </h2>

          {/* Subtitle */}
          <p className="text-[#0b2a4a]/80 text-base sm:text-lg max-w-2xl mx-auto mb-16 font-normal">
            Send money to family and friends worldwide in 4 simple steps
          </p>

          {/* 4 Step Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative max-w-6xl mx-auto">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 shadow-xs border border-gray-100 flex flex-col items-center text-center relative z-10 transition-transform hover:scale-105"
              >
                {/* Yellow Circle Number */}
                <div className="w-12 h-12 rounded-full bg-[#FFD100] text-[#002B49] font-black text-xl flex items-center justify-center mb-6 shadow-sm">
                  {step.number}
                </div>

                {/* Icon Badge */}
                <div className="w-10 h-10 rounded-full bg-[#eaf5fa] flex items-center justify-center mb-4">
                  {step.icon}
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-[#0b2a4a] mb-3">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-[#0b2a4a]/75 text-sm leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4th Section / Why send with us? 6 Cards Grid */}
      <section className="bg-white py-16 sm:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2a4a] tracking-tight mb-16">
            Why send with us?
          </h2>

          {/* 6 Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#f4f9fc] rounded-3xl p-8 border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow"
              >
                {/* Icon Badge */}
                <div className="w-14 h-14 rounded-full bg-[#FFD100] flex items-center justify-center mb-6 shadow-xs">
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

      {/* 5th Section / Popular destinations 12 Country Cards Grid */}
      <section className="bg-[#f4f9fc] py-16 sm:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2a4a] tracking-tight mb-4">
            Popular destinations
          </h2>

          <p className="text-[#0b2a4a]/80 text-base sm:text-lg max-w-2xl mx-auto mb-14 font-normal">
            Send money to hundreds of thousands of agent locations in popular countries worldwide
          </p>

          {/* 12 Country Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {countries.map((c, idx) => {
              const isActive = idx === activeCountry
              return (
                <button
                  key={idx}
                  onClick={() => setActiveCountry(idx)}
                  className={`rounded-2xl p-5 border flex flex-col items-center justify-center gap-3 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#FFD100] border-[#FFD100] shadow-md scale-105'
                      : 'bg-white border-gray-200/80 hover:border-[#FFD100] hover:shadow-xs'
                  }`}
                >
                  <span className="text-3xl sm:text-4xl">{c.flag}</span>
                  <span className="font-bold text-[#0b2a4a] text-sm sm:text-base text-center">
                    {c.name}
                  </span>
                </button>
              )
            })}
          </div>

        </div>
      </section>

      {/* 6th Section / What to bring to the store Split Section */}
      <section className="bg-white py-16 sm:py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Requirements Checklist */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2a4a] tracking-tight">
                What to bring to the store
              </h2>

              <p className="text-[#0b2a4a]/80 text-base sm:text-lg font-normal">
                To ensure a fast and smooth money transfer experience, please bring the following items with you when visiting an Advance America store:
              </p>

              <div className="space-y-4 pt-2">
                {requiredDocuments.map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#FFD100] flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-[#002B49]" />
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#0b2a4a]">
                        {doc.title}
                      </h3>
                      <p className="text-[#0b2a4a]/75 text-sm font-normal">
                        {doc.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Important Reminders Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#082947] text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFD100] flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-[#002B49]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Important reminders
                  </h3>
                </div>

                <ul className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFD100] font-bold">•</span>
                    <span>Never send money to someone you don&apos;t know personally.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFD100] font-bold">•</span>
                    <span>Keep your MTCN tracking number confidential and only share it with your intended recipient.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFD100] font-bold">•</span>
                    <span>Western Union will never ask for your MTCN over the phone or email.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7th Section / Ready to send money? Yellow CTA Section */}
      <section className="bg-[#FFD100] text-[#002B49] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Ready to send money?
          </h2>

          <p className="text-[#002B49]/90 text-lg sm:text-xl font-medium max-w-xl mx-auto">
            Find an Advance America store near you to get started today.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenStoreLocations}
              className="bg-[#0b2a4a] hover:bg-[#06192d] text-white font-bold text-base sm:text-lg px-9 py-4 rounded-full shadow-lg transition-all duration-200 cursor-pointer active:scale-95 flex items-center gap-2"
            >
              <MapPin className="w-5 h-5 text-[#FFD100]" />
              <span>Find a store</span>
            </button>

            <button
              onClick={onOpenForm}
              className="bg-transparent border-2 border-[#002B49] text-[#002B49] hover:bg-[#002B49]/10 font-bold text-base sm:text-lg px-8 py-3.5 rounded-full transition-all duration-200 cursor-pointer active:scale-95"
            >
              Apply for a loan
            </button>
          </div>

        </div>
      </section>

    </div>
  )
}
