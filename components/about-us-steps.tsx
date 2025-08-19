"use client"
import { useState, useEffect, useRef } from "react"

function SkewedBox({
  top = 100,
  left = 100,
  width = 280,
  height = 200,
  bgColor = "rgba(255, 255, 255, 0.05)",
  borderColor = "#1A2B3C",
  borderWidth = 1,
  borderRadius = 20,
  number = "04",
  numberColor = "#2C3E50",
  numberFontSize = 14,
  text = "STEP BY STEP GUIDANCE",
  textColor = "#FFFFFF",
  textFontSize = 20,
  isMobile = false,
  isVisible = false,
  iconSrc = null, // Add iconSrc prop
}) {
  const [isHovered, setIsHovered] = useState(false)

  const mobileWidth = isMobile ? "90vw" : `${width}px`
  const mobileHeight = isMobile ? "auto" : `${height}px`
  const mobileNumberFontSize = isMobile ? 12 : numberFontSize
  const mobileTextFontSize = isMobile ? 16 : textFontSize

  return (
    <div
      style={{
        position: isMobile ? "relative" : "absolute",
        top: isMobile ? "auto" : `${top}px`,
        left: isMobile ? "0vw" : `${left}px`,
        width: mobileWidth,
        height: mobileHeight,
        backgroundColor: isHovered ? "#FFFFFF" : bgColor,
        border: `${borderWidth}px solid ${borderColor}`,
        borderRadius: `${borderRadius}px`,
        clipPath: isMobile
          ? "none"
          : `polygon(
          0% 0%, 
          calc(100% - 140px) 0%, 
          100% 140px, 
          100% 100%, 
          0% 100%
        )`,
        padding: "20px",
        boxSizing: "border-box",
        color: isHovered ? "#000000" : textColor,
        fontFamily: "Arial, sans-serif",
        userSelect: "none",
        display: "flex",
        flexDirection: "column",
        marginBottom: isMobile ? "20px" : "0",
        
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.8s ease-in-out, background-color 0.3s ease, color 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          color: isHovered ? "#000000" : numberColor,
          fontSize: `${mobileNumberFontSize}px`,
          fontWeight: "600",
          marginBottom: "auto",
          transition: "color 0.3s ease",
        }}
      >
        {number}
      </div>

      {/* Add icon to SkewedBox */}
      {!isMobile && iconSrc && (
        <img 
          src={iconSrc} 
          alt="Icon" 
          style={{
            position: "absolute",
            top: "45%",
            left: "40%",
            transform: "translate(-50%, -50%)",
            width: "140px",
            height: "140px",
          }}
        />
      )}

      <div
        style={{
          fontWeight: "bold",
          fontSize: `${mobileTextFontSize}px`,
          marginTop: "auto",
          lineHeight: 1.2,
          maxWidth: "80%",
          transition: "color 0.3s ease",
        }}
      >
        {text}
      </div>
    </div>
  )
}

export default function EmpowerCommodities(props: Record<string, unknown>) {
  const [isMobile, setIsMobile] = useState(false)
  const [textVisible, setTextVisible] = useState(false)
  const [box1Visible, setBox1Visible] = useState(false)
  const [box2Visible, setBox2Visible] = useState(false)
  const [box3Visible, setBox3Visible] = useState(false)
  const [box4Visible, setBox4Visible] = useState(false)
  const [circleVisible, setCircleVisible] = useState(false)
  const [arrowVisible, setArrowVisible] = useState(false)
  const [skewedBoxVisible, setSkewedBoxVisible] = useState(false)

  const [box1Hovered, setBox1Hovered] = useState(false)
  const [box2Hovered, setBox2Hovered] = useState(false)
  const [box3Hovered, setBox3Hovered] = useState(false)

  const textRef = useRef(null)
  const box1Ref = useRef(null)
  const box2Ref = useRef(null)
  const box3Ref = useRef(null)
  const box4Ref = useRef(null)
  const circleRef = useRef(null)
  const arrowRef = useRef(null)
  const skewedBoxRef = useRef(null)

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize() // initial check
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target
          if (target === textRef.current) setTextVisible(true)
          else if (target === box1Ref.current) setBox1Visible(true)
          else if (target === box2Ref.current) setBox2Visible(true)
          else if (target === box3Ref.current) setBox3Visible(true)
          else if (target === box4Ref.current) setBox4Visible(true)
          else if (target === circleRef.current) setCircleVisible(true)
          else if (target === arrowRef.current) setArrowVisible(true)
          else if (target === skewedBoxRef.current) setSkewedBoxVisible(true)
        }
      })
    }, observerOptions)

    // Observe all elements
    const refs = [textRef, box1Ref, box2Ref, box3Ref, box4Ref, circleRef, arrowRef, skewedBoxRef]
    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => {
      refs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current)
      })
    }
  }, [])

  const {
    top = 55,
    left = 350,
    fontSize = 20,
    color = "#FFFFFF",
    box1Top = 480,
    box1Left = 350,
    box1Width = 310,
    box1Height = 270,
    box1BorderColor = "#2C3E50",
    box1BorderWidth = 1,
    box1BorderRadius = 20,
    box1TextColor = "#FFFFFF",
    box1TopLeftText = "LICENSED BY SECP",
    box1BottomLeftText = "01",
    box1IconSrc = "/icon.png",
    box2Top = 480,
    box2Left = 710,
    box2Width = 310,
    box2Height = 270,
    box2BorderColor = "#2C3E50",
    box2BorderWidth = 1,
    box2BorderRadius = 20,
    box2TextColor = "#FFFFFF",
    box2TopLeftText = "PMEX CORPORATE MEMBER",
    box2BottomLeftText = "02",
    box2IconSrc = "/icon2.png",
    box3Top = 190,
    box3Left = 710,
    box3Width = 310,
    box3Height = 270,
    box3BorderColor = "#2C3E50",
    box3BorderWidth = 1,
    box3BorderRadius = 20,
    box3TextColor = "#FFFFFF",
    box3TopLeftText = "FREE ACCOUNT OPENING",
    box3BottomLeftText = "03",
    box3IconSrc = "/icon3.png",
    box4Top = 390,
    box4Left = 1350,
    box4Width = 390,
    box4Height = 270,
    box4BorderColor = "#2C3E50",
    box4BorderWidth = 1,
    box4BorderRadius = 20,
    box4ImageSrc = "aboutusimage.jpg",
    box4IconSrc = "/icon4.png",
    circleTop = 200,
    circleLeft = 1300,
    circleDiameter = 80,
    circleBorderColor = "#2C3E50",
    circleBorderWidth = 2,
    circleImageSrc = "/approachlogo.png",
    arrowTop = 110,
    arrowLeft = 500,
    arrowTilt = 125,
    arrowColor = "#FFFFFF",
    arrowThickness = 2,
    arrowHeight = 240,
    arrowWidth = 20,
  } = props

  const rectBoxStyle = (
    top,
    left,
    width,
    height,
    borderColor,
    borderWidth,
    borderRadius,
    textColor,
    isHovered,
    isVisible,
  ) => ({
    position: isMobile ? "relative" : "absolute",
    top: isMobile ? "auto" : `${top}px`,
    left: isMobile ? "auto" : `${left}px`,
    width: isMobile ? "90vw" : `${width}px`,
    height: isMobile ? "auto" : `${height}px`,
    backgroundColor: isHovered ? "#FFFFFF" : "rgba(255, 255, 255, 0.05)",
    border: `${borderWidth}px solid ${borderColor}`,
    borderRadius: `${borderRadius}px`,
    padding: "20px",
    boxSizing: "border-box",
    color: isHovered ? "#000000" : textColor,
    fontFamily: "Arial, sans-serif",
    userSelect: "none",
    display: "flex",
    flexDirection: "column",
    marginBottom: isMobile ? "20px" : "0",
    opacity: isVisible ? 1 : 0,
    transition: "opacity 0.8s ease-in-out, background-color 0.3s ease, color 0.3s ease",
    cursor: "pointer",
  })

  const numberStyle = (isHovered) => ({
    fontWeight: "600",
    fontSize: isMobile ? "12px" : "14px",
    color: isHovered ? "#000000" : "#2C3E50",
    marginBottom: "auto",
    transition: "color 0.3s ease",
  })

  const textStyle = {
    fontWeight: "bold",
    fontSize: isMobile ? "16px" : "20px",
    marginTop: "auto",
    lineHeight: 1.2,
    maxWidth: "80%",
    transition: "color 0.3s ease",
  }

  const iconStyle = {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "120px",
    height: "120px",
    display: isMobile ? "none" : "block",
  }

  const imageBoxStyle = {
    position: "absolute",
    top: `${box4Top}px`,
    left: `${box4Left}px`,
    width: `${box4Width}px`,
    height: `${box4Height}px`,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    border: `${box4BorderWidth}px solid ${box4BorderColor}`,
    borderRadius: `${box4BorderRadius}px`,
    overflow: "hidden",
    boxSizing: "border-box",
    display: isMobile ? "none" : "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: box4Visible ? 1 : 0,
    transition: "opacity 1s ease-in-out",
  }

  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  }

  const circleStyle = {
    position: "absolute",
    top: `${circleTop}px`,
    left: `${circleLeft}px`,
    width: `${circleDiameter}px`,
    height: `${circleDiameter}px`,
    borderRadius: "50%",
    border: `${circleBorderWidth}px solid ${circleBorderColor}`,
    overflow: "hidden",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    display: isMobile ? "none" : "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: circleVisible ? 1 : 0,
    transition: "opacity 0.9s ease-in-out",
  }

  const circleImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  }

  return (
    <section
      className="w-full bg-slate-800 overflow-hidden cursor-dark-area"
      style={{
        backgroundColor: "#0B1A27",
        height: isMobile ? "auto" : "100vh",
        position: "relative",
        overflowY: isMobile ? "auto" : "hidden",
        padding: "20px",
        display: "flex",
        flexDirection: isMobile ? "column" : "initial",
        alignItems: isMobile ? "center" : "initial",
      }}
    >
      <div
        ref={textRef}
        style={{
          position: isMobile ? "relative" : "absolute",
          top: isMobile ? "auto" : `${top}px`,
          left: isMobile ? "auto" : `${left}px`,
          color: color,
          maxWidth: isMobile ? "90vw" : "600px",
          userSelect: "text",
          fontSize: isMobile ? "14px" : `${fontSize}px`,
          lineHeight: 1.5,
          marginBottom: isMobile ? "20px" : 0,
          opacity: textVisible ? 1 : 0,
          transition: "opacity 0.6s ease-in-out",
        }}
      >
        <p style={{ margin: 0, padding: 0, whiteSpace: isMobile ? "normal" : "nowrap" }}>
          Empower Commodities is a regulated brokerage house and corporate member of Pakistan Mercantile Exchange
          (PMEX).
        </p>
        <p style={{ margin: 0, padding: 0, marginTop: "0px", whiteSpace: isMobile ? "normal" : "nowrap" }}>
          We provide clients with legal access to global and local futures contracts
        </p>
        <p style={{ margin: 0, padding: 0, marginTop: "24px", whiteSpace: isMobile ? "normal" : "nowrap" }}>
          UNDER SECP
        </p>
        <p style={{ margin: 0, padding: 0, marginTop: "0px", whiteSpace: isMobile ? "normal" : "nowrap" }}>
          REGULATION.
        </p>
        <p style={{ margin: 0, padding: 0, marginTop: isMobile ? "24px" : "570px" }}>OUR PURPOSE IS SIMPLE:</p>
        <p style={{ margin: 0, padding: 0, marginTop: "0px", whiteSpace: isMobile ? "normal" : "nowrap" }}>
          EQUIP TRADERS WITH REAL TOOLS, TIMELY KNOWLEDGE, AND RISK-AWARE TRADING PATHWAYS.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "initial",
          gap: isMobile ? "20px" : "0",
          marginTop: isMobile ? "20px" : "0",
          width: isMobile ? "100%" : "auto",
          alignItems: isMobile ? "center" : "initial",
        }}
      >
        <div
          ref={box1Ref}
          style={rectBoxStyle(
            box1Top,
            box1Left,
            box1Width,
            box1Height,
            box1BorderColor,
            box1BorderWidth,
            box1BorderRadius,
            box1TextColor,
            box1Hovered,
            box1Visible,
          )}
          onMouseEnter={() => setBox1Hovered(true)}
          onMouseLeave={() => setBox1Hovered(false)}
        >
          <div style={numberStyle(box1Hovered)}>{box1BottomLeftText}</div>
          {!isMobile && box1IconSrc && (
            <img 
              src={box1IconSrc || "/placeholder.svg"} 
              alt="Icon 1" 
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "210px",
                height: "210px",
                display: isMobile ? "none" : "block",
              }} 
            />
          )}
          <div style={textStyle}>{box1TopLeftText}</div>
        </div>

        <div
          ref={box2Ref}
          style={rectBoxStyle(
            box2Top,
            box2Left,
            box2Width,
            box2Height,
            box2BorderColor,
            box2BorderWidth,
            box2BorderRadius,
            box2TextColor,
            box2Hovered,
            box2Visible,
          )}
          onMouseEnter={() => setBox2Hovered(true)}
          onMouseLeave={() => setBox2Hovered(false)}
        >
          <div style={numberStyle(box2Hovered)}>{box2BottomLeftText}</div>
          {!isMobile && box2IconSrc && (
            <img src={box2IconSrc || "/placeholder.svg"} alt="Icon 2" style={iconStyle} />
          )}
          <div style={textStyle}>{box2TopLeftText}</div>
        </div>

        <div
          ref={box3Ref}
          style={rectBoxStyle(
            box3Top,
            box3Left,
            box3Width,
            box3Height,
            box3BorderColor,
            box3BorderWidth,
            box3BorderRadius,
            box3TextColor,
            box3Hovered,
            box3Visible,
          )}
          onMouseEnter={() => setBox3Hovered(true)}
          onMouseLeave={() => setBox3Hovered(false)}
        >
          <div style={numberStyle(box3Hovered)}>{box3BottomLeftText}</div>
          {!isMobile && box3IconSrc && (
            <img src={box3IconSrc || "/placeholder.svg"} alt="Icon 3" style={iconStyle} />
          )}
          <div style={textStyle}>{box3TopLeftText}</div>
        </div>
      </div>

      <div ref={box4Ref} style={imageBoxStyle}>
        {box4ImageSrc ? (
          <img src={box4ImageSrc || "/placeholder.svg"} alt="Box 4" style={imageStyle} />
        ) : (
          <p style={{ color: "#888", fontSize: "14px" }}>Image goes here</p>
        )}
      </div>

      <div ref={circleRef} style={circleStyle}>
        {circleImageSrc ? (
          <img src={circleImageSrc || "/placeholder.svg"} alt="Circle" style={circleImageStyle} />
        ) : (
          <p style={{ color: "#888", fontSize: "12px" }}>Circle Image</p>
        )}
      </div>

      {!isMobile && (
        <svg
          ref={arrowRef}
          style={{
            position: "absolute",
            top: `${arrowTop}px`,
            left: `${arrowLeft}px`,
            transform: `rotate(${arrowTilt}deg)`,
            transformOrigin: "center bottom",
            cursor: "pointer",
            opacity: arrowVisible ? 1 : 0,
            transition: "opacity 1.1s ease-in-out",
          }}
          width={arrowWidth}
          height={arrowHeight}
          viewBox="0 0 20 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x={arrowWidth / 2 - arrowThickness / 2}
            y="10"
            width={arrowThickness}
            height={arrowHeight - 10}
            fill={arrowColor}
          />
          <polygon
            points={`${arrowWidth / 2},0 ${arrowWidth / 2 - arrowThickness * 2},10 ${
              arrowWidth / 2 + arrowThickness * 2
            },10`}
            fill={arrowColor}
          />
        </svg>
      )}

      <div ref={skewedBoxRef}>
        <SkewedBox
          top={isMobile ? 0 : 190}
          left={isMobile ? 0 : 1050}
          width={isMobile ? 0.9 * window.innerWidth : 280}
          height={isMobile ? "auto" : 270}
          number="04"
          text="STEP BY STEP GUIDANCE"
          isMobile={isMobile}
          isVisible={skewedBoxVisible}
          iconSrc={box4IconSrc} // Pass icon to SkewedBox
        />
      </div>
    </section>
  )
}