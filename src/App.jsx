import React from "react";
import Navbar from "./components/Navbar"; 
import PriceSection from "./components/PriceSection";
import Footer from "./components/Footer";
import PerformanceSection from "./components/PerformanceSection";
import SentimentSection from "./components/SentimentSection";
import About from "./components/About";
import Tokenomics from "./components/Tokenomics";
import Team from "./components/Team";

const App = () => {
  return (
    <>
          <Navbar />
          <PriceSection />
          <PerformanceSection />
          <SentimentSection />
          <About/>
          <Tokenomics/>
          <Team/>
        <Footer />
    </>

  );
};

export default App;
