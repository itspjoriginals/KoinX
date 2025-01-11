import React, { useState, useEffect } from "react";
import axios from "axios";

const PerformanceSection = () => {
  const [coinData, setCoinData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&market_data=true"
      )
      .then((response) => {
        setCoinData(response.data.market_data);
      })
      .catch((error) => console.error(error));
  }, []);

  const getPosition = (value, min, max) => {
    if (!min || !max || !value) return 0;
    return ((value - min) / (max - min)) * 100;
  };

  return (
    <section className="bg-gray-100 py-8">
      <div className="w-[70%] bg-white p-6 rounded-lg shadow-lg ml-20">
        {/* Header Tabs */}
        <header className="flex border-b border-gray-300 mb-6">
          {[
            "Overview",
            "Fundamentals",
            "News Insights",
            "Sentiments",
            "Team",
            "Technicals",
            "Tokenomics",
          ].map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-gray-600 hover:text-blue-500 transition duration-300 ${
                index === 0 ? "border-b-2 border-blue-500" : ""
              }`}
            >
              {tab}
            </button>
          ))}
        </header>

        {/* Performance Section */}
        <h2 className="text-2xl font-bold mb-4">Performance</h2>
        {coinData ? (
          <div>
            {/* Today's Low/High */}
            <div className="flex items-center justify-between mb-6 relative">
              <div className="text-gray-500">
                <p>Today's Low</p>
                <p className="text-red-500 font-semibold">
                  ${coinData.low_24h.usd.toFixed(2)}
                </p>
              </div>
              <div className="w-full mx-4 h-2 bg-gradient-to-r from-red-500 to-green-500 rounded-lg relative">
                {/* Marker for Current Price */}
                <div
                  className="absolute top-0 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"
                  style={{
                    left: `${getPosition(
                      coinData.current_price.usd,
                      coinData.low_24h.usd,
                      coinData.high_24h.usd
                    )}%`,
                  }}
                ></div>
              </div>
              <div className="text-gray-500 text-right">
                <p>Today's High</p>
                <p className="text-green-500 font-semibold">
                  ${coinData.high_24h.usd.toFixed(2)}
                </p>
              </div>
            </div>

            {/* 52W Low/High */}
            <div className="flex items-center justify-between mb-8 relative">
              <div className="text-gray-500">
                <p>52W Low</p>
                <p className="text-red-500 font-semibold">
                  ${coinData.atl.usd.toFixed(2)}
                </p>
              </div>
              <div className="w-full mx-4 h-2 bg-gradient-to-r from-red-500 to-green-500 rounded-lg relative">
                {/* Marker for Current Price */}
                <div
                  className="absolute top-0 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"
                  style={{
                    left: `${getPosition(
                      coinData.current_price.usd,
                      coinData.atl.usd,
                      coinData.ath.usd
                    )}%`,
                  }}
                ></div>
              </div>
              <div className="text-gray-500 text-right">
                <p>52W High</p>
                <p className="text-green-500 font-semibold">
                  ${coinData.ath.usd.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}

        {/* Fundamentals Section */}
        <h2 className="text-2xl font-bold mb-4">Fundamentals</h2>
        {coinData ? (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Price</p>
              <p className="font-semibold">
                ${coinData.current_price?.usd?.toFixed(2) || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-gray-600">Market Cap</p>
              <p className="font-semibold">
                ${coinData.market_cap?.usd?.toLocaleString() || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-gray-600">24h Low/High</p>
              <p className="font-semibold">
                ${coinData.low_24h?.usd?.toFixed(2) || "N/A"} / $
                {coinData.high_24h?.usd?.toFixed(2) || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-gray-600">All-Time High</p>
              <p className="font-semibold">
                ${coinData.ath?.usd?.toFixed(2) || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-gray-600">All-Time Low</p>
              <p className="font-semibold">
                ${coinData.atl?.usd?.toFixed(2) || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-gray-600">Market Cap Rank</p>
              <p className="font-semibold">
                {coinData.market_cap_rank || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-gray-600">Trading Volume</p>
              <p className="font-semibold">
                ${coinData.total_volume?.usd?.toLocaleString() || "N/A"}
              </p>
            </div>
          </div>
        ) : (
          <p>Loading fundamentals...</p>
        )}
      </div>
    </section>
  );
};

export default PerformanceSection;
