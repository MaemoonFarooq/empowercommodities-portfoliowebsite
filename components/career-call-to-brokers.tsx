"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'
import Image from "next/image"

export function CareerCallToBrokers() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section ref={sectionRef} className="relative">
      {/* Call To Brokers Section */}
      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Call To Brokers
            </h2>

            <div className="max-w-4xl mb-12">
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                Start Your Journey As A PMEX-Licensed Trader. Empower Makes It Easy To Get Verified, Educated, And Trading In A Regulated Environment.
              </p>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mt-4">
                No Shortcuts. Just Secure, SECP-Compliant Access.
              </p>
            </div>

            {/* Action Cards */}
            <div className="flex flex-col sm:flex-row gap-6 max-w-2xl">
              {/* Card 1 */}
              <div
                className={`flex-1 transition-all duration-1000 delay-300 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-cyan-400 rounded-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-slate-800 rounded-3xl p-8 h-64 flex flex-col justify-center items-center text-center hover:bg-slate-700 transition-all duration-300 cursor-pointer">
                    <Image
                      src="/beapartner.jpg"
                      alt="Broker icon"
                      width={300}
                      height={300}
                      className="opacity-70 mb-4 transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="text-white text-lg font-bold">
                      Be A Partner Today.
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div
                className={`flex-1 transition-all duration-1000 delay-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
              >
<a
  href="https://www.aof.com.pk/login.php"
  target="_blank" // remove this if you want to open in same tab
  rel="noopener noreferrer"
>
  <div className="bg-slate-800 rounded-3xl p-8 h-64 flex flex-col justify-center items-center text-center hover:bg-slate-700 transition-all duration-300 cursor-pointer group">
    <Image
      src="/openyouraccount.jpg"
      alt="Account icon"
      width={300}
      height={300}
      className="opacity-70 mb-4 transition-all duration-500 group-hover:scale-110"
    />
    <div className="text-white text-lg font-bold">
      Open Your Account.
    </div>
  </div>
</a>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Transition Section */}
      <div className="h-32 bg-gradient-to-b from-white via-gray-300 to-slate-800"></div>

      {/* Who We Hire Section */}
      <div className="bg-slate-800 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                Who We Hire
              </h2>
              <h3 className="text-3xl lg:text-4xl font-bold text-white">
                Who Thrives At Empower?
              </h3>
            </div>

            {/* Hiring Criteria */}
            <div className="space-y-6 mb-12">
              {[
                "Individuals Passionate About Ethical Finance",
                "Brokers And Agents Who Want Legal Market Access", 
                "Professionals From Agriculture, Banking, Or Fintech",
                "Students And Graduates With Strong Research Skills"
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-4 transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <p className="text-lg lg:text-xl text-white font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Text */}
            <div
              className={`transition-all duration-1000 delay-1200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-lg lg:text-xl text-gray-200 leading-relaxed max-w-4xl">
                Want To Work Behind The Scenes? Join Our Compliance, Education, Or Client Onboarding Teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
