"use client"

import { useEffect, useRef, useState } from "react"

export function ContactForm() {
  const [isVisible, setIsVisible] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    project: "",
    time: "13:00",
    message: "",
    countryCode: "+1",
  })
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

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Handle country code change separately
  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form, countryCode: e.target.value })
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatusMessage(null)

    const fullForm = { ...form, phone: `${form.countryCode}${form.phone}` }

    try {
      const res = await fetch("/api/sendemaillocations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fullForm),
      })

      const data = await res.json()

      if (res.ok) {
        setStatusMessage({ type: "success", text: data.message || "Email sent successfully!" })
        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          project: "",
          time: "13:00",
          message: "",
          countryCode: "+1",
        })
      } else {
        setStatusMessage({ type: "error", text: data.message || "Failed to send email." })
      }
    } catch (err) {
      console.error(err)
      setStatusMessage({ type: "error", text: "Failed to send email. Please try again." })
    }

    setIsSubmitting(false)
    setTimeout(() => setStatusMessage(null), 5000)
  }

  return (
    <section ref={sectionRef} className="cursor-dark-area py-8 sm:py-12 lg:py-16 bg-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 lg:mb-12 tracking-widest transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          GET IN TOUCH
        </h2>

        <form
          onSubmit={handleSubmit}
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
                name="name"
                value={form.name}
                onChange={handleChange}
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
                name="email"
                placeholder="xyz123@gmail.com"
                value={form.email}
                onChange={handleChange}
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
                name="subject"
                value={form.subject}
                onChange={handleChange}
                onFocus={() => setFocusedField("subject")}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-3 lg:px-4 py-3 lg:py-4 bg-transparent border rounded-lg text-white focus:border-white focus:outline-none appearance-none transition-all duration-300 transform text-sm lg:text-base ${
                  focusedField === "subject"
                    ? "scale-105 border-yellow-400 shadow-lg shadow-yellow-400/20"
                    : "border-gray-500 hover:border-gray-400"
                }`}
              >
                <option value="" className="bg-slate-800">
                  SELECT
                </option>
                <option value="consultation" className="bg-slate-800">
                  Consultation
                </option>
                <option value="services" className="bg-slate-800">
                  Services Inquiry
                </option>
                <option value="partnership" className="bg-slate-800">
                  Partnership
                </option>
              </select>
            </div>
            <div className="group">
              <label className="block text-white text-xs sm:text-sm font-medium mb-2 lg:mb-3 tracking-widest transition-colors duration-300 group-hover:text-yellow-400">
                PHONE NUMBER
              </label>
              <div className="flex gap-2">
                <select
                  value={form.countryCode}
                  onChange={handleCountryCodeChange}
                  className="px-2 lg:px-3 py-3 lg:py-4 bg-transparent border border-gray-500 rounded-lg text-white focus:border-white focus:outline-none appearance-none hover:border-gray-400 transition-colors duration-300 text-sm lg:text-base"
                >
                  <option value="+1" className="bg-slate-800">
                    +1
                  </option>
                  <option value="+92" className="bg-slate-800">
                    +92
                  </option>
                  <option value="+44" className="bg-slate-800">
                    +44
                  </option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
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

          {/* Project and Time Row */}
          <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <input
                type="text"
                name="project"
                value={form.project}
                onChange={handleChange}
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
                name="time"
                value={form.time}
                onChange={handleChange}
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
              name="message"
              value={form.message}
              onChange={handleChange}
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

          {/* Status Message */}
          {statusMessage && (
            <p
              className={`text-center text-sm font-medium transition-opacity duration-500 ${
                statusMessage.type === "success" ? "text-green-500" : "text-red-500"
              }`}
            >
              {statusMessage.text}
            </p>
          )}

          {/* Submit Button */}
          <div className="text-center pt-4 lg:pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-black font-bold px-8 lg:px-12 py-3 lg:py-4 rounded-full hover:bg-gray-100 transition-all duration-300 tracking-widest transform hover:scale-105 hover:shadow-xl hover:shadow-white/20 active:scale-95 text-sm lg:text-base"
            >
              {isSubmitting ? "SENDING..." : "BOOK NOW"}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
