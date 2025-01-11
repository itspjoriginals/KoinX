import React, { useState, useEffect } from "react";
import axios from "axios";

const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    // Fetch trending coins data
    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((response) => {
        setTrendingCoins(response.data.coins);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="flex flex-col justify-between h-full">
      <h3 className="text-2xl font-bold mb-4">Trending Coins (24h)</h3>

      <div className="space-y-4 max-h-[350px] overflow-y-auto">
       
        {trendingCoins.slice(0, 5).map((coin) => (
          <div key={coin.item.id} className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={coin.item.small} 
                alt={coin.item.name}
                className="w-6 h-6 mr-4"
              />
              <div>
                <h4 className="text-lg font-semibold">
                  {coin.item.name} ({coin.item.symbol.toUpperCase()})
                </h4>
                <p className="text-sm text-gray-500">
                  Rank #{coin.item.market_cap_rank}
                </p>
              </div>
            </div>

            
            <div
              className={`w-16 py-1 px-2 rounded text-center ${coin.item.price_btc > 0 ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
            >
              <p className="text-sm font-semibold">
                {coin.item.price_btc.toFixed(2)}%
              </p>
              {coin.item.price_btc > 0 ? (
                <span className="text-green-500">↑</span>
              ) : (
                <span className="text-red-500">↓</span>
              )}
            </div>
          </div>
        ))}

        {/* Scrollable List of Remaining Coins */}
        {trendingCoins.slice(5).map((coin) => (
          <div key={coin.item.id} className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={coin.item.small}
                alt={coin.item.name}
                className="w-6 h-6 mr-4"
              />
              <div>
                <h4 className="text-lg font-semibold">
                  {coin.item.name} ({coin.item.symbol.toUpperCase()})
                </h4>
              </div>
            </div>

            <div
              className={`w-16 py-1 px-2 rounded text-center ${coin.item.price_btc > 0 ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
            >
              <p className="text-sm font-semibold">
                {coin.item.price_btc.toFixed(2)}%
              </p>
              {coin.item.price_btc > 0 ? (
                <span className="text-green-500">↑</span>
              ) : (
                <span className="text-red-500">↓</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoins;
