"use client";

import React, { useEffect, useRef, memo, useState } from "react";

interface TradingViewNewsWidgetProps {
  displayMode?: "regular" | "adaptive" | "compact";
  feedMode?: "all_symbols" | "top_symbols";
  colorTheme?: "light" | "dark";
  isTransparent?: boolean;
  locale?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
}

const TradingViewNewsWidget: React.FC<TradingViewNewsWidgetProps> = memo(
  ({
    displayMode = "adaptive",
    feedMode = "all_symbols",
    colorTheme = "light",
    isTransparent = false,
    locale = "en",
    width = "100%", // ✅ default full width instead of fixed pixels
    height = 550,
    className = "",
  }) => {
    const container = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      // Detect mobile screen size
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
      handleResize(); // run once on mount
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
      if (!container.current) return;
      container.current.innerHTML = "";

      const widgetContainer = document.createElement("div");
      widgetContainer.className = "tradingview-widget-container__widget";

      const copyright = document.createElement("div");
      copyright.className = "tradingview-widget-copyright";

      const link = document.createElement("a");
      link.href = "https://www.tradingview.com/news-flow/?priority=top_stories";
      link.rel = "noopener nofollow";
      link.target = "_blank";

      const span = document.createElement("span");
      span.className = "blue-text";
      span.textContent = "Market News by TradingView";

      link.appendChild(span);
      copyright.appendChild(link);

      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        displayMode,
        feedMode,
        colorTheme,
        isTransparent,
        locale,
        width: isMobile ? "100%" : "100%", // ✅ always scale to parent width
        height: isMobile ? 400 : height,
      });

      container.current.appendChild(widgetContainer);
      container.current.appendChild(copyright);
      container.current.appendChild(script);

      return () => {
        if (container.current) container.current.innerHTML = "";
      };
    }, [
      displayMode,
      feedMode,
      colorTheme,
      isTransparent,
      locale,
      width,
      height,
      isMobile,
    ]);

    return (
      <div
        className={`tradingview-widget-container ${className}`}
        ref={container}
        style={{
          width: "100%", // ✅ responsive container
          maxWidth: "100%", // ✅ prevents overflow on smaller desktops
        }}
      />
    );
  }
);

TradingViewNewsWidget.displayName = "TradingViewNewsWidget";

export default TradingViewNewsWidget;
