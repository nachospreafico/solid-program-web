import { useEffect, useState } from "react";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import ProgramsSection from "./components/ProgramsSection";
import Contact from "./components/Contact";
import AboutUsSection from "./components/AboutUsSection";
import "./App.css";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1440) {
        setShowComponent(true);
      } else {
        setShowComponent(false);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="App">
      <Header />
      <MainSection />
      {showComponent ? (
        <div className="has-1440-viewport">
          <AboutUsSection />
          <ProgramsSection />
        </div>
      ) : (
        <div>
          <AboutUsSection />
          <ProgramsSection />
        </div>
      )}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
