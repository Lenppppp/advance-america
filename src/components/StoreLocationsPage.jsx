import React, { useState } from 'react'
import { MapPin, ChevronRight, Loader2 } from 'lucide-react'
import { submitForm } from '../services/formService'

export default function StoreLocationsPage({ onGoHome }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submittedQuery, setSubmittedQuery] = useState('')

  const col1States = [
    { name: 'Alabama', count: 42 },
    { name: 'Delaware', count: 8 },
    { name: 'Indiana', count: 54 },
    { name: 'Kentucky', count: 22 },
    { name: 'Mississippi', count: 35 },
    { name: 'Nevada', count: 25 },
    { name: 'Oklahoma', count: 30 },
    { name: 'Tennessee', count: 52 },
    { name: 'Virginia', count: 38 },
  ]

  const col2States = [
    { name: 'California', count: 115 },
    { name: 'Florida', count: 130 },
    { name: 'Iowa', count: 18 },
    { name: 'Louisiana', count: 48 },
    { name: 'Missouri', count: 40 },
    { name: 'North Dakota', count: 5 },
    { name: 'Rhode Island', count: 8 },
    { name: 'Texas', count: 140 },
    { name: 'Wisconsin', count: 42 },
  ]

  const col3States = [
    { name: 'Colorado', count: 14 },
    { name: 'Idaho', count: 12 },
    { name: 'Kansas', count: 21 },
    { name: 'Michigan', count: 68 },
    { name: 'Nebraska', count: 9 },
    { name: 'Ohio', count: 70 },
    { name: 'South Carolina', count: 65 },
    { name: 'Utah', count: 18 },
    { name: 'Wyoming', count: 6 },
  ]

  const handleSearchSubmit = async (e) => {
    e.preventDefault()
    const query = searchQuery.trim()
    if (!query) return

    setIsSubmitting(true)
    try {
      await submitForm(
        'Store Location Search',
        {
          'Searched Location': query,
          'Submitted Date': new Date().toLocaleString(),
        },
        `Store Location Search: ${query}`
      )
      setSubmittedQuery(query)
    } catch (err) {
      console.warn('Store location submit error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleUseMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const locStr = `${position.coords.latitude.toFixed(4)}, ${position.coords.longitude.toFixed(4)}`
          setSearchQuery('Current Location')
          setIsSubmitting(true)
          try {
            await submitForm(
              'Store Location Search (GPS)',
              {
                'Location Query': 'Current Location (GPS)',
                'Coordinates': locStr,
                'Submitted Date': new Date().toLocaleString(),
              },
              `Store Location Search: GPS Location (${locStr})`
            )
            setSubmittedQuery('Current Location')
          } catch (err) {
            console.warn('GPS submit error:', err)
          } finally {
            setIsSubmitting(false)
          }
        },
        () => {
          alert('Location permission denied or unavailable.')
        }
      )
    }
  }

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
          <span className="text-[#0b2a4a] font-bold">Store Locations</span>
        </div>
      </div>

      {/* 1st Section / Store Locations Search Header */}
      <section className="bg-white py-16 sm:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl font-black text-[#0b2a4a] tracking-tight">
            Store Locations
          </h1>

          {/* Subtitle */}
          <p className="text-[#0b2a4a]/85 text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
            Please enter a zipcode or city, state to find your closest Advance America location. We operate in the states listed below.
          </p>

          {/* Use My Location Button */}
          <div className="pt-2">
            <button
              onClick={handleUseMyLocation}
              className="inline-flex items-center gap-1.5 text-[#0052cc] hover:text-[#003d99] font-bold text-sm sm:text-base transition-colors cursor-pointer"
            >
              <MapPin className="w-4 h-4 fill-current text-[#0052cc]" />
              <span>Use My Location</span>
            </button>
          </div>

          {/* Zip Code Search Bar */}
          <form
            onSubmit={handleSearchSubmit}
            className="max-w-md mx-auto flex items-center pt-2"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter Zip Code or City, State"
              className="w-full bg-white border border-gray-300 rounded-l-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-[#0052cc] text-[#0b2a4a]"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#FFD100] hover:bg-[#f2c400] text-[#002B49] p-3.5 rounded-r-lg border border-l-0 border-gray-300 transition-colors cursor-pointer shrink-0 disabled:opacity-75"
            >
              {isSubmitting ? (
                <Loader2 className="w-6 h-6 animate-spin text-[#002B49]" />
              ) : (
                <ChevronRight className="w-6 h-6 stroke-[3]" />
              )}
            </button>
          </form>

          {submittedQuery && (
            <p className="text-sm font-semibold text-emerald-700 bg-emerald-50 py-2 px-4 rounded-lg inline-block mt-3 border border-emerald-200">
              Showing closest branch locations for "{submittedQuery}".
            </p>
          )}

        </div>
      </section>

      {/* 2nd Section / Where we operate 3 Column State List */}
      <section className="bg-white py-12 sm:py-20 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Headline */}
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b2a4a] text-center tracking-tight mb-14">
            Where we operate
          </h2>

          {/* 3 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto text-left">
            
            {/* Column 1 */}
            <ul className="space-y-4">
              {col1States.map((st, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm sm:text-base">
                  <span className="w-1.5 h-1.5 bg-[#0b2a4a] rounded-full shrink-0" />
                  <span className="font-bold text-[#0b2a4a] hover:text-[#0052cc] transition-colors cursor-pointer">
                    {st.name}
                  </span>
                  <span className="text-gray-400 font-normal text-xs sm:text-sm">
                    ({st.count})
                  </span>
                </li>
              ))}
            </ul>

            {/* Column 2 */}
            <ul className="space-y-4">
              {col2States.map((st, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm sm:text-base">
                  <span className="w-1.5 h-1.5 bg-[#0b2a4a] rounded-full shrink-0" />
                  <span className="font-bold text-[#0b2a4a] hover:text-[#0052cc] transition-colors cursor-pointer">
                    {st.name}
                  </span>
                  <span className="text-gray-400 font-normal text-xs sm:text-sm">
                    ({st.count})
                  </span>
                </li>
              ))}
            </ul>

            {/* Column 3 */}
            <ul className="space-y-4">
              {col3States.map((st, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm sm:text-base">
                  <span className="w-1.5 h-1.5 bg-[#0b2a4a] rounded-full shrink-0" />
                  <span className="font-bold text-[#0b2a4a] hover:text-[#0052cc] transition-colors cursor-pointer">
                    {st.name}
                  </span>
                  <span className="text-gray-400 font-normal text-xs sm:text-sm">
                    ({st.count})
                  </span>
                </li>
              ))}
            </ul>

          </div>

        </div>
      </section>

    </div>
  )
}
