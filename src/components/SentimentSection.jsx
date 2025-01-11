import React from "react";
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle } from "react-icons/fa";

const SentimentSection = () => {
  return (
    <section className="bg-gray-100 py-8">
    
      <div className="w-[70%] bg-white p-6 rounded-lg shadow-lg ml-20">
        
        <h1 className="text-2xl font-bold mb-6">Sentiment</h1>

        {/* Key Events Section */}
        <h2 className="text-xl font-semibold mb-4">Key Events</h2>
        <div className="flex gap-6">
          {/* Event Card 1 */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-md w-full">
            <div className="flex items-start">
              <FaCheckCircle className="text-blue-500 text-3xl mr-4" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Event 1</h3>
                <p className="text-gray-600">
                  This is a brief description of Event 1. It explains the key details and significance of the event in a concise manner.
                </p>
              </div>
            </div>
          </div>

          {/* Event Card 2 */}
          <div className="bg-green-100 p-6 rounded-lg shadow-md w-full">
            <div className="flex items-start">
              <FaInfoCircle className="text-green-500 text-3xl mr-4" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Event 2</h3>
                <p className="text-gray-600">
                  This is a brief description of Event 2. It provides an overview of what happened and its importance.
                </p>
              </div>
            </div>
          </div>

          {/* Event Card 3 */}
          <div className="bg-red-100 p-6 rounded-lg shadow-md w-full">
            <div className="flex items-start">
              <FaExclamationCircle className="text-red-500 text-3xl mr-4" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Event 3</h3>
                <p className="text-gray-600">
                  This is a brief description of Event 3. It highlights critical updates or warnings relevant to the sentiment analysis.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Analyst Estimates Section */}
        <h2 className="text-xl font-semibold mt-8 mb-4">Analyst Estimates</h2>
        <div className="flex items-center gap-6">
         
          <div className="relative flex items-center justify-center w-24 h-24 bg-green-100 rounded-full">
            <p className="text-xl font-bold text-green-500">76%</p>
          </div>

          
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center">
              <span className="w-16 text-green-500 font-semibold">Buy</span>
              <div className="w-full bg-gray-300 h-2 rounded-lg overflow-hidden">
                <div className="bg-green-500 h-2" style={{ width: "76%" }}></div>
              </div>
            </div>
            <div className="flex items-center">
              <span className="w-16 text-gray-500 font-semibold">Hold</span>
              <div className="w-full bg-gray-300 h-2 rounded-lg overflow-hidden">
                <div className="bg-gray-500 h-2" style={{ width: "8%" }}></div>
              </div>
            </div>
            <div className="flex items-center">
              <span className="w-16 text-red-500 font-semibold">Sell</span>
              <div className="w-full bg-gray-300 h-2 rounded-lg overflow-hidden">
                <div className="bg-red-500 h-2" style={{ width: "16%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SentimentSection;
