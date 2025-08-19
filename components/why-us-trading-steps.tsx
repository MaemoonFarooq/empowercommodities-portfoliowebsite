"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

export function AboutUsTradingSteps() {
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

  const steps = [
    { number: "01", description: "CREATE YOUR ACCOUNT" },
    { number: "02", description: "LEARN THE MARKET" },
    { number: "03", description: "LEARN WITH GUIDES" },
    { number: "04", description: "TRADE WITH CONFIDENCE" },
  ]

  return (
    <section ref={sectionRef} className="bg-[#1a2a3a] py-16 lg:py-24 cursor-dark-area">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <div
          className={`mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-gray-300 text-lg sm:text-xl font-medium uppercase mb-2 tracking-widest">
            START TRADING IN
          </p>
          <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-cyan-400">4 SIMPLE STEPS</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group relative bg-[#2a3b4c] p-8 rounded-lg shadow-lg flex flex-col items-center justify-center h-64 overflow-hidden
                transition-all duration-700 ease-out
                ${isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-10"}
                hover:shadow-2xl hover:-translate-y-2
              `}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Animated Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-cyan-400 transition-all duration-300 ease-out"></div>

              <p className="text-cyan-400 text-sm font-medium uppercase mb-2 transition-colors duration-300 group-hover:text-white">
                STEP
              </p>
              <h3 className="text-gray-400 text-7xl font-extrabold mb-4 transition-colors duration-300 group-hover:text-cyan-400">
                {step.number}
              </h3>
              <p className="text-white text-lg font-semibold uppercase text-center transition-colors duration-300 group-hover:text-gray-100">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div
          className={`transition-all duration-1000 delay-[1000ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-10 py-5 rounded-full text-base transition-all duration-300 hover:scale-105 transform hover:shadow-xl">
            OPEN YOUR ACCOUNT
          </Button>
        </div>
      </div>
    </section>
  )
}
