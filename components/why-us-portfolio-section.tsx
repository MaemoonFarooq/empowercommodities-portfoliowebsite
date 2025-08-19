"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

export function AboutUsPortfolioSection() {
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
    <section ref={sectionRef} className="bg-black py-16 lg:py-24 cursor-dark-area">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 relative">
            <span className="metallic-text">
              Diversify Your Portfolio
              <br />
              Across Global And Local
              <br />
              Commodities.
            </span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* International Column */}
          <div
            className={`text-center transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-sm font-bold text-gray-400 tracking-widest mb-4 uppercase">International</h3>
            <p className="text-lg lg:text-xl text-white font-medium">Gold, Oil, FX, Indices</p>
          </div>

          {/* Local Column */}
          <div
            className={`text-center transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-sm font-bold text-gray-400 tracking-widest mb-4 uppercase">Agriculture</h3>
            <p className="text-lg lg:text-xl text-white font-medium">Wheat, Soya Bean, Corn and Cotton</p>
          </div>
        </div>

        {/* Call to Action Button */}
        <div
          className={`text-center transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-8 py-4 rounded-lg text-base transition-all duration-300 hover:scale-105 transform hover:shadow-xl">
            See Full Product List
          </Button>
        </div>
      </div>
    </section>
  )
}
