"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] bg-gray-900 overflow-hidden">
      {/* Image */}
<Image
  src="/building.jpg"
  alt="Modern office building at night"
  fill
  priority
  quality={100}
  sizes="100vw"
  style={{ objectFit: "cover" }}
  className={`transition-all duration-1000 opacity-80 hover:scale-105 ${
    isVisible ? "scale-100 opacity-100" : "scale-110 opacity-0"
  }`}
/>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />
    </section>
  )
}
