"use client";

import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null); // ✅ specify type

  useEffect(() => {
    if (!container.current) return;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      lineWidth: 2,
      lineType: 0,
      chartType: "area",
      backgroundColor: "#0B1A27",
      fontColor: "rgb(106, 109, 120)",
      gridLineColor: "rgba(242, 242, 242, 0.06)",
      volumeUpColor: "rgba(34, 171, 148, 0.5)",
      volumeDownColor: "rgba(247, 82, 95, 0.5)",
      widgetFontColor: "#DBDBDB",
      upColor: "#22ab94",
      downColor: "#f7525f",
      borderUpColor: "#22ab94",
      borderDownColor: "#f7525f",
      wickUpColor: "#22ab94",
      wickDownColor: "#f7525f",
      colorTheme: "dark",
      isTransparent: false,
      locale: "en",
      chartOnly: false,
      scalePosition: "right",
      scaleMode: "Normal",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
      valuesTracking: "1",
      changeMode: "price-and-percent",
      symbols: [
        ["Gold Spot", "OANDA:XAUUSD|1D"],
        ["Silver Spot", "OANDA:XAGUSD|1D"],
        ["Platinum", "OANDA:XPTUSD|1D"],
        ["Crude Oil", "TVC:USOIL|1D"],
        ["Nasdaq", "OANDA:NAS100USD|1D"]
      ],
      dateRanges: [
        "1d|1",
        "1m|30",
        "3m|60",
        "12m|1D",
        "60m|1W",
        "all|1M",
      ],
      fontSize: "10",
      headerFontSize: "medium",
      autosize: true,
      width: "100%",
      height: "100%",
      noTimeScale: false,
      hideDateRanges: false,
      hideMarketStatus: false,
      hideSymbolLogo: false,
    });

    container.current.innerHTML = ""; // ✅ works now
    container.current.appendChild(script);
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      style={{
        height: "500px",
        width: "100%",
        backgroundColor: "#0B1A27",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <div
        className="tradingview-widget-container__widget"
        ref={container}
        style={{ height: "100%", width: "100%" }}
      ></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span style={{ color: "#DBDBDB" }}>
            Apple, Google, Microsoft and XAUUSD quotes by TradingView
          </span>
        </a>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
