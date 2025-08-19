"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function AboutUsStatsAndFeatures() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }, // Trigger when 10% of the section is visible
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { label: "TRUSTED BY OVER", value: "1000+", subLabel: "CLIENTS" },
    { label: "HISTORY OF OVER", value: "8+", subLabel: "YEARS" },
    { label: "CLIENTS IN", value: "8+", subLabel: "COUNTRIES" },
    { label: "LOCAL CLIENTS IN", value: "10+", subLabel: "CITIES" },
  ]

  const features = [
    "LICENSED & REGULATED",
    "22/5 INTERNATIONAL MARKET EXPOSURE",
    "EDUCATION BEFORE EXECUTION",
    "BEGINNER FRIENDLY ONBOARDING",
  ]

  return (
    <section ref={sectionRef} className="bg-white cursor-white-area">
      {/* Top Section: Statistics */}
      <div className="bg-[#1a2a3a] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"> 
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group flex flex-col items-center transition-all duration-500 ease-out p-4 rounded-lg cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } hover:bg-[#2a3b4c] hover:scale-105 hover:shadow-xl`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <p className="text-gray-300 text-xs sm:text-sm font-medium uppercase mb-2">{stat.label}</p>
                <h3 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-1">{stat.value}</h3>
                <p className="text-gray-300 text-sm sm:text-base uppercase">{stat.subLabel}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section: Image and Features */}
      <div className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Circular Image */}
            <div
              className={`flex justify-center transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <Image
                  src="/abstract-circular-pattern.jpg"
                  alt="Abstract circular pattern"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column: Logo and Features */}
            <div
              className={`transition-all duration-1000 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div
                className="mb-8"
                // ⬅ Adjust translate-x-* here to move the logo left/right:
                //     Positive (e.g. translate-x-6) moves right
                //     Negative (e.g. -translate-x-6) moves left
              >
                <Image
                  src="/corporate-logo.png"
                  alt="Company logo"
                  width={240}
                  height={240}
                  className="mb-4 transition-transform duration-300 hover:scale-110 translate-x-45"
                />
              </div>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className={`text-gray-700 text-lg sm:text-xl font-semibold tracking-wide transition-all duration-300 ease-out cursor-pointer
                      ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
                      hover:translate-x-2 hover:text-cyan-500
                    `}
                    style={{ transitionDelay: `${800 + index * 100}ms` }}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
