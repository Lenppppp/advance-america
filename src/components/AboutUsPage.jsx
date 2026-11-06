import React, { useState } from 'react'
import hatImg from '../assets/making-it-work-hat.webp'
import volunteersImg from '../assets/community-impact-volunteers.webp'
import {
  Play,
  Handshake,
  ShieldCheck,
  Heart,
} from 'lucide-react'

export default function AboutUsPage({ onOpenForm, onOpenStoreLocations, onGoHome }) {
  const [activeVideo, setActiveVideo] = useState(null)

  const handleContactUsClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const stats = [
    {
      num: '157+',
      unit: 'million',
      label: 'loans issued',
    },
    {
      num: '800+',
      unit: 'stores',
      label: 'and online loans',
    },
    {
      num: '25+ years',
      unit: '',
      label: 'providing loans',
    },
  ]

  const realStories = [
    {
      name: "Karrynn's story",
      description: 'Building a business from the ground up.',
      quoteText: 'Pursuing my goals with confidence starts here.',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80',
    },
    {
      name: "Cece & Jose's story",
      description: 'Creating a shared life together.',
      quoteText: 'Navigating our budget roadmap starts here.',
      image:
        'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&auto=format&fit=crop&q=80',
    },
    {
      name: "Ereka's story",
      description: 'Taking a leap into independence.',
      quoteText: 'Taking a step on my own starts here.',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80',
    },
  ]

  const pillarBullets = [
    'We are mentors for momentum.',
    'We are allies for advancement.',
    'We are champions for change.',
    'We want to help you prepare for the best.',
  ]

  const values = [
    {
      icon: <Handshake className="w-8 h-8 text-[#0052cc]" />,
      title: 'Respect',
      description:
        "We don't take the role we play in our customers' lives lightly - we treat every person we meet and the community we serve with kindness and respect.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#0052cc]" />,
      title: 'Transparency',
      description:
        'We believe that our customers are more than a transaction - so we aim to provide transparency and understanding with each interaction.',
    },
    {
      icon: <Heart className="w-8 h-8 text-[#0052cc]" />,
      title: 'Financial Confidence',
      description:
        'We strive to instill financial confidence in each of our customers and work to identify new and powerful ways to turn their money into financial momentum.',
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
          <span className="text-[#0b2a4a] font-bold">About Us</span>
        </div>
      </div>

      {/* 1st Section / Full Width Teal Gradient Hero */}
      <section className="bg-gradient-to-r from-[#0088a8] via-[#007b99] to-[#005b73] text-white py-16 sm:py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Column: Yellow & White Trucker Hat */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative">
                {/* Soft shadow circle under hat */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-black/30 blur-md rounded-full" />
                <img
                  src={hatImg}
                  alt="Official Sponsor of Making It Work Hat"
                  className="w-72 sm:w-80 lg:w-96 h-auto object-contain relative z-10 drop-shadow-xl"
                />
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
              <p className="text-white/95 font-medium text-xl sm:text-2xl lg:text-3xl tracking-tight">
                You wear a lot of hats.
              </p>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
                We&apos;re here to support you in every role.
              </h1>
            </div>

          </div>
        </div>
      </section>

      {/* 2nd Section / The Advance America Advantage (White Theme) */}
      <section className="bg-white py-16 sm:py-24 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2a4a] tracking-tight mb-6">
            The Advance America advantage
          </h2>

          {/* Description Paragraph */}
          <p className="text-[#0b2a4a]/80 text-base sm:text-lg leading-relaxed font-normal max-w-3xl mx-auto mb-12">
            Since 1997, Advance America has helped millions of hardworking people with a variety of financial solutions including{' '}
            <strong className="font-bold text-[#0b2a4a]">Payday Loans</strong>,{' '}
            <strong className="font-bold text-[#0b2a4a]">Installment Loans</strong>,{' '}
            <strong className="font-bold text-[#0b2a4a]">Title Loans</strong> and{' '}
            <strong className="font-bold text-[#0b2a4a]">Personal Lines of Credit</strong>.
          </p>

          {/* 3 Stat Columns with Vertical Dividers */}
          <div className="py-8 border-y border-gray-100 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1 py-2 md:py-0 px-4 flex flex-col justify-end items-center">
                  <div className="text-4xl sm:text-5xl font-black text-[#0b2a4a] tracking-tight leading-none">
                    <p>{stat.num}</p>
                    {stat.unit && <p className="mt-0.5">{stat.unit}</p>}
                  </div>
                  <p className="text-xs sm:text-sm font-normal text-[#0b2a4a]/75 pt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenForm}
              className="bg-[#FFD100] hover:bg-[#f2c400] text-[#002B49] font-bold text-base sm:text-lg px-9 py-3.5 rounded-full shadow-md transition-all duration-200 cursor-pointer active:scale-95"
            >
              Start Verification
            </button>

            <button
              onClick={onOpenStoreLocations}
              className="bg-transparent border border-[#0b2a4a] text-[#0b2a4a] hover:bg-[#0b2a4a] hover:text-white font-bold text-base sm:text-lg px-8 py-3 rounded-full transition-all duration-200 cursor-pointer active:scale-95"
            >
              Find a Store
            </button>
          </div>

        </div>
      </section>

      {/* 3rd Section / Real people, real stories */}
      <section className="bg-[#f4f9fc] py-16 sm:py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2a4a] tracking-tight mb-3">
            Real people, real stories
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-14 font-normal">
            See how Advance America is making a difference in people&apos;s lives, one story at a time.
          </p>

          {/* 3 Video Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {realStories.map((story, idx) => (
              <div key={idx} className="flex flex-col text-left group">
                
                {/* Video Card Image Container */}
                <div
                  onClick={() => setActiveVideo(idx)}
                  className="relative rounded-3xl overflow-hidden h-64 w-full bg-slate-800 shadow-md cursor-pointer group-hover:shadow-xl transition-all duration-300 mb-4"
                >
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Yellow Framing Accent */}
                  <div className="absolute inset-4 border-2 border-[#FFD100] rounded-2xl pointer-events-none opacity-90" />

                  {/* Overlay Quote Text */}
                  <div className="absolute top-6 right-6 left-1/3 text-right z-10">
                    <p className="text-white font-black text-lg sm:text-xl leading-snug drop-shadow-md">
                      {story.quoteText}
                    </p>
                  </div>

                  {/* Center White Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-14 h-14 rounded-full bg-white text-[#0b2a4a] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-200 pl-0.5">
                      <Play className="w-6 h-6 fill-current text-[#0b2a4a]" />
                    </div>
                  </div>
                </div>

                {/* Name & Description */}
                <h3 className="text-xl font-bold text-[#0b2a4a] mb-1">
                  {story.name}
                </h3>
                <p className="text-gray-600 text-sm font-normal">
                  {story.description}
                </p>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4th Section / We are Advance America (Split Section) */}
      <section className="bg-white py-16 sm:py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-4xl sm:text-5xl font-black text-[#0b2a4a] tracking-tight leading-tight">
                We are Advance America.
              </h2>

              <ul className="space-y-4 pt-2">
                {pillarBullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[#0b2a4a]/85 text-base sm:text-lg font-medium">
                    <span className="w-3 h-1 bg-[#FFD100] rounded-full shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Card Column with Young Man Hoodie Photo */}
            <div className="lg:col-span-6">
              <div className="bg-[#f4f9fc] rounded-[32px] p-6 sm:p-8 border border-gray-100 shadow-sm flex justify-center">
                <div className="rounded-2xl overflow-hidden shadow-md max-w-md w-full">
                  <img
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop&q=80"
                    alt="Happy man using smartphone"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5th Section / 3 Core Values (Respect, Transparency, Financial Confidence) */}
      <section className="bg-white py-16 sm:py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-[#f4f9fc] rounded-3xl p-8 sm:p-10 border border-gray-100 flex flex-col items-center text-center shadow-xs hover:shadow-md transition-shadow"
              >
                {/* Soft Icon Badge */}
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-xs">
                  {val.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#0b2a4a] mb-3">
                  {val.title}
                </h3>

                {/* Description */}
                <p className="text-[#0b2a4a]/75 text-sm sm:text-base leading-relaxed font-normal">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6th Section / Our Community Impact Split Section */}
      <section className="bg-[#f4f9fc] py-16 sm:py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-4xl sm:text-5xl font-black text-[#0b2a4a] tracking-tight leading-tight">
                Our community impact
              </h2>

              <p className="text-[#0b2a4a]/85 text-base sm:text-lg leading-relaxed font-normal">
                Advance America gives back to our customers and employees by investing our time and resources in support of causes that are important to us.
              </p>

              <p className="text-[#0b2a4a]/85 text-base sm:text-lg leading-relaxed font-normal">
                From academic achievement and job training to financial literacy and community involvement, we work closely with local and national nonprofit organizations that make the biggest impact on our communities.
              </p>

              <p className="text-[#0b2a4a]/85 text-base sm:text-lg leading-relaxed font-normal">
                And for those looking for a more hands-on approach, our employees have access to two volunteer days off, allowing them to give back to the groups and causes they care most about.
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenForm}
                  className="bg-[#FFD100] hover:bg-[#f2c400] text-[#002B49] font-bold text-base sm:text-lg px-9 py-3.5 rounded-full shadow-md transition-all duration-200 cursor-pointer active:scale-95"
                >
                  Apply online
                </button>
              </div>
            </div>

            {/* Right Image Column: Volunteer Food Donation Photo */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="rounded-3xl overflow-hidden shadow-xl max-w-lg w-full">
                <img
                  src={volunteersImg}
                  alt="Advance America Community Impact Volunteers"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7th Section / Interested in joining us? Dark Navy Banner */}
      <section className="bg-[#082947] text-white py-16 sm:py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Interested in joining us?
          </h2>

          {/* Subtitle */}
          <p className="text-slate-200 text-base sm:text-lg font-normal max-w-2xl mx-auto">
            Explore career opportunities at Advance America and make a difference every day.
          </p>

          {/* Contact Us Button */}
          <div className="pt-4 flex justify-center">
            <button
              onClick={handleContactUsClick}
              className="bg-[#FFD100] hover:bg-[#f2c400] text-[#002B49] font-bold text-base sm:text-lg px-10 py-3.5 rounded-full shadow-lg transition-all duration-200 cursor-pointer active:scale-95"
            >
              Contact us
            </button>
          </div>

        </div>
      </section>

    </div>
  )
}
