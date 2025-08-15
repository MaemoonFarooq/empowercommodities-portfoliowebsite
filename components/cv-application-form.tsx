"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"

export function CvApplicationForm() {
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string>("")
  const [file, setFile] = useState<File | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setFileName(selectedFile.name)
      setFile(selectedFile)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    const form = e.currentTarget
    const formData = new FormData(form)
    if (file) formData.set("cv", file) // safer than append

    try {
      const res = await fetch("/api/sendemailcareers", {
        method: "POST",
        body: formData,
      })

      const data = await res.json()
      if (res.ok) {
        setMessage("Application sent successfully!")
        if (form instanceof HTMLFormElement) form.reset() // safe reset
        setFileName("")
        setFile(null)
      } else {
        setMessage(data.message || "Failed to send application.")
      }
    } catch (err) {
      console.error(err)
      setMessage("Failed to send application.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section ref={sectionRef} className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-white text-2xl lg:text-3xl font-light tracking-[0.3em] mb-2">How to Apply</h2>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name & Email */}
          <div className={`grid md:grid-cols-2 gap-6 transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div>
              <label className="block text-white text-sm font-light tracking-[0.2em] mb-3 uppercase">Name</label>
              <input
                type="text"
                name="name"
                required
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-6 py-4 bg-transparent border-2 rounded-full text-white placeholder-gray-500 focus:outline-none transition-all duration-300 ${focusedField === "name" ? "border-white" : "border-gray-600 hover:border-gray-500"}`}
              />
            </div>
            <div>
              <label className="block text-white text-sm font-light tracking-[0.2em] mb-3 uppercase">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="xyz123@gmail.com"
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-6 py-4 bg-transparent border-2 rounded-full text-white placeholder-gray-500 focus:outline-none transition-all duration-300 ${focusedField === "email" ? "border-white" : "border-gray-600 hover:border-gray-500"}`}
              />
            </div>
          </div>

          {/* Subject & Phone */}
          <div className={`grid md:grid-cols-2 gap-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div>
              <label className="block text-white text-sm font-light tracking-[0.2em] mb-3 uppercase">Subject/Reason:</label>
              <select
                name="subject"
                required
                onFocus={() => setFocusedField("subject")}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-6 py-4 bg-transparent border-2 rounded-lg text-white focus:outline-none appearance-none transition-all duration-300 ${focusedField === "subject" ? "border-white" : "border-gray-600 hover:border-gray-500"}`}
              >
                <option value="" className="bg-black text-white">SELECT</option>
                <option value="job-application" className="bg-black text-white">Job Application</option>
                <option value="internship" className="bg-black text-white">Internship</option>
                <option value="partnership" className="bg-black text-white">Partnership</option>
                <option value="consultation" className="bg-black text-white">Consultation</option>
              </select>
            </div>
            <div>
              <label className="block text-white text-sm font-light tracking-[0.2em] mb-3 uppercase">Phone Number</label>
              <div className="flex gap-3">
                <select
                  name="countryCode"
                  className="px-4 py-4 bg-transparent border-2 border-gray-600 rounded-lg text-white focus:border-white focus:outline-none appearance-none hover:border-gray-500 transition-colors duration-300"
                >
                  <option value="+1" className="bg-black text-white">+1</option>
                  <option value="+92" className="bg-black text-white">+92</option>
                  <option value="+44" className="bg-black text-white">+44</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  required
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  className={`flex-1 px-6 py-4 bg-transparent border-2 rounded-lg text-white placeholder-gray-500 focus:outline-none transition-all duration-300 ${focusedField === "phone" ? "border-white" : "border-gray-600 hover:border-gray-500"}`}
                />
              </div>
            </div>
          </div>

          {/* CV Upload */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <label className="block text-white text-sm font-light tracking-[0.2em] mb-3 uppercase">Send CV</label>
            <div className="relative">
              <input
                type="file"
                name="cv"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                onFocus={() => setFocusedField("cv")}
                onBlur={() => setFocusedField(null)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div
                className={`flex items-center justify-between px-6 py-4 bg-transparent border-2 rounded-lg text-white transition-all duration-300 cursor-pointer ${focusedField === "cv" ? "border-white" : "border-gray-600 hover:border-gray-500"}`}
              >
                <span className="text-sm font-light tracking-[0.2em] uppercase">{fileName || "SEND CV"}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-light tracking-[0.2em] uppercase">ADD</span>
                  <Upload className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <label className="block text-white text-sm font-light tracking-[0.2em] mb-3 uppercase">Message</label>
            <textarea
              rows={4}
              name="message"
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              className={`w-full px-6 py-4 bg-transparent border-2 rounded-lg text-white placeholder-gray-500 focus:outline-none resize-none transition-all duration-300 ${focusedField === "message" ? "border-white" : "border-gray-600 hover:border-gray-500"}`}
            />
          </div>

          {/* Submit */}
          <div className={`text-center pt-8 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <Button
              type="submit"
              disabled={loading}
              className="bg-white text-black font-medium px-12 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 tracking-[0.2em] uppercase text-sm hover:scale-105 transform"
            >
              {loading ? "Sending..." : "Apply Now"}
            </Button>
          </div>

          {message && <p className="mt-4 text-center text-white">{message}</p>}
        </form>
      </div>
    </section>
  )
}
