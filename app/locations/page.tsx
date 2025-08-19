"use client"

import { useState } from "react"
import { Header } from "../../components/header"
import { HeroSection } from "../../components/hero-section"
import { LocationSection } from "../../components/location-section"
import { ContactForm } from "../../components/contact-form"
import { Footer } from "../../components/footer"

function LocationTabs() {
  const [activeTab, setActiveTab] = useState("lahore")

  const lahoreData = {
    title: "BRANCH OFFICES",
    subtitle: "VISIT US IN LAHORE — ACROSS KEY BUSINESS AND TRADE DISTRICTS.",
    offices: [
      {
        name: "DHA",
        building: "BUILDING #439 FIRST FLOOR",
        address: "DHA PHASE 2/Q BLOCK LHR",
      },
      {
        name: "SHADMAN",
        building: "BUILDING NUMBER 78,",
        address: "SHADMAN 1, LAHORE GROUND FLOOR",
      },
    ],
  }

  const islamabadData = {
    title: "BRANCH OFFICES",
    subtitle: "VISIT US IN ISLAMABAD — ACROSS KEY BUSINESS AND TRADE DISTRICTS.",
    offices: [
      {
        name: "Office #3006,",
        building: "3rd Floor,#3006 GIGA Mall/ World Trade Center ",
        address: "DHA Phase 2, Sector F ",
      },
    ],
  }

  const currentData = activeTab === "lahore" ? lahoreData : islamabadData

  return (
    <div>
      {/* Tabs */}
      <div className="flex mb-8">
        <button
          onClick={() => setActiveTab("lahore")}
          className={`font-bold px-8 py-3 rounded-l-full text-sm transition-colors ${
            activeTab === "lahore" ? "bg-yellow-400 text-black" : "bg-yellow-200 text-gray-600"
          }`}
        >
          LAHORE
        </button>
        <button
          onClick={() => setActiveTab("islamabad")}
          className={`font-bold px-8 py-3 rounded-r-full text-sm transition-colors ${
            activeTab === "islamabad" ? "bg-yellow-400 text-black" : "bg-yellow-200 text-gray-600"
          }`}
        >
          ISLAMABAD
        </button>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">{currentData.title}</h2>
        <p className="text-gray-700 text-lg mb-8">{currentData.subtitle}</p>

        {/* Office Locations */}
        <div className="space-y-8">
          {currentData.offices.map((office, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold text-blue-900 mb-2">{office.name}</h3>
              <p className="text-gray-700 font-semibold">{office.building}</p>
              <p className="text-gray-600">{office.address}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Head Office */}
      <div>
        <h2 className="text-3xl font-bold text-blue-900 mb-4">HEAD OFFICE</h2>
        <p className="text-gray-700 text-lg mb-6">
          MAIN CORPORATE HUB FOR CLIENT ONBOARDING, COMPLIANCE,
          <br />
          AND OPERATIONS.
        </p>

        <div>
          <p className="text-gray-700 font-semibold">274MB, FIRST FLOOR,</p>
          <p className="text-gray-600">DHA PHASE 6, LAHORE +92-3244626888</p>
        </div>
      </div>
    </div>
  )
}

export default function CorporateWebsite() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <LocationSection />
      <ContactForm />
      <Footer />
    </div>
  )
}
