"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { LocationTabs } from "./location-tabs"

export function LocationSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleScrollDown = () => {
    const isMobile = window.innerWidth < 768 // Tailwind's 'md' breakpoint
    const scrollAmount = isMobile ? 1010 : 850 // pixels to scroll
    window.scrollBy({
      top: scrollAmount,
      left: 0,
      behavior: "smooth"
    })
  }

  return (
    <section
      ref={sectionRef}
      className="py-8 sm:py-12 lg:py-16 bg-white cursor-white-area"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-900 mb-8 lg:mb-12 leading-tight hover:text-blue-800 transition-colors duration-300">
              <span className="inline-block hover:scale-105 transition-transform duration-300">
                OUR
              </span>
              <br />
              <span className="inline-block hover:scale-105 transition-transform duration-300 animation-delay-100">
                LOCATION
              </span>
            </h1>
            <Button
              onClick={handleScrollDown}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 lg:px-8 py-2 lg:py-3 rounded-full text-sm transition-all duration-300 hover:scale-105 transform hover:shadow-lg animate-bounce-subtle"
            >
              CONTACT US
            </Button>
          </div>

          {/* Right Column */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <LocationTabs />
          </div>
        </div>
      </div>
    </section>
  )
}
