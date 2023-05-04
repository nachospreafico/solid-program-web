import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import ProgramsSection from "./components/ProgramsSection";
import Contact from "./components/Contact";
import AboutUsSection from "./components/AboutUsSection";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <AboutUsSection />
      <ProgramsSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
