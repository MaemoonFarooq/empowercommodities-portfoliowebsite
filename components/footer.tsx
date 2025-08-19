"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Twitter, Facebook, Youtube, Instagram, Linkedin, Globe, ChevronDown } from "lucide-react"
import { XIcon } from "./XIcon"   // <-- import custom icon

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={footerRef} className="bg-gray-50 py-8 sm:py-12 lg:py-16 cursor-white-area">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Access Live Market */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="font-semibold text-gray-900 mb-3 lg:mb-4 text-xs sm:text-sm">ACCESS LIVE MARKET</h3>
            <ul className="space-y-1 lg:space-y-2 text-xs sm:text-sm text-gray-600">
              <li>
                <Link href="#" className="hover:text-gray-900 transition-colors duration-200 inline-block">
                  Trading View
                </Link>
              </li>
            </ul>

            <h3 className="font-semibold text-gray-900 mb-3 lg:mb-4 mt-6 text-xs sm:text-sm">CATEGORIES</h3>
            <ul className="space-y-1 lg:space-y-2 text-xs sm:text-sm text-gray-600">
              {["Comodities","Energies","Currency Payers","Indices","Agriculture"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-gray-900 transition-colors duration-200 inline-block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-gray-900 mb-3 lg:mb-4 mt-6 text-xs sm:text-sm">APPS</h3>
            <ul className="space-y-1 lg:space-y-2 text-xs sm:text-sm text-gray-600">
              {["Mobile Android", "Mobile IOS", "Desktop"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-gray-900 transition-colors duration-200 inline-block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & About */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-semibold text-gray-900 mb-3 lg:mb-4 text-xs sm:text-sm">TOOLS</h3>
            <ul className="space-y-1 lg:space-y-2 text-xs sm:text-sm text-gray-600">
              <li>
                <Link href="#" className="hover:text-gray-900 transition-colors duration-200 inline-block">
                  Market Watch
                </Link>
              </li>
            </ul>

            <h3 className="font-semibold text-gray-900 mb-3 lg:mb-4 mt-6 text-xs sm:text-sm">ABOUT COMPANY</h3>
            <ul className="space-y-1 lg:space-y-2 text-xs sm:text-sm text-gray-600">
              {["Who we are", "Careers", "Blogs"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-gray-900 transition-colors duration-200 inline-block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h3 className="font-semibold text-gray-900 mb-3 lg:mb-4 text-xs sm:text-sm">POLICIES & CERTIFICATIONS</h3>
            <ul className="space-y-1 lg:space-y-2 text-xs sm:text-sm text-gray-600">
              {["Regulations"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-gray-900 transition-colors duration-200 inline-block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Growth Opportunities */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
            <h3 className="font-semibold text-gray-900 mb-3 lg:mb-4 text-xs sm:text-sm">GROWTH OPPORTUNITIES</h3>
            <ul className="space-y-1 lg:space-y-2 text-xs sm:text-sm text-gray-600">
              <li>
                <Link href="#" className="hover:text-gray-900 transition-colors duration-200 inline-block">
                  Partner Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Language */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex space-x-3 lg:space-x-4 mb-4">
              {[XIcon, Facebook, Youtube, Instagram, Linkedin].map((Icon, i) => (
                <Link key={i} href="#" className="text-gray-600 hover:text-gray-900 transition-all duration-300">
                  <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                </Link>
              ))}
            </div>

            <div className="flex space-x-3 lg:space-x-4 mb-6">
              {["D", "T", "R"].map((letter) => (
                <Link key={letter} href="#" className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300">
                  <span className="text-xs font-bold">{letter}</span>
                </Link>
              ))}
            </div>

            <div className="mb-6">
              <button className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 hover:text-gray-900">
                <Globe className="w-3 h-3 lg:w-4 lg:h-4" />
                <span>English</span>
                <ChevronDown className="w-3 h-3 lg:w-4 lg:h-4" />
              </button>
            </div>

            <div className="text-xs text-gray-500">
              <p>Stock market data provided by the IEX Group.</p>
              <p>Select reference data provided by Factset. © 2024 Falcon Research Systems Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
