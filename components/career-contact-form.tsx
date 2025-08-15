"use client"

import { useEffect, useRef, useState } from "react"

export function ContactForm() {
  const [isVisible, setIsVisible] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
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
    <section ref={sectionRef} className="py-8 sm:py-12 lg:py-16 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 lg:mb-12 tracking-widest transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          GET IN TOUCH
        </h2>

        <form
          className={`space-y-4 lg:space-y-6 transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Name and Email Row */}
          <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
            <div className="group">
              <label className="block text-white text-xs sm:text-sm font-medium mb-2 lg:mb-3 tracking-widest transition-colors duration-300 group-hover:text-yellow-400">
                NAME
              </label>
              <input
                type="text"
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-3 lg:px-4 py-3 lg:py-4 bg-transparent border rounded-full text-white placeholder-gray-400 focus:border-white focus:outline-none transition-all duration-300 transform text-sm lg:text-base ${
                  focusedField === "name"
                    ? "scale-105 border-yellow-400 shadow-lg shadow-yellow-400/20"
                    : "border-gray-500 hover:border-gray-400"
                }`}
              />
            </div>
            <div className="group">
              <label className="block text-white text-xs sm:text-sm font-medium mb-2 lg:mb-3 tracking-widest transition-colors duration-300 group-hover:text-yellow-400">
                EMAIL
              </label>
              <input
                type="email"
                placeholder="xyz123@gmail.com"
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-3 lg:px-4 py-3 lg:py-4 bg-transparent border rounded-full text-white placeholder-gray-400 focus:border-white focus:outline-none transition-all duration-300 transform text-sm lg:text-base ${
                  focusedField === "email"
                    ? "scale-105 border-yellow-400 shadow-lg shadow-yellow-400/20"
                    : "border-gray-500 hover:border-gray-400"
                }`}
              />
            </div>
          </div>

          {/* Subject and Phone Row */}
          <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
            <div className="group">
              <label className="block text-white text-xs sm:text-sm font-medium mb-2 lg:mb-3 tracking-widest transition-colors duration-300 group-hover:text-yellow-400">
                SUBJECT/REASON:
              </label>
              <select
                onFocus={() => setFocusedField("subject")}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-3 lg:px-4 py-3 lg:py-4 bg-transparent border rounded-lg text-white focus:border-white focus:outline-none appearance-none transition-all duration-300 transform text-sm lg:text-base ${
                  focusedField === "subject"
                    ? "scale-105 border-yellow-400 shadow-lg shadow-yellow-400/20"
                    : "border-gray-500 hover:border-gray-400"
                }`}
              >
                <option value="" className="bg-black">
                  SELECT
                </option>
                <option value="consultation" className="bg-black">
                  Consultation
                </option>
                <option value="services" className="bg-black">
                  Services Inquiry
                </option>
                <option value="partnership" className="bg-black">
                  Partnership
                </option>
              </select>
            </div>
            <div className="group">
              <label className="block text-white text-xs sm:text-sm font-medium mb-2 lg:mb-3 tracking-widest transition-colors duration-300 group-hover:text-yellow-400">
                PHONE NUMBER
              </label>
              <div className="flex gap-2">
                <select className="px-2 lg:px-3 py-3 lg:py-4 bg-transparent border border-gray-500 rounded-lg text-white focus:border-white focus:outline-none appearance-none hover:border-gray-400 transition-colors duration-300 text-sm lg:text-base">
                  <option value="+1" className="bg-black">
                    +1
                  </option>
                  <option value="+92" className="bg-black">
                    +92
                  </option>
                  <option value="+44" className="bg-black">
                    +44
                  </option>
                </select>
                <input
                  type="tel"
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  className={`flex-1 px-3 lg:px-4 py-3 lg:py-4 bg-transparent border rounded-lg text-white placeholder-gray-400 focus:border-white focus:outline-none transition-all duration-300 transform text-sm lg:text-base ${
                    focusedField === "phone"
                      ? "scale-105 border-yellow-400 shadow-lg shadow-yellow-400/20"
                      : "border-gray-500 hover:border-gray-400"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Project Name and Contact Time Row */}
          <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <input
                type="text"
                placeholder="PROJECT NAME"
                onFocus={() => setFocusedField("project")}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-3 lg:px-4 py-3 lg:py-4 bg-transparent border rounded-lg text-white placeholder-gray-300 focus:border-white focus:outline-none tracking-widest transition-all duration-300 transform text-sm lg:text-base ${
                  focusedField === "project"
                    ? "scale-105 border-yellow-400 shadow-lg shadow-yellow-400/20"
                    : "border-gray-500 hover:border-gray-400"
                }`}
              />
            </div>
            <div>
              <input
                type="time"
                defaultValue="13:00"
                onFocus={() => setFocusedField("time")}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-3 lg:px-4 py-3 lg:py-4 bg-transparent border rounded-lg text-white placeholder-gray-300 focus:border-white focus:outline-none tracking-widest transition-all duration-300 transform text-sm lg:text-base ${
                  focusedField === "time"
                    ? "scale-105 border-yellow-400 shadow-lg shadow-yellow-400/20"
                    : "border-gray-500 hover:border-gray-400"
                }`}
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <textarea
              rows={4}
              placeholder="MESSAGE"
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              className={`w-full px-3 lg:px-4 py-3 lg:py-4 bg-transparent border rounded-lg text-white placeholder-gray-300 focus:border-white focus:outline-none tracking-widest resize-none transition-all duration-300 transform text-sm lg:text-base ${
                focusedField === "message"
                  ? "scale-105 border-yellow-400 shadow-lg shadow-yellow-400/20"
                  : "border-gray-500 hover:border-gray-400"
              }`}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-4 lg:pt-6">
            <button
              type="submit"
              className="bg-white text-black font-bold px-8 lg:px-12 py-3 lg:py-4 rounded-full hover:bg-gray-100 transition-all duration-300 tracking-widest transform hover:scale-105 hover:shadow-xl hover:shadow-white/20 active:scale-95 text-sm lg:text-base"
            >
              BOOK NOW
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}