"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function PopupForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    profession: "",
    phone: "",
    comments: "",
  })
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  useEffect(() => {
    const popupShown = localStorage.getItem("popupShown")
    const lastShownTime = Number.parseInt(popupShown || "0", 10)
    const now = Date.now()
    const tenMinutesInMs = 10 * 60 * 1000

    if (!popupShown || now - lastShownTime > tenMinutesInMs) {
      setIsOpen(true)
      localStorage.setItem("popupShown", now.toString())
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    try {
      const res = await fetch("/api/sendemailpopup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const data = await res.json()
      if (res.ok) {
        setMessage({ type: "success", text: data.message || "Email sent successfully!" })
        setForm({ name: "", email: "", profession: "", phone: "", comments: "" })
      } else {
        setMessage({ type: "error", text: data.message || "Failed to send email." })
      }
    } catch (err) {
      console.error(err)
      setMessage({ type: "error", text: "Failed to send email. Try again later." })
    }

    setIsSubmitting(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50 p-4">
      <div
        className="
          bg-white text-gray-900 rounded-2xl shadow-2xl max-w-md w-full mx-4 relative overflow-hidden transform
          /* Mobile-only shift: moves popup left (-x) and up (-y) on screens ≤640px */
          max-sm:-translate-x-155 max-sm:-translate-y-338
        "
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-8 text-white relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
            aria-label="Close popup"
          >
            <X size={20} />
          </button>
          <h1 className="text-2xl font-bold text-center mb-2">EMPOWER COMMODITIES</h1>
          <p className="text-center text-blue-100 text-sm font-medium">Tell us about yourself</p>
        </div>

        {/* Form */}
        <div className="px-6 py-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <input
              name="profession"
              type="text"
              placeholder="Profession"
              required
              value={form.profession}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              required
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <textarea
              name="comments"
              placeholder="Comments (Optional)"
              rows={3}
              value={form.comments}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
            />

            {message && (
              <p
                className={`text-center text-sm font-medium ${
                  message.type === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {message.text}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting...
                </span>
              ) : (
                "Submit Information"
              )}
            </button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-4 leading-relaxed">
            By submitting this form, you agree to our privacy policy. We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </div>
  )
}
