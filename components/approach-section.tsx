"use client"

import { Card } from "@/components/ui/card"
import { Outfit } from "next/font/google"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600", "700", "900"] })

export default function ApproachSection() {
  // Refs for in-view animation
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" })

  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div ref={sectionRef} className="min-h-screen bg-white p-4 md:p-8 relative overflow-hidden cursor-white-area">
      <div className="max-w-7xl mx-auto relative">
        {/* Vertical "OUR APPROACH" text */}
        <motion.div
          className="hidden md:flex absolute -left-20 md:-left-32 lg:-left-48 top-48 h-96 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="transform -rotate-90 origin-center">
            <h1 className={`${outfit.className} text-4xl md:text-5xl lg:text-6xl tracking-wider whitespace-nowrap`}>
              OUR APPROACH
            </h1>
          </div>
        </motion.div>

        {/* Main content area */}
        <div className="md:ml-20 lg:ml-12 relative">
          {/* Header section */}
          <motion.div
            className="text-center mb-8 md:mb-12 mt-8 md:mt-[70px] pt-4 md:pt-8 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-2 md:mb-3 tracking-tight relative md:top-10">
              WHAT MAKES US DIFFERENT?
            </h2>
            <p className="text-gray-500 tracking-[0.4em] md:tracking-[0.7em] text-sm md:text-base lg:text-lg font-medium relative md:top-7">
              BUILT ON CLARITY, NOT PROMISES.
            </p>
          </motion.div>

          {/* Main layout grid */}
          <div className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
            {/* Large central gray rectangle */}
            <motion.div
              className="hidden md:block absolute left-1/2 -top-20 md:-top-40 transform -translate-x-1/2 w-40 md:w-60 lg:w-80 h-[300px] md:h-[400px] lg:h-[800px] bg-gray-300 rounded-2xl z-0"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            ></motion.div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 relative z-10 mt-8 md:mt-0">
              {/* Left card */}
              <motion.div
                className="md:absolute md:left-0 lg:left-10 xl:left-40 md:top-28"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card
                  className={`p-4 md:p-6 rounded-2xl border-0 shadow-none w-full md:w-48 lg:w-56 transition-all duration-300 cursor-pointer ${
                    hoveredCard === 1 ? "bg-white text-black shadow-lg scale-105" : "bg-slate-200"
                  }`}
                  onMouseEnter={() => setHoveredCard(1)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <h3 className="font-bold mb-2 md:mb-3 text-xs md:text-sm tracking-wide text-black">
                    REGULATED ACCESS
                  </h3>
                  <p className="text-xs leading-relaxed font-medium text-gray-700">
                    ONLY PMEX FUTURES.
                    <br />
                    FULLY SECP-BACKED.
                  </p>
                </Card>
              </motion.div>

              {/* Right card */}
              <motion.div
                className="md:absolute md:right-0 lg:right-10 xl:right-35 md:top-9"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card
                  className={`p-4 md:p-6 rounded-2xl border-0 shadow-none w-full md:w-48 lg:w-56 transition-all duration-300 cursor-pointer ${
                    hoveredCard === 2 ? "bg-white text-black shadow-lg scale-105" : "bg-slate-200"
                  }`}
                  onMouseEnter={() => setHoveredCard(2)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <h3 className="font-bold mb-2 md:mb-3 text-xs md:text-sm tracking-wide text-black">
                    REAL-TIME DATA
                    <br />
                    WITH MT5
                  </h3>
                  <p className="text-xs leading-relaxed font-medium text-gray-700">
                    TRADE WITH IN-BUILT
                    <br />
                    INDICATORS AND TOOLS,
                    <br />
                    MULTI-TIMEFRAMES AND
                    <br />
                    MARKET DEPTH
                  </p>
                </Card>
              </motion.div>

              {/* Bottom center card */}
              <motion.div
                className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:top-[400px] lg:top-[450px] xl:top-[500px] lg:-translate-x-[-30%] lg:-translate-y-[180px]"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card
                  className={`p-4 md:p-6 rounded-2xl border-0 shadow-none w-full md:w-48 lg:w-54 transition-all duration-300 cursor-pointer ${
                    hoveredCard === 3 ? "bg-white text-black shadow-lg scale-105" : "bg-slate-200"
                  }`}
                  onMouseEnter={() => setHoveredCard(3)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <h3 className="font-bold mb-2 md:mb-3 text-xs md:text-sm tracking-wide text-black">
                    EDUCATION BEFORE
                    <br />
                    EXECUTION
                  </h3>
                  <p className="text-xs leading-relaxed font-medium text-gray-700">
                    WE PRIORITIZE
                    <br />
                    UNDERSTANDING RISK
                    <br />
                    BEFORE ACTION
                    <br />
                    ESPECIALLY FOR NEW
                    <br />
                    INVESTORS.
                  </p>
                </Card>
              </motion.div>
            </div>

            {/* Decorative squares */}
            <motion.img
              src="/approachlogo.png"
              alt="Decorative element"
              className="hidden md:block absolute right-4 lg:right-8 bottom-8 w-8 h-8 lg:w-28 lg:h-28 opacity-60 bottom-66 left-250"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
            />
            <motion.img
              src="/approachlogo.png"
              alt="Decorative element"
              className="hidden md:block absolute right-4 lg:right-8 bottom-8 w-8 h-8 lg:w-28 lg:h-28 opacity-60 bottom-206 -left-0"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            />
          </div>

          {/* Bottom section */}
          <motion.div
            className="mt-8 md:mt-[300px] lg:mt-[400px] xl:mt-[00px] pt-8 md:pt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <h3 className="relative mb-2 md:mb-3 tracking-[0.1em] md:tracking-[0.15em] font-semibold text-gray-600 text-xl md:text-2xl lg:text-3xl md:-left-5 lg:-left-8 xl:-left-30">
              TRANSPARENT EXECUTION
            </h3>
            <p className="relative text-gray-600 tracking-wide text-lg md:text-xl lg:text-2xl md:-left-3 lg:-left-5 xl:-left-25">
              WE DON'T PROMISE RETURNS. WE DELIVER ACCESS, SUPPORT, AND DISCLOSURE.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
