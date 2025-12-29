import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import WorkSection from "./components/Work";
import FAQSection from "./components/FAQsection";

const App = () => {
  return (
    <main className="max-w-6xl h-dvh mx-auto py-8 px-10 flex flex-col space-y-6">
      <Header />
      <HeroSection />
      <Features />
      <WorkSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default App;
