"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function AboutUsPartnersSection() {
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

  const partnerBoxes = [
    { image: "/entre.jpg", logo: "Entrepreneurs", alt: "Mobilink corporate office" },
    { image: "/students.jpg", logo: "Students", alt: "Shell oil facility" },
    { image: "/owners.jpg", logo: "Business Owners", alt: "Burj Bank financial services" },
    { image: "/housewive.jpg", logo: "House Wives", alt: "Standard Chartered bank" },
    null, // Special center box
    { image: "/corporate.jpg", logo: "Corporate Individuals", alt: "Pakistan State Oil facility" },
    { image: "/mutualfuns.jpg", logo: "Mutual Fund Investors", alt: "Simply SUFI business" },
    { image: "/trader.jpg", logo: "Stock Exchange Traders.", alt: "Continental Biscuits manufacturing" },
    { image: "/companyacc.jpg", logo: "Company Account", alt: "GulAhmed textile store" },
  ]

  return (
    <section ref={sectionRef} className="bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {partnerBoxes.map((partner, index) => {
            // Center text box
            if (index === 4) {
              return (
                <div
                  key={index}
                  className={`bg-gray-100 flex items-center justify-center h-64 lg:h-80 transition-all duration-1000 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#1a2a3a] text-center">
                    WHO CAN JOIN US
                  </h3>
                </div>
              )
            }

            // Image boxes
            return (
              <div
                key={index}
                className={`relative overflow-hidden h-64 lg:h-80 group cursor-pointer transition-all duration-1000 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Background Image */}
                <Image
                  src={partner!.image}
                  alt={partner!.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-all duration-300" />

                {/* Logo text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h4 className="text-white text-xl lg:text-2xl xl:text-3xl font-bold text-center">
                    {partner!.logo}
                  </h4>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
