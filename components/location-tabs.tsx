"use client"

import { useState } from "react"

interface Office {
  name: string
  building: string
  address: string
}

interface LocationData {
  title: string
  subtitle: string
  offices: Office[]
}

export function LocationTabs() {
  const [activeTab, setActiveTab] = useState("lahore")
  const [isAnimating, setIsAnimating] = useState(false)

  const lahoreData: LocationData = {
    title: "BRANCH OFFICES",
    subtitle: "VISIT US IN LAHORE — ACROSS KEY BUSINESS AND TRADE DISTRICTS.",
    offices: [
      {
        name: "DHA",
        building: "BUILDING #439 FIRST FLOOR",
        address: "DHA PHASE 2/Q BLOCK LHR +92 312 4400860",
      },
      {
        name: "SHADMAN",
        building: "BUILDING NUMBER 78,",
        address: "SHADMAN 1, LAHORE GROUND FLOOR +92 320 0408003",
      },
    ],
  }

  const islamabadData: LocationData = {
    title: "BRANCH OFFICES",
    subtitle: "VISIT US IN ISLAMABAD — ACROSS KEY BUSINESS AND TRADE DISTRICTS.",
    offices: [
      {
        //, , 
        name: "Office #3006",
        building: "3rd Floor #3006 GIGA Mall/ World Trade Center",
        address: "DHA Phase 2, Sector F, Islamabad +92-3177566692",
      }
    ],
  }

  const currentData = activeTab === "lahore" ? lahoreData : islamabadData

  const handleTabChange = (tab: string) => {
    if (tab !== activeTab) {
      setIsAnimating(true)
      setTimeout(() => {
        setActiveTab(tab)
        setIsAnimating(false)
      }, 150)
    }
  }

  return (
    <div>
      {/* Tabs */}
      <div className="flex mb-8">
        <button
          onClick={() => handleTabChange("lahore")}
          className={`font-bold px-8 py-3 rounded-l-full text-sm transition-all duration-300 transform hover:scale-105 ${
            activeTab === "lahore"
              ? "bg-yellow-400 text-black shadow-lg"
              : "bg-yellow-200 text-gray-600 hover:bg-yellow-300"
          }`}
        >
          LAHORE
        </button>
        <button
          onClick={() => handleTabChange("islamabad")}
          className={`font-bold px-8 py-3 rounded-r-full text-sm transition-all duration-300 transform hover:scale-105 ${
            activeTab === "islamabad"
              ? "bg-yellow-400 text-black shadow-lg"
              : "bg-yellow-200 text-gray-600 hover:bg-yellow-300"
          }`}
        >
          ISLAMABAD
        </button>
      </div>

      <div
        className={`mb-12 transition-all duration-300 ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
      >
        <h2 className="text-3xl font-bold text-blue-900 mb-4 hover:text-blue-800 transition-colors duration-300">
          {currentData.title}
        </h2>
        <p className="text-gray-700 text-lg mb-8 hover:text-gray-600 transition-colors duration-300">
          {currentData.subtitle}
        </p>

        {/* Office Locations */}
        <div className="space-y-8">
          {currentData.offices.map((office, index) => (
            <div
              key={index}
              className="group hover:bg-gray-50 p-4 rounded-lg transition-all duration-300 hover:shadow-md transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-800 transition-colors duration-300">
                {office.name}
              </h3>
              <p className="text-gray-700 font-semibold group-hover:text-gray-600 transition-colors duration-300">
                {office.building}
              </p>
              <p className="text-gray-600 group-hover:text-gray-500 transition-colors duration-300">{office.address}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Head Office */}
      <div className="group hover:bg-gray-50 p-4 rounded-lg transition-all duration-300 hover:shadow-md">
        <h2 className="text-3xl font-bold text-blue-900 mb-4 group-hover:text-blue-800 transition-colors duration-300">
          HEAD OFFICE
        </h2>
        <p className="text-gray-700 text-lg mb-6 group-hover:text-gray-600 transition-colors duration-300">
          MAIN CORPORATE HUB FOR CLIENT ONBOARDING, COMPLIANCE,
          <br />
          AND OPERATIONS.
        </p>

        <div>
          <p className="text-gray-700 font-semibold group-hover:text-gray-600 transition-colors duration-300">
            274MB, FIRST FLOOR,
          </p>
          <p className="text-gray-600 group-hover:text-gray-500 transition-colors duration-300">DHA PHASE 6, LAHORE +92-3244626888</p>
        </div>
      </div>
    </div>
  )
}
