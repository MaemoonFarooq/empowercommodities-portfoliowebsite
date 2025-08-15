"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function AboutUsHeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Top Right Text */}
      <div
        className={`absolute top-8 right-8 z-20 text-right transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <h2 className="text-lg lg:text-xl font-bold text-gray-900 leading-tight tracking-wide">
          MARKETS YOU CAN TRUST.
          <br />
          PRODUCTS THAT PERFORM.
        </h2>
      </div>

      {/* Main Building Image */}
      <div className="relative w-full h-screen">
        {/* Image — wrapper now takes full height */}
        <Image
          src="/modern-curved-building.png"
          alt="Modern curved building architecture"
          fill
          priority
          sizes="100vw"
          className={`object-cover object-center transition-all duration-1500 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 pointer-events-none" />

        {/* Curved Text Overlay */}
        <div className="absolute inset-0 flex justify-center z-20">
          <div
            // 👇 Adjust mt-[value] to move text DOWN, use negative mt-[value] to move UP
            // 👇 Use ml-[value] or mr-[value] to move LEFT or RIGHT
                className={`relative -mt-57  transition-all duration-2000 delay-500 ${
              isVisible ? "opacity-100 rotate-24" : "opacity-0 rotate-12"
            }`}
          >
            <svg width="700" height="500" viewBox="0 0 700 500" className="w-full h-full max-w-3xl">
              <defs>
                {/* Moved start further left (M 40 instead of 80) so "W" isn't cut off */}
                <path id="curve" d="M 40 250 Q 350 100 660 250" fill="none" stroke="none" />
              </defs>
              <text fontSize="36" fontWeight="900" fill="#1f2937" letterSpacing="3px" className="font-bold">
                {/* Slightly shifted startOffset for better centering */}
                <textPath href="#curve" startOffset="50%" textAnchor="middle">
                  WHY EMPOWER COMMODITIES?
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        {/* Bottom Right Circle */}
        <div
          className={`absolute bottom-8 right-8 w-20 h-20 bg-red-500 rounded-full shadow-lg flex items-center justify-center transition-all duration-1000 delay-1000 z-20 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        >
          <span className="text-white text-xs font-bold tracking-wider">D&M*911</span>
        </div>
      </div>
    </section>
  )
}
