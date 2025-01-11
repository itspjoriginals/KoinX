import React, { useState, useEffect } from "react";
import axios from "axios";
import ChartSection from "./ChartSection"; // Ensure this component is updated as needed
import TrendingCoins from "./TrendingCoins"; // Import the TrendingCoins component
import GetStarted from "./GetStarted"; // Import the GetStarted component

const PriceSection = () => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr&include_24hr_change=true"
      )
      .then((response) => {
        setPrice(response.data.bitcoin);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto flex">
        
        <div className="w-[70%] bg-white p-6 rounded-lg shadow-lg flex flex-col">
          {price ? (
            <div>
             
              <div className="flex items-center mb-4">
                <img
                  src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
                  alt="Bitcoin Logo"
                  className="w-8 h-8 mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold">Bitcoin (BTC)</h3>
                  <p className="text-sm text-gray-500">Rank #1</p>
                </div>
              </div>

             
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-2xl font-semibold">Price: ${price.usd.toFixed(2)}</p>
                  <p className="text-lg text-gray-500">₹{price.inr.toFixed(2)}</p>
                </div>
                <div
                  className={`text-xl font-semibold ${price.usd_24h_change > 0 ? "text-green-500" : "text-red-500"}`}
                >
                  <p>{price.usd_24h_change.toFixed(2)}%</p>
                  {price.usd_24h_change > 0 ? (
                    <span className="text-green-500">↑</span>
                  ) : (
                    <span className="text-red-500">↓</span>
                  )}
                </div>
              </div>

              <hr className="my-6" />

              {/* Chart Section */}
              <ChartSection />
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>

       
        <div className="w-[30%] flex flex-col ml-4">
          
          <div className="h-[100%] bg-white p-6 rounded-lg shadow-lg mb-4">
            <GetStarted />
          </div>

          
          <div className="h-[50%] bg-white p-6 rounded-lg shadow-lg">
            <TrendingCoins />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
