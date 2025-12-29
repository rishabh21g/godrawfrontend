import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import WorkSection from "./components/Work";
import FAQSection from "./components/FAQsection";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Features />
        <WorkSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
};

export default App;
