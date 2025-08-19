"use client"
import { useState, useEffect, useRef } from "react"

function CommodityBox({ title, description, position, isMobile, height, width, delay }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const boxRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay * 1000)
        }
      },
      { threshold: 0.1 },
    )

    if (boxRef.current) {
      observer.observe(boxRef.current)
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current)
      }
    }
  }, [delay])

  return (
    <div
      ref={boxRef}
      style={{
        position: isMobile ? "relative" : "absolute",
        top: isMobile ? "auto" : position.top,
        left: isMobile ? "-12px" : position.left,
        transform: isMobile ? "none" : "translate(-50%, -50%)",
        background: isHovered ? "white" : "linear-gradient(180deg, #D5EAF7 0%, #A9CCE3 100%)",
        padding: "20px",
        borderRadius: "16px",
        width: isMobile ? "80%" : width || "220px",
        height: isMobile ? "auto" : height || "auto",
        boxShadow: isHovered ? "0 12px 30px rgba(0,0,0,0.2)" : "0 4px 12px rgba(0,0,0,0.1)",
        margin: isMobile ? "10px auto" : 0,
        overflow: isMobile ? "visible" : "auto",
        opacity: isVisible ? 1 : 0,
        transform: isMobile
          ? isVisible
            ? "translateY(0)"
            : "translateY(20px)"
          : isVisible
            ? isHovered
              ? "translate(-50%, -50%) scale(1.05)"
              : "translate(-50%, -50%)"
            : "translate(-50%, -50%) translateY(20px)",
        transition: "all 0.6s ease",
        cursor: "pointer",
      }}
      className="commodity-box"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3
        style={{
          margin: 0,
          color: isHovered ? "#000" : "#000",
          fontWeight: "bold",
          fontSize: "18px",
          transition: "color 0.3s ease",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          margin: "8px 0 0",
          fontSize: "14px",
          color: isHovered ? "#333" : "#333",
          transition: "color 0.3s ease",
        }}
      >
        {description}
      </p>
    </div>
  )
}

export default function CommoditiesTrading({
  localBoxes = [
    {
      title: "AGRI-FUTURES",
      description: "Trade Agricultural Commodities Like Wheat, Soya Bean, Corn And Cotton On PMEX.",
      position: { top: "65%", left: "33%" },
      height: "280px",
      width: "240px",
    },
    {
      title: "METAL-FUTURES",
      description: "Gold, Silver and other metals traded locally on PMEX.",
      position: { top: "30%", left: "66%" },
      height: "280px",
      width: "260px",
    },
  ],
  internationalBoxes = [
    {
      title: "OIL FUTURES",
      description: "Trade international crude oil, WTI, and Brent on PMEX.",
      position: { top: "28%", left: "34%" },
      height: "180px",
      width: "230px",
    },
    {
      title: "FOREX FUTURES",
      description: "Major currency pairs traded globally.",
      position: { top: "28%", left: "65%" },
      height: "180px",
      width: "210px",
    },
    {
      title: "GOLD FUTURES",
      description: "International gold  contracts.",
      position: { top: "50%", left: "34%" },
      height: "180px",
      width: "230px",
    },
    {
      title: "INDEX FUTURES",
      description: "Trade global stock indices.",
      position: { top: "50%", left: "65%" },
      height: "180px",
      width: "210px",
    },
    {
      title: "SILVER FUTURES",
      description: "Global silver contracts on PMEX.",
      position: { top: "72%", left: "34%" },
      height: "160px",
      width: "230px",
    },
  ],
}) {
  const [activeBoxes, setActiveBoxes] = useState(internationalBoxes)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
    className="w-full bg-slate-800 overflow-hidden cursor-white-area"
      style={{
        position: "relative",
        height: isMobile ? "auto" : "100vh",
        width: "100vw",
        backgroundColor: "white",
        overflow: isMobile ? "visible" : "auto",
      }}
    >
      {!isMobile && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#e0e0e0",
            width: "300px",
            height: "600px",
            borderRadius: "8px",
            pointerEvents: "none",
          }}
        ></div>
      )}

      <button
        onClick={() => setActiveBoxes(internationalBoxes)}
        style={{
          position: "absolute",
          top: "5%",
          left: "30%",
          transform: "translate(-50%, -50%)",
          background: "none",
          border: "none",
          color: "black",
          cursor: "pointer",
          fontSize: "18px",
          padding: "8px 16px",
          textDecoration: "underline",
          zIndex: 1,
        }}
      >
        INTERNATIONAL COMMODITIES
      </button>

      <button
        onClick={() => setActiveBoxes(localBoxes)}
        style={{
          position: "absolute",
          top: "5%",
          left: "70%",
          transform: "translate(-50%, -50%)",
          background: "none",
          border: "none",
          color: "black",
          cursor: "pointer",
          fontSize: "18px",
          padding: "8px 16px",
          textDecoration: "underline",
          zIndex: 1,
        }}
      >
        AGRICULTURAL COMMODITIES
      </button>

      <div
        style={{
          display: isMobile ? "flex" : "block",
          flexDirection: isMobile ? "column" : "unset",
          alignItems: isMobile ? "center" : "unset",
          paddingTop: isMobile ? "80px" : 0,
        }}
      >
        {activeBoxes.map((box, index) => (
          <CommodityBox
            key={index}
            {...box}
            isMobile={isMobile}
            delay={index * 0.1} // Stagger effect
          />
        ))}
      </div>
    </div>
  )
}
