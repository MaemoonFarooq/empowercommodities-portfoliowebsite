"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

// Throttle function for resize events
const throttle = (func: (...args: any[]) => void, limit: number) => {
  let inThrottle: boolean
  return function(this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

interface CommodityItem {
  id: string
  number: string
  name: string
  internationalImage: string
  agrifuturesImage: string
  description: string
  position: { top: string; left: string }
  mobilePosition: { top: string; left: string }
}

const internationalCommodities: CommodityItem[] = [
  {
    id: "gold",
    number: "01",
    name: "GOLD",
    internationalImage: "/gold.jpg",
    agrifuturesImage: "",
    description: "Precious metal trading and investment opportunities with secure storage solutions.",
    position: { top: "0%", left: "0%" },
    mobilePosition: { top: "0%", left: "0%" },
  },
  {
    id: "silver",
    number: "02",
    name: "SILVER",
    internationalImage: "/silver.jpg",
    agrifuturesImage: "",
    description: "Silver futures and spot trading for industrial and investment purposes.",
    position: { top: "0%", left: "33.33%" },
    mobilePosition: { top: "0%", left: "50%" },
  },
  {
    id: "platinum",
    number: "03",
    name: "PLATINUM",
    internationalImage: "/platinum.jpg",
    agrifuturesImage: "",
    description: "Rare precious metal with industrial applications and investment value.",
    position: { top: "0%", left: "66.66%" },
    mobilePosition: { top: "21%", left: "0%" },
  },
  {
    id: "copper",
    number: "04",
    name: "COPPER",
    internationalImage: "/copper.jpg",
    agrifuturesImage: "",
    description: "Industrial metal essential for construction and electrical applications worldwide.",
    position: { top: "33%", left: "0%" },
    mobilePosition: { top: "21%", left: "50%" },
  },
  {
    id: "currency-payers",
    number: "05",
    name: "CURRENCY PAYERS",
    internationalImage: "/currencypayers.jpg",
    agrifuturesImage: "",
    description: "Foreign exchange trading and currency hedging solutions for global markets.",
    position: { top: "33%", left: "33.33%" },
    mobilePosition: { top: "42%", left: "0%" },
  },
  {
    id: "crude-oil",
    number: "06",
    name: "CRUDE OIL",
    internationalImage: "/crudeoil.jpeg",
    agrifuturesImage: "",
    description: "Energy commodity trading with global market access and price discovery.",
    position: { top: "33%", left: "66.66%" },
    mobilePosition: { top: "42%", left: "50%" },
  },
  {
    id: "natural-gas",
    number: "07",
    name: "NATURAL GAS",
    internationalImage: "/naturalgas.jpg",
    agrifuturesImage: "",
    description: "Clean energy futures trading with environmental sustainability focus.",
    position: { top: "66%", left: "15%" },
    mobilePosition: { top: "62%", left: "0%" },
  },
  {
    id: "indices",
    number: "08",
    name: "INDICES",
    internationalImage: "/indices.jpg",
    agrifuturesImage: "",
    description: "Stock market indices and equity derivatives for portfolio diversification.",
    position: { top: "66%", left: "51.66%" },
    mobilePosition: { top: "62%", left: "50%" },
  },
]

const agrifuturesCommodities: CommodityItem[] = [
  {
    id: "wheat",
    number: "01",
    name: "WHEAT",
    internationalImage: "",
    agrifuturesImage: "/wheat.jpg",
    description: "Global wheat futures trading with quality grading and delivery options.",
    position: { top: "4%", left: "10%" },
    mobilePosition: { top: "0%", left: "0%" },
  },
  {
    id: "soyabean",
    number: "02",
    name: "SOY BEAN",
    internationalImage: "",
    agrifuturesImage: "/soyabean.jpg",
    description: "Soybean futures for oil processing and livestock feed applications.",
    position: { top: "4%", left: "55%" },
    mobilePosition: { top: "0%", left: "50%" },
  },
  {
    id: "corn",
    number: "03",
    name: "CORN",
    internationalImage: "",
    agrifuturesImage: "/corn.jpg",
    description: "Corn futures trading for food processing and ethanol production.",
    position: { top: "52%", left: "10%" },
    mobilePosition: { top: "50%", left: "0%" },
  },
  {
    id: "cotton",
    number: "04",
    name: "COTTON",
    internationalImage: "",
    agrifuturesImage: "/cotton.jpg",
    description: "Cotton futures for textile industry and global fiber markets.",
    position: { top: "52%", left: "55%" },
    mobilePosition: { top: "50%", left: "50%" },
  },
]

export function AgrifuturesComponent() {
  const [activeView, setActiveView] = useState<"international" | "agrifutures">("international")
  const [showImages, setShowImages] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    const throttledCheckMobile = throttle(checkMobile, 200)
    checkMobile()
    window.addEventListener("resize", throttledCheckMobile)

    return () => window.removeEventListener("resize", throttledCheckMobile)
  }, [])

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }))
  }

  const handleToggle = (view: "international" | "agrifutures") => {
    if (activeView === view) {
      setShowImages(!showImages)
    } else {
      setActiveView(view)
      setShowImages(true)
      setLoadedImages({})
    }
  }

  const getCurrentCommodities = () => {
    return activeView === "international" ? internationalCommodities : agrifuturesCommodities
  }

  const getCurrentImage = (commodity: CommodityItem) => {
    return activeView === "international" ? commodity.internationalImage : commodity.agrifuturesImage
  }

  const getCardDimensions = () => {
    if (isMobile) {
      return {
        width: "45%",
        aspectRatio: "4/5",
      }
    }
    return {
      width: "30%",
      aspectRatio: "9/16",
    }
  }

  const getContainerHeight = () => {
    const commodities = getCurrentCommodities()
    if (isMobile) {
      const rows = Math.ceil(commodities.length / 2)
      return `${rows * 60 + 20}%`
    } else {
      if (activeView === "international") {
        return "125%"
      } else {
        return "80%"
      }
    }
  }

  return (
    <div className="w-full bg-slate-800 overflow-hidden cursor-dark-area">


      {/* Preload critical images */}
      <link rel="preload" href="/gold.jpg" as="image" />
      <link rel="preload" href="/silver.jpg" as="image" />
      <link rel="preload" href="/platinum.jpg" as="image" />
      <link rel="preload" href="/wheat.jpg" as="image" />
      <link rel="preload" href="/soyabean.jpg" as="image" />

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-12 mb-6 md:mb-12 justify-center items-center px-2 py-4 sm:py-6 cursor-dark-area">
        <Button
          variant="ghost"
          className={`w-full sm:w-auto text-base sm:text-lg md:text-2xl font-bold tracking-[0.1em] sm:tracking-[0.2em] px-3 sm:px-4 py-2 sm:py-3 hover:bg-transparent transition-colors ${
            activeView === "international" ? "text-white" : "text-gray-400 hover:text-white"
          }`}
          onClick={() => handleToggle("international")}
        >
          INTERNATIONAL
        </Button>
        <Button
          variant="ghost"
          className={`w-full sm:w-auto text-base sm:text-lg md:text-2xl font-bold tracking-[0.1em] sm:tracking-[0.2em] px-3 sm:px-4 py-2 sm:py-3 hover:bg-transparent transition-colors ${
            activeView === "agrifutures" ? "text-white" : "text-gray-400 hover:text-white"
          }`}
          onClick={() => handleToggle("agrifutures")}
        >
          AGRIFUTURES
        </Button>
      </div>

      <div className="flex justify-center px-2 sm:px-4 pb-4 sm:pb-6">
        <div
          className="relative w-full max-w-7xl overflow-hidden rounded-lg"
          style={{
            paddingBottom: getContainerHeight(),
            height: 0,
          }}
        >
          {getCurrentCommodities().map((commodity) => (
            <div
              key={commodity.id}
              className="absolute rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 hover:z-10 shadow-lg"
              style={{
                top: isMobile ? commodity.mobilePosition.top : commodity.position.top,
                left: isMobile ? commodity.mobilePosition.left : commodity.position.left,
                ...getCardDimensions(),
              }}
            >
              {showImages ? (
                <>
                  <div className="relative w-full h-full">
                    {/* Placeholder that fades out */}
                    <div 
                      className={`absolute inset-0 bg-gray-700 transition-opacity duration-500 ${
                        loadedImages[commodity.id] ? 'opacity-0' : 'opacity-100'
                      }`}
                    />
                    {/* Image that fades in */}
                    <img
                      src={getCurrentImage(commodity) || "/placeholder.svg"}
                      alt={commodity.name}
                      className={`w-full h-full object-cover transition-opacity duration-500 ${
                        loadedImages[commodity.id] ? 'opacity-100' : 'opacity-0'
                      }`}
                      loading="lazy"
                      decoding="async"
                      onLoad={() => handleImageLoad(commodity.id)}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8">
                    <span className="text-white/90 text-lg sm:text-2xl md:text-4xl font-light leading-none">
                      {commodity.number}
                    </span>
                  </div>
                  <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8">
                    <h3 className="text-white font-bold text-xs sm:text-sm md:text-lg tracking-[0.1em] sm:tracking-[0.15em] uppercase leading-tight">
                      {commodity.name}
                    </h3>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-slate-700 p-3 sm:p-6 md:p-8 h-full flex flex-col justify-between border border-slate-600">
                    <div className="text-white/80 text-lg sm:text-2xl md:text-4xl font-light mb-2 sm:mb-4">
                      {commodity.number}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xs sm:text-sm md:text-lg tracking-wider mb-2 sm:mb-4 uppercase leading-tight">
                        {commodity.name}
                      </h3>
                      <p className="text-gray-300 text-[8px] sm:text-xs md:text-sm leading-relaxed">
                        {commodity.description}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}