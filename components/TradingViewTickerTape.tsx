// components/TradingViewTickerTape.tsx
"use client";

import React, { useEffect, useRef, memo } from "react";

interface Symbol {
  proName: string;
  title: string;
}

interface TradingViewTickerTapeProps {
  symbols?: Symbol[];
  colorTheme?: "light" ;
  locale?: string;
  isTransparent?: boolean;
  displayMode?: "adaptive" | "regular";
}


const TradingViewTickerTape: React.FC<TradingViewTickerTapeProps> = ({
  symbols = [
  { proName: "OANDA:XAUUSD", title: "Gold" },
  { proName: "OANDA:XAGUSD", title: "Silver" },
  { proName: "OANDA:XPTUSD", title: "Platinum" },
  { proName: "TVC:USOIL", title: "Crude Oil" },
  { proName: "OANDA:NAS100USD", title: "Nasdaq" }
]
,
  colorTheme = "dark",
  locale = "en",
  isTransparent = false,
  displayMode = "adaptive",
}) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols,
      colorTheme,
      locale,
      isTransparent,
      displayMode,
      showSymbolLogo: true,
      largeChartUrl: "",
    });

    container.current.innerHTML = ""; // clear old content to prevent duplicates
    container.current.appendChild(script);
  }, [symbols, colorTheme, locale, isTransparent, displayMode]);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="blue-text">Ticker tape by TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default memo(TradingViewTickerTape);