import React, { useEffect } from "react";

const ChartSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        container_id: "tradingview_chart",
        autosize:true,  
        symbol: "BTCUSD",
        interval: "D",
        theme: "light",
        style: "2",
        hide_volume: true, 
        hide_legend: true, 
        hide_top_toolbar: true,
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        allow_symbol_change: false,
        hide_side_toolbar: true, 
      });
    };
    document.body.appendChild(script); 
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Bitcoin Chart</h2>
        <div className="tradingview-widget-container">
          <div
            id="tradingview_chart"
            style={{ height: "500px", width: "100%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default ChartSection;
