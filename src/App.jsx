import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import ProgramsSection from "./components/ProgramsSection";
import SelfAssesmentSection from "./components/SelfAssesmentSection";
import "./App.css";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <ProgramsSection />
      <SelfAssesmentSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
