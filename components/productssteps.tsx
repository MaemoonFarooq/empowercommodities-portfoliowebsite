"use client";
import React, { useState, useEffect } from "react";

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
  isMobile = false, // added
}) {
  // Adjust width, height, font sizes on mobile if needed
  const mobileWidth = isMobile ? "90vw" : `${width}px`;
  const mobileHeight = isMobile ? "auto" : `${height}px`;
  const mobileNumberFontSize = isMobile ? 12 : numberFontSize;
  const mobileTextFontSize = isMobile ? 16 : textFontSize;

  return (
    <div
      style={{
        position: "absolute",
        top: isMobile ? "auto" : `${top}px`,
        left: isMobile ? "0vw" : `${left}px`,
        width: mobileWidth,
        height: mobileHeight,
        backgroundColor: bgColor,
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
        color: textColor,
        fontFamily: "Arial, sans-serif",
        userSelect: "none",
        display: "flex",
        flexDirection: "column",
        marginBottom: isMobile ? "20px" : "0",
        position: isMobile ? "relative" : "absolute",
      }}
    >
      <div
        style={{
          color: numberColor,
          fontSize: `${mobileNumberFontSize}px`,
          fontWeight: "600",
          marginBottom: "auto",
        }}
      >
        {number}
      </div>
      <div
        style={{
          fontWeight: "bold",
          fontSize: `${mobileTextFontSize}px`,
          marginTop: "auto",
          lineHeight: 1.2,
          maxWidth: "80%",
        }}
      >
        {text}
      </div>
    </div>
  );
}

export default function EmpowerCommodities(props) {
  const [isMobile, setIsMobile] = useState(false);

  // Track window width to set isMobile flag
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Destructure props with defaults or fallback
  const {
    top = 55,
    left = 350,
    fontSize = 20,
    color = "#FFFFFF",
    // Box 1 props
    box1Top = 480,
    box1Left = 350,
    box1Width = 310,
    box1Height = 270,
    box1BorderColor = "#2C3E50",
    box1BorderWidth = 1,
    box1BorderRadius = 20,
    box1TextColor = "#FFFFFF",
    box1TopLeftText = "TEXT 1",
    box1BottomLeftText = "01",
    // Box 2 props
    box2Top = 480,
    box2Left = 710,
    box2Width = 310,
    box2Height = 270,
    box2BorderColor = "#2C3E50",
    box2BorderWidth = 1,
    box2BorderRadius = 20,
    box2TextColor = "#FFFFFF",
    box2TopLeftText = "TEXT 2",
    box2BottomLeftText = "02",
    // Box 3 props
    box3Top = 190,
    box3Left = 710,
    box3Width = 310,
    box3Height = 270,
    box3BorderColor = "#2C3E50",
    box3BorderWidth = 1,
    box3BorderRadius = 20,
    box3TextColor = "#FFFFFF",
    box3TopLeftText = "ooga booga",
    box3BottomLeftText = "03",
    // Box 4 props (image box)
    box4Top = 390,
    box4Left = 1350,
    box4Width = 310,
    box4Height = 370,
    box4BorderColor = "#2C3E50",
    box4BorderWidth = 1,
    box4BorderRadius = 20,
    box4ImageSrc = "",
    // Circle image box props (new)
    circleTop = 200,
    circleLeft = 1300,
    circleDiameter = 80,
    circleBorderColor = "#2C3E50",
    circleBorderWidth = 2,
    circleImageSrc = "/approachlogo.png",
    // Arrow props
    arrowTop = 110,
    arrowLeft = 500,
    arrowTilt = 125, // degrees rotation, 0 = straight up
    arrowColor = "#FFFFFF",
    arrowThickness = 2, // thickness in px
    arrowHeight = 240, // height in px
    arrowWidth = 20, // width in px (arrow shaft width)
  } = props;

  // Styles for boxes with responsiveness in mind
  const rectBoxStyle = (
    top,
    left,
    width,
    height,
    borderColor,
    borderWidth,
    borderRadius,
    textColor
  ) => ({
    position: isMobile ? "relative" : "absolute",
    top: isMobile ? "auto" : `${top}px`,
    left: isMobile ? "auto" : `${left}px`,
    width: isMobile ? "90vw" : `${width}px`,
    height: isMobile ? "auto" : `${height}px`,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    border: `${borderWidth}px solid ${borderColor}`,
    borderRadius: `${borderRadius}px`,
    padding: "20px",
    boxSizing: "border-box",
    color: textColor,
    fontFamily: "Arial, sans-serif",
    userSelect: "none",
    display: "flex",
    flexDirection: "column",
    marginBottom: isMobile ? "20px" : "0",
  });

  const numberStyle = {
    fontWeight: "600",
    fontSize: isMobile ? "12px" : "14px",
    color: "#2C3E50",
    marginBottom: "auto",
  };

  const textStyle = {
    fontWeight: "bold",
    fontSize: isMobile ? "16px" : "20px",
    marginTop: "auto",
    lineHeight: 1.2,
    maxWidth: "80%",
  };

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
  };

  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  };

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
  };

  const circleImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <section
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
      {/* Text block */}
      <div
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
        }}
      >
<p style={{ margin: 0, padding: 0,   whiteSpace: isMobile ? "normal" : "nowrap", }}>
    Empower Commodities is a regulated brokerage house and corporate member
    of Pakistan Mercantile Exchange (PMEX).
  </p>
  <p style={{ margin: 0, padding: 0, marginTop: "0px",   whiteSpace: isMobile ? "normal" : "nowrap", }}>
    We provide clients with legal access to global and local futures contracts
  </p>
  <p style={{ margin: 0, padding: 0, marginTop: "24px",   whiteSpace: isMobile ? "normal" : "nowrap", }}>
    FROM GOLD AND
  </p>
  <p style={{ margin: 0, padding: 0, marginTop: "0px",   whiteSpace: isMobile ? "normal" : "nowrap", }}>
    CRUDE OIL TO RED
  </p>
  <p style={{ margin: 0, padding: 0, marginTop: "0px",   whiteSpace: isMobile ? "normal" : "nowrap", }}>
    CHILLI AND WHEAT
  </p>
  <p style={{ margin: 0, padding: 0, marginTop: "24px",   whiteSpace: isMobile ? "normal" : "nowrap", }}>
    UNDER SECP
  </p>
  <p style={{ margin: 0, padding: 0, marginTop: "0px",   whiteSpace: isMobile ? "normal" : "nowrap", }}>
    REGULATION.
  </p>
  <p style={{ margin: 0, padding: 0, marginTop: isMobile ? "24px" : "480px" }}>
    OUR PURPOSE IS SIMPLE:
  </p>
  <p style={{ margin: 0, padding: 0, marginTop: "0px",   whiteSpace: isMobile ? "normal" : "nowrap" }}>
    EQUIP TRADERS WITH REAL TOOLS, TIMELY KNOWLEDGE, AND RISK-AWARE TRADING PATHWAYS.
  </p>
      </div>

      {/* Boxes stack vertically on mobile */}
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
        {/* Box 1 */}
        <div
          style={rectBoxStyle(
            box1Top,
            box1Left,
            box1Width,
            box1Height,
            box1BorderColor,
            box1BorderWidth,
            box1BorderRadius,
            box1TextColor
          )}
        >
          <div style={numberStyle}>{box1BottomLeftText}</div>
          <div style={textStyle}>{box1TopLeftText}</div>
        </div>

        {/* Box 2 */}
        <div
          style={rectBoxStyle(
            box2Top,
            box2Left,
            box2Width,
            box2Height,
            box2BorderColor,
            box2BorderWidth,
            box2BorderRadius,
            box2TextColor
          )}
        >
          <div style={numberStyle}>{box2BottomLeftText}</div>
          <div style={textStyle}>{box2TopLeftText}</div>
        </div>

        {/* Box 3 */}
        <div
          style={rectBoxStyle(
            box3Top,
            box3Left,
            box3Width,
            box3Height,
            box3BorderColor,
            box3BorderWidth,
            box3BorderRadius,
            box3TextColor
          )}
        >
          <div style={numberStyle}>{box3BottomLeftText}</div>
          <div style={textStyle}>{box3TopLeftText}</div>
        </div>
      </div>

      {/* Box 4 Image - hidden on mobile */}
      <div style={imageBoxStyle}>
        {box4ImageSrc ? (
          <img src={box4ImageSrc} alt="Box 4" style={imageStyle} />
        ) : (
          <p style={{ color: "#888", fontSize: "14px" }}>Image goes here</p>
        )}
      </div>

      {/* Circle Image - hidden on mobile */}
      <div style={circleStyle}>
        {circleImageSrc ? (
          <img src={circleImageSrc} alt="Circle" style={circleImageStyle} />
        ) : (
          <p style={{ color: "#888", fontSize: "12px" }}>Circle Image</p>
        )}
      </div>

      {/* Arrow hidden on mobile */}
      {!isMobile && (
        <svg
          style={{
            position: "absolute",
            top: `${arrowTop}px`,
            left: `${arrowLeft}px`,
            transform: `rotate(${arrowTilt}deg)`,
            transformOrigin: "center bottom",
            cursor: "pointer",
          }}
          width={arrowWidth}
          height={arrowHeight}
          viewBox="0 0 20 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Shaft */}
          <rect
            x={arrowWidth / 2 - arrowThickness / 2}
            y="10"
            width={arrowThickness}
            height={arrowHeight - 10}
            fill={arrowColor}
          />
          {/* Arrowhead */}
          <polygon
            points={`${arrowWidth / 2},0 ${arrowWidth / 2 - arrowThickness * 2},10 ${
              arrowWidth / 2 + arrowThickness * 2
            },10`}
            fill={arrowColor}
          />
        </svg>
      )}

      {/* SkewedBox example */}
      <SkewedBox
        top={isMobile ? 0 : 190}
        left={isMobile ? 0: 1050}
        width={isMobile ? 0.9 * window.innerWidth : 280}
        height={isMobile ? "auto" : 270}
        number="04"
        text="STEP BY STEP GUIDANCE"
        isMobile={isMobile}
      />
    </section>
  );
}
