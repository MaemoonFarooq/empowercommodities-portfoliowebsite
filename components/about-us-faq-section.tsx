"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

export function AboutUsFaqSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
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

  const faqData = [
    {
      question: "IS EMPOWER COMMODITIES A LICENSED BROKER?",
      answer:
        "Yes, Empower Commodities is fully licensed under the Securities and Exchange Commission of Pakistan (SECP) and is a corporate member of Pakistan Mercantile Exchange (PMEX).",
    },
    {
      question: "WHAT CAN I TRADE THROUGH EMPOWER?",
      answer:
      "You can trade a wide range of regulated futures contracts, including gold, silver, crude oil, red chilli, wheat, rice, forex pairs, indices, and more — all via PMEX.",
    },
    {
      question: "DO YOU OFFER INVESTMENT ADVICE OR GUARANTEED RETURNS?",
      answer:
      "No. Empower Commodities does not provide investment advice or guarantee profits. We only facilitate trading through legally recognized futures contracts on PMEX."
    },
    {
      question: "HOW DO I OPEN A TRADING ACCOUNT?",
      answer:
      "Click [Open Account], upload your CNIC and basic KYC documents, and our compliance team will guide you through PMEX onboarding and margin funding."
    },
    {
      question: "WHAT ARE ELECTRONIC WAREHOUSE RECEIPTS (EWRS)?",
      answer:
      "EWRs are digital documents that allow farmers and agri-traders to use stored commodities (like wheat) as tradable, PMEX-listed assets under the Punjab EWR Financing Facility."
    },
    {
      question: "IS THERE A MINIMUM INVESTMENT REQUIREMENT?",
      answer:
      "PMEX sets margin requirements per contract, which vary by commodity. Empower does not enforce additional minimums beyond what’s required by PMEX."
    },
    {
      question: "CAN BEGINNERS TRADE THROUGH EMPOWER?",
      answer:
      "Yes. We provide educational resources, product guides, and support so that first-time traders can understand risk before placing trades."
    },

    {
      question: "WHERE ARE YOUR OFFICES LOCATED? ",
      answer:
      "We operate from four offices in Islamabad: 3rd Floor 3006 GIGA Mall/ World Trade Center DHA Phase 2, Sector F and Lahore: DHA Phase 6 (Head Office), DHA Phase 2 / Q Block, and Shadman 1. Walk-ins are welcome during business hours."
    },

    {
      question: "DO I NEED TO INSALL SOFTWARE OR APPS TO TRADE?",
      answer:
      "Trading is done via the PMEX platform. We’ll assist you in getting access once your account is verified and funded."
    },

    {
      question: "WHO DO I CONTACT FOR SUPPORT?",
      answer:
      "You can reach us via WhatsApp at +92 324 4626888  or email us at empowercommodities@gmail.com. Our support team will respond within business hours."
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={sectionRef} className="bg-[#000000] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 cursor-dark-area">
        <div className="grid lg:grid-cols-2 gap-16 items-start cursor-dark-area">
          
          {/* Left Side - FAQ Title */}
          <div
            className={`relative transition-all duration-1000 cursor-dark-area ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div
              className="
                translate-x-[5px] translate-y-[20px]        
                sm:translate-x-[10px] sm:translate-y-[40px] 
                md:translate-x-[15px] md:translate-y-[80px] 
                lg:translate-x-[25px] lg:translate-y-[150px]
                cursor-dark-area
              "
            >
              <h2 className="text-white text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                FREQUENTLY
                <br />
                ASKED
                <br />
                QUESTIONS
              </h2>
            </div>
          </div>

          {/* Right Side - FAQ Questions and Answers */}
          <div className="space-y-0 cursor-dark-area">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 cursor-dark-area${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="border-b border-gray-600 cursor-dark-area">
                  {/* Question */}
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-6 flex items-center justify-between hover:bg-gray-800/20 transition-colors duration-300 group focus:outline-none focus:bg-gray-800/20 cursor-dark-area"
                  >
                    <p className="text-white text-base lg:text-lg font-medium group-hover:text-gray-200 transition-colors duration-300 text-left pr-4 cursor-dark-area">
                      {faq.question}
                    </p>
                    <ChevronDown
                      className={`w-5 h-5 text-white transition-transform duration-300 flex-shrink-0 cursor-dark-area${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pb-6 pr-8 cursor-dark-area">
                      <div
                        className={`transform transition-all duration-500 ease-in-out ${
                          openIndex === index ? "translate-y-0" : "-translate-y-4"
                        }`}
                      >
                        <p className="text-gray-300 text-sm lg:text-base leading-relaxed cursor-dark-area">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
