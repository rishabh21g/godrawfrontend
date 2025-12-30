import Header from "./components/Header";
import Footer from "./components/Footer";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import WorkSection from "./components/Work";
import FAQSection from "./components/FAQsection";
import Pricing from "./components/Pricing";
import Sponsor from "./components/Sponsor";

const App = () => {
  return (
    <main className="max-w-dvw w-full h-dvh mx-auto py-4 px-2 sm:px-6 md:px-16 lg:px-32 flex flex-col space-y-4 md:space-y-6">
      <Header />
      <HeroSection />
      <Sponsor />
      <Features />
      <WorkSection />
      <Pricing />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default App;
