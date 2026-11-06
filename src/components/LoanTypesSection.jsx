import React from 'react'
import appPhoneImg from '../assets/app-phone-illustration-clean.png'

export default function LoanTypesSection({
  onOpenForm,
  onOpenPaydayLoans,
  onOpenInstallmentLoans,
  onOpenPersonalLoans,
  onOpenTitleLoans,
  onOpenCashAdvances,
  onOpenOnlineLoans,
  onOpenEmergencyLoans,
  onOpenLineOfCredit,
}) {
  const loanTypes = [
    {
      title: 'Installment Loans',
      description: 'Get the money you need now and repay it over time in fixed monthly installments.',
      icon: (
        <svg className="w-6 h-6 text-[#0b2a4a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="4" rx="2" id="rect" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
        </svg>
      ),
      action: onOpenInstallmentLoans || onOpenForm,
    },
    {
      title: 'Line of Credit',
      description: "Tap into your credit line as needed - you'll only pay interest on what you borrow.",
      icon: (
        <svg className="w-6 h-6 text-[#0b2a4a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
          <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
          <path d="M16 16h5v5" />
        </svg>
      ),
      action: onOpenLineOfCredit || onOpenForm,
    },
    {
      title: 'Payday Loans',
      description: 'Get same-day funds for immediate expenses. Repay the loan in full on your next payday.',
      icon: (
        <svg className="w-6 h-6 text-[#0b2a4a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="12" x="2" y="6" rx="2" />
          <circle cx="12" cy="12" r="2" />
          <path d="M6 12h.01M18 12h.01" />
        </svg>
      ),
      action: onOpenPaydayLoans || onOpenForm,
    },
    {
      title: 'Personal Loans',
      description: 'Get quick access to cash to cover urgent expenses. Repay your loan with flexible terms.',
      icon: (
        <svg className="w-6 h-6 text-[#0b2a4a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      action: onOpenPersonalLoans || onOpenForm,
    },
    {
      title: 'Title Loans',
      description: "Use your car's value to get a secured loan. Keep driving while you pay back.",
      icon: (
        <svg className="w-6 h-6 text-[#0b2a4a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="2" />
          <path d="M9 17h6" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      ),
      action: onOpenTitleLoans || onOpenForm,
    },
    {
      title: 'Cash Advances',
      description: 'Get quick access to cash to cover urgent expenses. Repay your loan in 2-4 weeks.',
      icon: (
        <svg className="w-6 h-6 text-[#0b2a4a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      action: onOpenCashAdvances || onOpenForm,
    },
    {
      title: 'Online Loans',
      description: 'Fast and easy loans you can apply for from anywhere, anytime.',
      icon: (
        <svg className="w-6 h-6 text-[#0b2a4a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
      ),
      action: onOpenOnlineLoans || onOpenForm,
    },
    {
      title: 'Emergency Loans',
      description: "When the unexpected happens, we're here to help - fast.",
      icon: (
        <svg className="w-6 h-6 text-[#0b2a4a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      action: onOpenEmergencyLoans || onOpenForm,
    },
  ]

  return (
    <section id="loan-types" className="bg-[#f4f9fc] py-16 sm:py-24 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2a4a] text-center tracking-tight leading-tight max-w-3xl mx-auto mb-12 sm:mb-16">
          Apply for a personal loan from Advance America
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Loan Type Cards Grid (2 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {loanTypes.map((loan, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Card Icon & Title Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="shrink-0">
                      {loan.icon}
                    </div>
                    <button
                      onClick={loan.action}
                      className="text-xl font-bold text-[#0b2a4a] hover:text-[#0052cc] transition-colors underline cursor-pointer text-left"
                    >
                      {loan.title}
                    </button>
                  </div>

                  {/* Card Description */}
                  <p className="text-[#0b2a4a]/75 text-sm sm:text-base leading-relaxed font-normal">
                    {loan.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Mobile App Feature Banner Card */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center justify-between">
            <div className="w-full flex justify-center mb-6">
              <img
                src={appPhoneImg}
                alt="Advance America Mobile App Approval"
                className="h-44 sm:h-52 w-auto object-contain"
              />
            </div>

            <div>
              <p className="text-[#0b2a4a] font-bold text-lg sm:text-xl leading-snug mb-6">
                Get approved in minutes with our fast online application
              </p>

              <button
                onClick={onOpenForm}
                className="w-full bg-[#FFD100] hover:bg-[#f2c400] text-[#002B49] font-bold text-base sm:text-lg py-3.5 px-6 rounded-full shadow-xs transition-all duration-200 cursor-pointer active:scale-95"
              >
                Apply now
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
