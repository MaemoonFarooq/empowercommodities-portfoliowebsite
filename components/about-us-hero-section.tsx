"use client"
import Image from "next/image"
import type React from "react"

import { useState, useEffect, useRef } from "react"

export default function WhoWeAreSection() {
  const [isVisible, setIsVisible] = useState({
    rectangles: false,
    mobileContent: false,
    desktopHeading: false,
    desktopContent: false,
    ticker: false,
  })

  const sectionRef = useRef<HTMLDivElement>(null)
  const rectanglesRef = useRef<HTMLDivElement>(null)
  const mobileRef = useRef<HTMLDivElement>(null)
  const desktopHeadingRef = useRef<HTMLDivElement>(null)
  const desktopContentRef = useRef<HTMLDivElement>(null)
  const tickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observers: IntersectionObserver[] = []

const createObserver = (
  ref: React.RefObject<HTMLElement | null>,
  key: keyof typeof isVisible
) => {
  if (ref.current) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, [key]: true }))
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(ref.current)
    observers.push(observer)
  }
}


    createObserver(rectanglesRef, "rectangles")
    createObserver(mobileRef, "mobileContent")
    createObserver(desktopHeadingRef, "desktopHeading")
    createObserver(desktopContentRef, "desktopContent")
    createObserver(tickerRef, "ticker")

    return () => observers.forEach((observer) => observer.disconnect())
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-white h-screen relative overflow-hidden md:h-auto cursor-white-area"
      style={{
        height: "870px",
        // moves it up but no extra space below
      }}
    >
      {/* Rectangle 1 */}
      <div
        ref={rectanglesRef}
        className="absolute rounded-xl hidden md:block transition-opacity duration-1000 ease-out"
        style={{
          backgroundColor: "#D9D9D9",
          width: "223px",
          height: "237px",
          top: "64%",
          left: "54%",
          opacity: isVisible.rectangles ? 1 : 0,
        }}
      ></div>

      {/* Rectangle 2 */}
      <div
        className="absolute rounded-xl hidden md:block transition-opacity duration-1000 ease-out"
        style={{
          backgroundColor: "#D9D9D9",
          width: "337px",
          height: "455px",
          top: "39%",
          left: "67%",
          opacity: isVisible.rectangles ? 1 : 0,
          transitionDelay: "0.2s",
        }}
      ></div>

      {/* Mobile Layout */}
      <div
        ref={mobileRef}
        className="md:hidden flex flex-col items-center justify-center h-full px-4 py-8 transition-opacity duration-1000 ease-out"
        style={{ opacity: isVisible.mobileContent ? 1 : 0 }}
      >
        {/* Main heading for mobile */}
        <div className="text-center mb-8">
          <div className="text-gray-900 font-bold text-4xl sm:text-5xl leading-tight">WHO WE</div>
          <div className="flex items-center justify-center mt-2">
            <div className="text-gray-900 font-bold text-4xl sm:text-5xl leading-tight">ARE</div>
            <div className="ml-2 text-gray-900 text-lg">(1)</div>
          </div>
        </div>

        {/* Logo for mobile */}
        <div className="mb-8">
          <div className="flex items-center justify-center rounded-full overflow-hidden border-4 border-gray-900 bg-white w-32 h-32">
            <Image src="/corporate-logo_2.png" alt="Company Logo" width={80} height={80} className="object-contain" />
          </div>
        </div>

        {/* Content for mobile */}
        <div className="text-center">
          <div className="text-gray-900 font-bold text-xl sm:text-2xl mb-4">
            <div>EMPOWERING TRADERS,</div>
            <div>EARNING TRUST.</div>
          </div>
          <div className="text-gray-900 text-sm sm:text-base leading-relaxed max-w-sm">
            <div>We're a licensed PMEX brokerage on a mission to make futures</div>
            <div>trading clear, compliant, and accessible - to all traders of Pakistan.</div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Hidden on mobile */}
      <div className="hidden md:block">
        {/* Empowering Traders, Earning Trust */}
        <div
          ref={desktopContentRef}
          className="absolute text-left text-gray-900 font-bold transition-opacity duration-1000 ease-out"
          style={{
            top: "78%",
            left: "20%",
            transform: "translate(-50%, -50%)",
            opacity: isVisible.desktopContent ? 1 : 0,
          }}
        >
          <div style={{ fontSize: "2rem", lineHeight: "1.2" }}>EMPOWERING TRADERS,</div>
          <div style={{ fontSize: "2rem", lineHeight: "1.2" }}>EARNING TRUST.</div>
        </div>

        <div
          className="absolute text-left text-gray-900 transition-opacity duration-1000 ease-out"
          style={{
            top: "85%",
            left: "22.5%",
            transform: "translate(-50%, -50%)",
            opacity: isVisible.desktopContent ? 1 : 0,
            transitionDelay: "0.3s",
          }}
        >
          <div style={{ fontSize: "1rem", lineHeight: "1.2" }}>
            We're a licensed PMEX brokerage on a mission to make futures
          </div>
          <div style={{ fontSize: "1rem", lineHeight: "1.2" }}>
            trading clear, compliant, and accessible - to all traders of Pakistan.
          </div>
        </div>

        <div
          ref={desktopHeadingRef}
          className="absolute flex flex-col items-center transition-opacity duration-1000 ease-out"
          style={{
            top: "20%",
            left: "45%",
            transform: "translate(-50%, -50%)",
            opacity: isVisible.desktopHeading ? 1 : 0,
          }}
        >
          {/* First line */}
          <div
            className="text-gray-900 font-bold"
            style={{
              fontSize: "8rem",
              lineHeight: "1.2",
            }}
          >
            WHO WE
          </div>

          {/* Second line with arrow, ARE, (1), and logo circle */}
          <div className="flex items-center">
            {/* Arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              style={{
                width: "80px",
                height: "120px",
                transform: "rotate(230deg)",
                marginRight: "1rem",
              }}
            >
              <path d="M12 4v24m0 0l-6-6m6 6l6-6" />
            </svg>

            {/* ARE text */}
            <div className="flex items-center relative">
              <div
                className="text-gray-900 font-bold"
                style={{
                  fontSize: "7rem",
                  lineHeight: "1",
                }}
              >
                ARE
              </div>

              {/* (1) */}
              <div
                className="absolute text-gray-900"
                style={{
                  fontSize: "1.5rem",
                  top: "10px",
                  left: "110%",
                }}
              >
                (1)
              </div>

              {/* Circle with logo */}
              <div
                className="absolute flex items-center justify-center rounded-full overflow-hidden border-4 border-gray-900 bg-white"
                style={{
                  width: "180px",
                  height: "180px",
                  top: "-10px",
                  left: "130%",
                }}
              >
                <Image
                  src="/corporate-logo_2.png"
                  alt="Company Logo"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              {/* Circle 1 */}
              <div
                className="absolute rounded-full border-2 border-gray-900 bg-white"
                style={{
                  width: "60px",
                  height: "60px",
                  top: "495%",
                  left: "360%",
                  backgroundColor: "transparent",
                }}
              ></div>

              {/* Circle 2 */}
              <div
                className="absolute rounded-full border-2 border-gray-900 bg-white"
                style={{
                  width: "60px",
                  height: "60px",
                  top: "415%",
                  left: "-320%",
                  backgroundColor: "transparent",
                }}
              ></div>

              {/* Circle 3 */}
              <div
                className="absolute rounded-full border-2 border-gray-900 bg-white"
                style={{
                  width: "100px",
                  height: "100px",
                  top: "75%",
                  left: "-395%",
                  backgroundColor: "transparent",
                }}
              ></div>
              {/* Horizontal Line 1 */}
              <div
                style={{
                  position: "absolute",
                  top: "565%",
                  left: -980,
                  width: "960%",
                  height: "2px",
                  backgroundColor: "#000",
                }}
              />

              {/* Horizontal Line 2 */}
              <div
                style={{
                  position: "absolute",
                  top: "557%",
                  left: -980,
                  width: "960%",
                  height: "2px",
                  backgroundColor: "#000",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div
        ref={tickerRef}
        className="absolute bottom-0 w-full bg-gray-100 overflow-hidden transition-opacity duration-1000 ease-out"
        style={{
          height: "40px",
          opacity: isVisible.ticker ? 1 : 0,
        }}
      >
        <div
          className="whitespace-nowrap text-black font-bold text-sm sm:text-lg md:text-xl"
          style={{
            display: "inline-block",
            paddingLeft: "100%",
            animation: "ticker 30s linear infinite",
            lineHeight: "40px",
          }}
        >
          
PMEX-Backed Broker Rolls Out New Tools for Agri and Urban Investors . Pakistan’s Commodities Market Just Got Smarter — And Safer  &nbsp; 
PMEX-Backed Broker Rolls Out New Tools for Agri and Urban Investors . Pakistan’s Commodities Market Just Got Smarter — And Safer  &nbsp;
PMEX-Backed Broker Rolls Out New Tools for Agri and Urban Investors . Pakistan’s Commodities Market Just Got Smarter — And Safer &nbsp;
PMEX-Backed Broker Rolls Out New Tools for Agri and Urban Investors . Pakistan’s Commodities Market Just Got Smarter — And Safer &nbsp;

        </div>
      </div>
      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  )
}
