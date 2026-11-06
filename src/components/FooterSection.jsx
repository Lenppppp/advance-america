import React from 'react'
import footerLogo from '../assets/footer-logo.png'

export default function FooterSection({ onOpenForm, onOpenStoreLocations }) {
  const loanLinks = [
    'Payday Loans',
    'Installment Loans',
    'Personal Loans',
    'Title Loans',
    'Cash Advances',
    'Online Loans',
    'Emergency Loans',
    'Line of Credit',
  ]

  const resourceLinks = [
    'About Us',
    'Contact Us',
    'Money Tips',
    'Security',
    'Find a Store',
  ]

  const supportLinks = [
    'FAQs',
    'Privacy Policy',
    'Terms of Use',
    'Legal Disclaimers',
    'Start Verification',
  ]

  return (
    <footer className="bg-[#072238] text-white pt-16 pb-12 border-t border-[#0b2f4c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-700/50">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 pr-0 lg:pr-8">
            <div className="inline-block mb-6">
              <img
                src={footerLogo}
                alt="Advance America"
                className="h-7 w-auto object-contain"
              />
            </div>
            <p className="text-[#9cb3c9] text-sm sm:text-base leading-relaxed max-w-sm font-normal">
              Advance America is a leading provider of consumer financial services, with over 800 locations nationwide and online access 24/7.
            </p>
          </div>

          {/* Loans Column (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-[#FFD100] font-bold text-xs tracking-wider uppercase mb-5">
              LOANS
            </h3>
            <ul className="space-y-3">
              {loanLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={onOpenForm}
                    className="text-[#d0e1f0] hover:text-[#FFD100] text-sm transition-colors font-normal cursor-pointer"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-[#FFD100] font-bold text-xs tracking-wider uppercase mb-5">
              RESOURCES
            </h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={link === 'Find a Store' ? onOpenStoreLocations : undefined}
                    className="text-[#d0e1f0] hover:text-[#FFD100] text-sm transition-colors font-normal cursor-pointer text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-[#FFD100] font-bold text-xs tracking-wider uppercase mb-5">
              SUPPORT
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={link === 'Start Verification' ? onOpenForm : undefined}
                    className="text-[#d0e1f0] hover:text-[#FFD100] text-sm transition-colors font-normal cursor-pointer text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Socials & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-[#9cb3c9]">
          
          {/* Social Icons */}
          <div className="flex items-center gap-5">
            {/* Arrow/Chevron Icon */}
            <span className="text-[#9cb3c9] hover:text-white transition-colors cursor-pointer" aria-label="Chevron Left">
              <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </span>

            {/* Facebook Icon */}
            <span className="text-[#9cb3c9] hover:text-white transition-colors cursor-pointer" aria-label="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </span>

            {/* Instagram Icon */}
            <span className="text-[#9cb3c9] hover:text-white transition-colors cursor-pointer" aria-label="Instagram">
              <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </span>

            {/* YouTube Icon */}
            <span className="text-[#9cb3c9] hover:text-white transition-colors cursor-pointer" aria-label="YouTube">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z M9.75 15.02V8.48l5.75 3.27-5.75 3.27z" />
              </svg>
            </span>

            {/* Pinterest Icon */}
            <span className="text-[#9cb3c9] hover:text-white transition-colors cursor-pointer" aria-label="Pinterest">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.62 0 12.017 0z" />
              </svg>
            </span>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-xs sm:text-sm">
            <span className="hover:text-white transition-colors font-medium cursor-pointer">
              Privacy & Terms
            </span>
            <span className="text-slate-600">|</span>
            <span className="hover:text-white transition-colors font-medium cursor-pointer">
              Cookies & Advertising
            </span>
          </div>

        </div>

      </div>
    </footer>
  )
}
