"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CareerHeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden cursor-dark-area">
      {/* Background Image */}
      <Image
        src="/modern-curved-building.png"
        alt="Modern curved building"
        fill
        priority
        sizes="100vw"
        className={`object-cover transition-all duration-1000 ${
          isVisible ? "scale-100 opacity-100" : "scale-110 opacity-0"
        }`}
      />

      {/* Dark Overlay - truly transparent */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Blue accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-400" />

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center h-full">
            {/* Vertical CAREER Text */}
            <div className="hidden lg:block mr-16">
              <div
                className={`text-white text-8xl font-bold tracking-widest transition-all duration-1000 delay-300 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  transform: "rotate(180deg)",
                }}
              >
                CAREER
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 max-w-3xl">
              <div
                className={`transition-all duration-1000 delay-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                  Join The Future Of Regulated Commodities Trading
                </h1>

                <p className="text-lg sm:text-xl text-gray-200 mb-12 leading-relaxed max-w-2xl">
                  Whether You're A Licensed Broker, Agri-Market Expert, Or Finance Graduate — Empower Welcomes
                  Future-Focused Professionals Ready To Work With Integrity.
                </p>

                {/* Action Buttons */}
                <div
                  className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-full text-base transition-all duration-300 hover:scale-105 transform hover:shadow-xl">
                    VIEW OPEN POSITIONS
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
