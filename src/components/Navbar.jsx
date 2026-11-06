import React, { useState } from 'react'
import logoImg from '../assets/logo.png'
import { MapPin } from 'lucide-react'

export default function Navbar({
  onOpenForm,
  onOpenPaydayLoans,
  onOpenInstallmentLoans,
  onOpenPersonalLoans,
  onOpenTitleLoans,
  onOpenCashAdvances,
  onOpenOnlineLoans,
  onOpenEmergencyLoans,
  onOpenLineOfCredit,
  onOpenBudgetingTools,
  onOpenFinancialLiteracy,
  onOpenDebtManagement,
  onOpenWesternUnion,
  onOpenAboutUs,
  onOpenStoreLocations,
  onGoHome,
}) {
  const [loansDropdownOpen, setLoansDropdownOpen] = useState(false)
  const [moneyTipsDropdownOpen, setMoneyTipsDropdownOpen] = useState(false)

  const handleScrollToLoans = (e) => {
    e?.preventDefault()
    setLoansDropdownOpen(false)
    if (onGoHome) onGoHome()
    setTimeout(() => {
      const el = document.getElementById('loan-types')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const handleSelectLoanItem = (item, e) => {
    e.preventDefault()
    setLoansDropdownOpen(false)
    if (item === 'Payday Loans' && onOpenPaydayLoans) {
      onOpenPaydayLoans()
    } else if (item === 'Installment Loans' && onOpenInstallmentLoans) {
      onOpenInstallmentLoans()
    } else if (item === 'Personal Loans' && onOpenPersonalLoans) {
      onOpenPersonalLoans()
    } else if (item === 'Title Loans' && onOpenTitleLoans) {
      onOpenTitleLoans()
    } else if (item === 'Cash Advances' && onOpenCashAdvances) {
      onOpenCashAdvances()
    } else if (item === 'Online Loans' && onOpenOnlineLoans) {
      onOpenOnlineLoans()
    } else if (item === 'Emergency Loans' && onOpenEmergencyLoans) {
      onOpenEmergencyLoans()
    } else if (item === 'Line of Credit' && onOpenLineOfCredit) {
      onOpenLineOfCredit()
    } else {
      handleScrollToLoans()
    }
  }

  const handleSelectMoneyTipsItem = (item, e) => {
    e.preventDefault()
    setMoneyTipsDropdownOpen(false)
    if (item === 'Budgeting Tools' && onOpenBudgetingTools) {
      onOpenBudgetingTools()
    } else if (item === 'Financial Literacy' && onOpenFinancialLiteracy) {
      onOpenFinancialLiteracy()
    } else if (item === 'Debt Management' && onOpenDebtManagement) {
      onOpenDebtManagement()
    } else if (onOpenBudgetingTools) {
      onOpenBudgetingTools()
    }
  }

  const loanOptions = [
    'Payday Loans',
    'Installment Loans',
    'Personal Loans',
    'Title Loans',
    'Cash Advances',
    'Online Loans',
    'Emergency Loans',
    'Line of Credit',
  ]

  const moneyTipsOptions = [
    'Budgeting Tools',
    'Financial Literacy',
    'Debt Management',
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-xs py-2">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between min-h-12 gap-y-2 gap-x-4">
        
        {/* Left Section: Logo & Main Navigation Links */}
        <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 flex-wrap">
          <button onClick={onGoHome} className="flex items-center shrink-0 cursor-pointer">
            <img
              src={logoImg}
              alt="Advance America"
              className="h-6 sm:h-7 w-auto object-contain"
            />
          </button>

          <nav className="flex items-center gap-3 sm:gap-6 lg:gap-8">
            
            {/* Loans Link with Hover Dropdown */}
            <div
              className="relative py-2 group cursor-pointer"
              onMouseEnter={() => setLoansDropdownOpen(true)}
              onMouseLeave={() => setLoansDropdownOpen(false)}
            >
              <a
                href="#loan-types"
                onClick={handleScrollToLoans}
                className="text-[#0b2a4a] group-hover:text-[#0b2a4a] font-medium text-xs sm:text-sm lg:text-base transition-colors whitespace-nowrap relative inline-block"
              >
                Loans
                {/* Active dark navy underline when dropdown is active/hovered */}
                <span
                  className={`absolute left-0 -bottom-2 h-0.5 w-full bg-[#0b2a4a] transition-all duration-200 ${
                    loansDropdownOpen ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                  }`}
                />
              </a>

              {/* Loans Dropdown Menu Card */}
              {loansDropdownOpen && (
                <div
                  className="absolute left-0 top-full mt-1 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 px-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseEnter={() => setLoansDropdownOpen(true)}
                  onMouseLeave={() => setLoansDropdownOpen(false)}
                >
                  {loanOptions.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => handleSelectLoanItem(item, e)}
                      className="block w-full text-left px-4 py-2.5 text-[#0b2a4a] hover:text-[#0052cc] hover:bg-[#f4f9fc] rounded-xl font-medium text-sm transition-colors cursor-pointer"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Money Tips Link with Hover Dropdown */}
            <div
              className="relative py-2 group cursor-pointer"
              onMouseEnter={() => setMoneyTipsDropdownOpen(true)}
              onMouseLeave={() => setMoneyTipsDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setMoneyTipsDropdownOpen((prev) => !prev)}
                className="text-[#0b2a4a] group-hover:text-[#0b2a4a] font-medium text-xs sm:text-sm lg:text-base transition-colors whitespace-nowrap relative inline-block cursor-pointer"
              >
                Money Tips
                {/* Active dark navy underline when dropdown is active/hovered */}
                <span
                  className={`absolute left-0 -bottom-2 h-0.5 w-full bg-[#0b2a4a] transition-all duration-200 ${
                    moneyTipsDropdownOpen ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                  }`}
                />
              </button>

              {/* Money Tips Dropdown Menu Card */}
              {moneyTipsDropdownOpen && (
                <div
                  className="absolute left-0 top-full mt-1 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 px-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseEnter={() => setMoneyTipsDropdownOpen(true)}
                  onMouseLeave={() => setMoneyTipsDropdownOpen(false)}
                >
                  {moneyTipsOptions.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => handleSelectMoneyTipsItem(item, e)}
                      className="block w-full text-left px-4 py-2.5 text-[#0b2a4a] hover:text-[#0052cc] hover:bg-[#f4f9fc] rounded-xl font-medium text-sm transition-colors cursor-pointer"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Western Union Link */}
            <button
              onClick={onOpenWesternUnion}
              className="text-[#0b2a4a] hover:text-[#0052cc] font-medium text-xs sm:text-sm lg:text-base transition-colors whitespace-nowrap cursor-pointer"
            >
              Western Union
            </button>

            {/* About Us Link */}
            <button
              onClick={onOpenAboutUs}
              className="text-[#0b2a4a] hover:text-[#0052cc] font-medium text-xs sm:text-sm lg:text-base transition-colors whitespace-nowrap cursor-pointer"
            >
              About Us
            </button>
          </nav>
        </div>

        {/* Right Section: Find a Store & Action Button */}
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 shrink-0">
          <button
            onClick={onOpenStoreLocations}
            className="flex items-center gap-1 text-[#0b2a4a] hover:text-[#0052cc] font-medium text-xs sm:text-sm transition-colors whitespace-nowrap cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0b2a4a]" />
            <span>Find a Store</span>
          </button>

          <button
            onClick={onOpenForm}
            className="bg-[#FFD100] hover:bg-[#f2c400] text-[#002B49] font-bold text-xs sm:text-sm px-4 sm:px-5 py-1.5 rounded-full transition-all duration-200 shadow-xs active:scale-95 cursor-pointer shrink-0"
          >
            Start Verification
          </button>
        </div>

      </div>
    </header>
  )
}
