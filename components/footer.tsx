"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Twitter, Facebook, Youtube, Instagram, Linkedin, Globe, ChevronDown } from "lucide-react"
import { XIcon } from "./XIcon"   // <-- custom X icon

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

  // Define social media links
  const socialLinks = [
    { Icon: XIcon, href: "https://x.com" },
    { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61576423055091" },
    { Icon: Youtube, href: "#" },
    { Icon: Instagram, href: "https://www.instagram.com/empowercommoditiesltd" },
    { Icon: Linkedin, href: "https://www.linkedin.com/company/empower-commodities-pvt-ltd/" },
  ]

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
                <a 
                  href="https://www.tradingview.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-gray-900 transition-colors duration-200 inline-block"
                >
                  Trading View
                </a>
              </li>
            </ul>

            <h3 className="font-semibold text-gray-900 mb-3 lg:mb-4 mt-6 text-xs sm:text-sm">CATEGORIES</h3>
            <ul className="space-y-1 lg:space-y-2 text-xs sm:text-sm text-gray-600">
              {["Comodities","Energies","Currency Payers","Indices","Agriculture"].map((item) => (
                <li key={item}>
                  <Link href="/products" className="hover:text-gray-900 transition-colors duration-200 inline-block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-gray-900 mb-3 lg:mb-4 mt-6 text-xs sm:text-sm">APPS</h3>
            <ul className="space-y-1 lg:space-y-2 text-xs sm:text-sm text-gray-600">
              <li>
                <a 
                  href="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5&hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 transition-colors duration-200 inline-block"
                >
                  Mobile Android
                </a>
              </li>
              <li>
                <a 
                  href="https://apps.apple.com/us/app/metatrader-5/id413251709" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 transition-colors duration-200 inline-block"
                >
                  Mobile IOS
                </a>
              </li>
              <li>
                <a 
                  href="https://download.mql5.com/cdn/web/pakistan.mercantile.exchange/mt5/pmex5setup.exe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-900 transition-colors duration-200 inline-block"
                >
                  Desktop
                </a>
              </li>
            </ul>
          </div>

          {/* Tools & About */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-semibold text-gray-900 mb-3 lg:mb-4 text-xs sm:text-sm">TOOLS</h3>
            <ul className="space-y-1 lg:space-y-2 text-xs sm:text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-gray-900 transition-colors duration-200 inline-block">
                  Market Watch
                </Link>
              </li>
            </ul>

            <h3 className="font-semibold text-gray-900 mb-3 lg:mb-4 mt-6 text-xs sm:text-sm">ABOUT COMPANY</h3>
            <ul className="space-y-1 lg:space-y-2 text-xs sm:text-sm text-gray-600">
              <li>
                <Link href="/about-us" className="hover:text-gray-900 transition-colors duration-200 inline-block">
                  Who we are
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-gray-900 transition-colors duration-200 inline-block">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-900 transition-colors duration-200 inline-block">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h3 className="font-semibold text-gray-900 mb-3 lg:mb-4 text-xs sm:text-sm">POLICIES & CERTIFICATIONS</h3>
            <ul className="space-y-1 lg:space-y-2 text-xs sm:text-sm text-gray-600">
              <li>
                <a 
                  href="/MEM330.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-gray-900 transition-colors duration-200 inline-block"
                >
                  Regulations
                </a>
              </li>
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
            <div className="flex space-x-4 lg:space-x-5 mb-5">
              {socialLinks.map(({ Icon, href }, i) => (
                <Link 
                  key={i} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-all duration-300"
                >
                  <Icon className="w-6 h-6 lg:w-7 lg:h-7" />
                </Link>
              ))}
            </div>


            <div className="mb-6">
              <button className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 hover:text-gray-900">
                <Globe className="w-4 h-4 lg:w-5 lg:h-5" />
                <span>English</span>
                <ChevronDown className="w-4 h-4 lg:w-5 lg:h-5" />
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
