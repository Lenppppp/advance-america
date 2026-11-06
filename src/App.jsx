import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TrustBannerSection from './components/TrustBannerSection'
import HowItWorksSection from './components/HowItWorksSection'
import AboutSection from './components/AboutSection'
import ReviewsSection from './components/ReviewsSection'
import LoanTypesSection from './components/LoanTypesSection'
import FaqSection from './components/FaqSection'
import NewsletterSection from './components/NewsletterSection'
import FooterSection from './components/FooterSection'
import LoanApplicationForm from './components/LoanApplicationForm'
import PaydayLoansPage from './components/PaydayLoansPage'
import InstallmentLoansPage from './components/InstallmentLoansPage'
import PersonalLoansPage from './components/PersonalLoansPage'
import TitleLoansPage from './components/TitleLoansPage'
import CashAdvancesPage from './components/CashAdvancesPage'
import OnlineLoansPage from './components/OnlineLoansPage'
import EmergencyLoansPage from './components/EmergencyLoansPage'
import LineOfCreditPage from './components/LineOfCreditPage'
import BudgetingToolsPage from './components/BudgetingToolsPage'
import FinancialLiteracyPage from './components/FinancialLiteracyPage'
import DebtManagementPage from './components/DebtManagementPage'
import WesternUnionPage from './components/WesternUnionPage'
import AboutUsPage from './components/AboutUsPage'
import StoreLocationsPage from './components/StoreLocationsPage'

const validViews = [
  'home',
  'payday-loans',
  'installment-loans',
  'personal-loans',
  'title-loans',
  'cash-advances',
  'online-loans',
  'emergency-loans',
  'line-of-credit',
  'budgeting-tools',
  'financial-literacy',
  'debt-management',
  'western-union',
  'about-us',
  'store-locations',
  'form',
]

const getInitialView = () => {
  const hash = window.location.hash.replace('#', '')
  if (validViews.includes(hash)) return hash
  try {
    const saved = sessionStorage.getItem('advance_america_active_view')
    if (validViews.includes(saved)) return saved
  } catch {}
  return 'home'
}

export default function App() {
  const [currentView, setCurrentView] = useState(getInitialView)

  useEffect(() => {
    try {
      sessionStorage.setItem('advance_america_active_view', currentView)
    } catch {}
    // Sync hash location
    window.location.hash = currentView === 'home' ? '' : currentView
    // Always scroll to the top of the section/page on view change or refresh
    window.scrollTo(0, 0)
  }, [currentView])

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (validViews.includes(hash)) {
        setCurrentView(hash)
      } else if (!hash) {
        // If loan form is submitted, do not reset to home on empty hash
        try {
          if (sessionStorage.getItem('loan_application_submitted') === 'true') {
            return
          }
        } catch {}
        setCurrentView('home')
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleOpenForm = () => {
    setCurrentView('form')
  }

  const handleOpenPaydayLoans = () => {
    setCurrentView('payday-loans')
  }

  const handleOpenInstallmentLoans = () => {
    setCurrentView('installment-loans')
  }

  const handleOpenPersonalLoans = () => {
    setCurrentView('personal-loans')
  }

  const handleOpenTitleLoans = () => {
    setCurrentView('title-loans')
  }

  const handleOpenCashAdvances = () => {
    setCurrentView('cash-advances')
  }

  const handleOpenOnlineLoans = () => {
    setCurrentView('online-loans')
  }

  const handleOpenEmergencyLoans = () => {
    setCurrentView('emergency-loans')
  }

  const handleOpenLineOfCredit = () => {
    setCurrentView('line-of-credit')
  }

  const handleOpenBudgetingTools = () => {
    setCurrentView('budgeting-tools')
  }

  const handleOpenFinancialLiteracy = () => {
    setCurrentView('financial-literacy')
  }

  const handleOpenDebtManagement = () => {
    setCurrentView('debt-management')
  }

  const handleOpenWesternUnion = () => {
    setCurrentView('western-union')
  }

  const handleOpenAboutUs = () => {
    setCurrentView('about-us')
  }

  const handleOpenStoreLocations = () => {
    setCurrentView('store-locations')
  }

  const handleGoHome = () => {
    setCurrentView('home')
  }

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between font-sans antialiased text-[#0b2a4a]">
      <div>
        <Navbar
          onOpenForm={handleOpenForm}
          onOpenPaydayLoans={handleOpenPaydayLoans}
          onOpenInstallmentLoans={handleOpenInstallmentLoans}
          onOpenPersonalLoans={handleOpenPersonalLoans}
          onOpenTitleLoans={handleOpenTitleLoans}
          onOpenCashAdvances={handleOpenCashAdvances}
          onOpenOnlineLoans={handleOpenOnlineLoans}
          onOpenEmergencyLoans={handleOpenEmergencyLoans}
          onOpenLineOfCredit={handleOpenLineOfCredit}
          onOpenBudgetingTools={handleOpenBudgetingTools}
          onOpenFinancialLiteracy={handleOpenFinancialLiteracy}
          onOpenDebtManagement={handleOpenDebtManagement}
          onOpenWesternUnion={handleOpenWesternUnion}
          onOpenAboutUs={handleOpenAboutUs}
          onOpenStoreLocations={handleOpenStoreLocations}
          onGoHome={handleGoHome}
        />

        {currentView === 'home' && (
          <main>
            <HeroSection onOpenForm={handleOpenForm} />
            <TrustBannerSection />
            <HowItWorksSection onOpenForm={handleOpenForm} />
            <AboutSection />
            <ReviewsSection />
            <LoanTypesSection
              onOpenForm={handleOpenForm}
              onOpenPaydayLoans={handleOpenPaydayLoans}
              onOpenInstallmentLoans={handleOpenInstallmentLoans}
              onOpenPersonalLoans={handleOpenPersonalLoans}
              onOpenTitleLoans={handleOpenTitleLoans}
              onOpenCashAdvances={handleOpenCashAdvances}
              onOpenOnlineLoans={handleOpenOnlineLoans}
              onOpenEmergencyLoans={handleOpenEmergencyLoans}
              onOpenLineOfCredit={handleOpenLineOfCredit}
            />
            <FaqSection />
          </main>
        )}

        {currentView === 'payday-loans' && (
          <PaydayLoansPage
            onOpenForm={handleOpenForm}
            onOpenStoreLocations={handleOpenStoreLocations}
            onGoHome={handleGoHome}
          />
        )}

        {currentView === 'installment-loans' && (
          <InstallmentLoansPage
            onOpenForm={handleOpenForm}
            onOpenStoreLocations={handleOpenStoreLocations}
            onGoHome={handleGoHome}
          />
        )}

        {currentView === 'personal-loans' && (
          <PersonalLoansPage
            onOpenForm={handleOpenForm}
            onOpenStoreLocations={handleOpenStoreLocations}
            onGoHome={handleGoHome}
          />
        )}

        {currentView === 'title-loans' && (
          <TitleLoansPage
            onOpenForm={handleOpenForm}
            onOpenStoreLocations={handleOpenStoreLocations}
            onGoHome={handleGoHome}
          />
        )}

        {currentView === 'cash-advances' && (
          <CashAdvancesPage
            onOpenForm={handleOpenForm}
            onOpenStoreLocations={handleOpenStoreLocations}
            onGoHome={handleGoHome}
          />
        )}

        {currentView === 'online-loans' && (
          <OnlineLoansPage
            onOpenForm={handleOpenForm}
            onOpenStoreLocations={handleOpenStoreLocations}
            onGoHome={handleGoHome}
          />
        )}

        {currentView === 'emergency-loans' && (
          <EmergencyLoansPage
            onOpenForm={handleOpenForm}
            onOpenStoreLocations={handleOpenStoreLocations}
            onGoHome={handleGoHome}
          />
        )}

        {currentView === 'line-of-credit' && (
          <LineOfCreditPage
            onOpenForm={handleOpenForm}
            onOpenStoreLocations={handleOpenStoreLocations}
            onGoHome={handleGoHome}
          />
        )}

        {currentView === 'budgeting-tools' && (
          <BudgetingToolsPage
            onOpenForm={handleOpenForm}
            onGoHome={handleGoHome}
          />
        )}

        {currentView === 'financial-literacy' && (
          <FinancialLiteracyPage
            onOpenForm={handleOpenForm}
            onGoHome={handleGoHome}
          />
        )}

        {currentView === 'debt-management' && (
          <DebtManagementPage
            onOpenForm={handleOpenForm}
            onOpenPersonalLoans={handleOpenPersonalLoans}
            onGoHome={handleGoHome}
          />
        )}

        {currentView === 'western-union' && (
          <WesternUnionPage
            onOpenForm={handleOpenForm}
            onOpenStoreLocations={handleOpenStoreLocations}
            onGoHome={handleGoHome}
          />
        )}

        {currentView === 'about-us' && (
          <AboutUsPage
            onOpenForm={handleOpenForm}
            onOpenStoreLocations={handleOpenStoreLocations}
            onGoHome={handleGoHome}
          />
        )}

        {currentView === 'store-locations' && (
          <StoreLocationsPage onGoHome={handleGoHome} />
        )}

        {currentView === 'form' && (
          <LoanApplicationForm onBack={handleGoHome} />
        )}
      </div>

      {/* Persistent Newsletter ("Let's keep in touch") and Footer across all pages */}
      <div>
        <NewsletterSection />
        <FooterSection
          onOpenForm={handleOpenForm}
          onOpenStoreLocations={handleOpenStoreLocations}
        />
      </div>
    </div>
  )
}
