"use client"

import { useEffect, useRef, useState } from "react"

export function AboutUsCtaSection() {
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

  return (
    <section
      ref={sectionRef}
      className="bg-gray-100 py-48 lg:py-72 cursor-white-area" // taller section
    >
      <div className="max-w-full mx-auto px-8 sm:px-12 lg:px-20"> 
        <div className="text-center">
          {/* Main Heading */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#1a2a3a] leading-tight mb-10 lg:mb-14">
              IF YOU TRADE FUTURES
              <br />
              EMPOWER IS YOUR PARTNER
            </h2>
          </div>

          {/* Subheading */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-700 font-medium tracking-wide max-w-5xl mx-auto">
              READY TO TRADE LEGALLY, CONFIDENTLY, AND TRANSPARENTLY?
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
