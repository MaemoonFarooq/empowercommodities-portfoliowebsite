"use client"

import { useEffect, useRef, useState } from "react"

export default function Component() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [scrollDistance, setScrollDistance] = useState(0)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Testimonials data (unchanged)
  const testimonials = [
    {
      text: "Helpful and guided me well to navigate through the markets.",
      from: "M. Huzaifa",
      bgColor: "bg-[#1a2a3a]",
    },
    {
      text: "Empower helped me to find the legal platform to trade that I have been looking for weeks.",
      from: "Atif",
      bgColor: "bg-[#1a2a3a]",
    },
    {
      text: "As a beginner to this market, the one-on-one sessions allowed me to use MetaTrader without making any mistakes and also provided me technical knowledge.",
      from: "Zaryab Khan",
      bgColor: "bg-[#1a2a3a]",
    },
    {
      text: "Apart from freelancing, I was looking for a source which must be authorized and then I found PMEX through Empower Commodities. Qualified staff and fundamental knowledge helped me understand the basics of the commodities market.",
      from: "Faiza Ali",
      bgColor: "bg-[#1a2a3a]",
    },  
  ]

  // Duplicate array for infinite scroll
  const loopedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ]

  // ====================
  const cardWidth = isMobile ? 280 : 600 // width in px
  const cardPadding = isMobile ? 20 : 30
  const circleSize = isMobile ? 48 : 64
  // ====================

  // Calculate scroll distance after mount and when dependencies change
  useEffect(() => {
    function calculateScrollDistance() {
      if (containerRef.current && wrapperRef.current) {
        const containerWidth = containerRef.current.scrollWidth
        const wrapperWidth = wrapperRef.current.offsetWidth
        const distance = containerWidth - wrapperWidth
        setScrollDistance(distance > 0 ? distance : 0)
      }
    }

    calculateScrollDistance()
    window.addEventListener("resize", calculateScrollDistance)
    return () => window.removeEventListener("resize", calculateScrollDistance)
  }, [loopedTestimonials.length, isMobile])

  return (
    <section ref={sectionRef} className="bg-white py-8 sm:py-12 lg:py-24 relative overflow-hidden font-inter cursor-white-area">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start lg:space-x-12">
        {/* Mobile/Tablet Horizontal Title */}
        <div
          className={`flex lg:hidden w-full justify-center mb-6 sm:mb-8 transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest text-center">
            CLIENT <span className="block mt-1">TESTIMONIALS</span>
          </h1>
        </div>

        {/* Desktop Vertical Title */}
        <div
          className={`hidden lg:flex flex-col items-end flex-shrink-0 mr-8 transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transform: "rotate(180deg) translateX(310px)",
            lineHeight: "1",
          }}
        >
          <span
            className="text-black text-4xl xl:text-5xl font-bold tracking-widest relative"
            style={{
              top: "-270px",
            }}
          >
            CLIENT
          </span>
          <span className="text-black text-4xl xl:text-5xl font-bold tracking-widest">TESTIMONIALS</span>
        </div>

        {/* Wrapper to control horizontal offset */}
        <div
          ref={wrapperRef}
          style={{
            transform: isMobile ? "translateX(-20px)" : "translateX(-100px)",
          }}
          className="flex-1 overflow-hidden"
        >
          <div
            ref={containerRef}
            className="flex gap-4 sm:gap-6 lg:gap-8"
            style={{
              width: `${loopedTestimonials.length * (cardWidth + (isMobile ? 16 : 30))}px`,
              animation:
                isVisible && scrollDistance > 0 ? `scroll-x ${isMobile ? "120s" : "150s"} linear infinite` : "none",
            }}
          >
            {loopedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`flex-shrink-0 rounded-lg shadow-lg flex flex-col items-center text-center
                  transition-all duration-700 ease-out
                  ${testimonial.bgColor}
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                  hover:shadow-2xl hover:-translate-y-2
                `}
                style={{
                  width: `${cardWidth}px`,
                  padding: `${cardPadding}px`,
                  transitionDelay: `${200 + (index % testimonials.length) * 150}ms`,
                  minHeight: isMobile ? "320px" : "auto",
                }}
              >
                <div
                  className="relative bg-black rounded-full flex items-center justify-center p-3 sm:p-4 overflow-hidden mb-4 sm:mb-6"
                  style={{
                    width: `${circleSize * (isMobile ? 3.2 : 4)}px`,
                    height: `${circleSize * (isMobile ? 3.2 : 4)}px`,
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                >
                  <p
                    className="text-white leading-tight text-center line-clamp-6 break-words"
                    style={{
                      fontSize: isMobile ? `${circleSize / 6}px` : `${circleSize / 4}px`,
                      padding: "0 8px",
                    }}
                  >
                    {testimonial.text}
                  </p>
                </div>
                <p className="text-white text-base sm:text-lg lg:text-xl font-bold">{testimonial.from}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic scrolling animation */}
      <style jsx>{`
        @keyframes scroll-x {
          0% {
            transform: translateX(-${scrollDistance}px);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-x {
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </section>
  )
}
