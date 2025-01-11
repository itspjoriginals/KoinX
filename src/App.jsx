import React from "react";
import Navbar from "./components/Navbar"; 
import PriceSection from "./components/PriceSection";
import Footer from "./components/Footer";
import PerformanceSection from "./components/PerformanceSection";
import SentimentSection from "./components/SentimentSection";

const App = () => {
  return (
    <>
          <Navbar />
          <PriceSection />
          <PerformanceSection />
          <SentimentSection />
        <Footer />
    </>

  );
};

export default App;
