import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import ProgramsSection from "./components/ProgramsSection";
import SelfAssesmentSection from "./components/SelfAssesmentSection";
import Contact from "./components/Contact";
import AboutUsSection from "./components/AboutUsSection";
import CommentsSection from "./components/CommentsSection";
import Banner from "./components/Banner.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <AboutUsSection />
      <ProgramsSection />
      <SelfAssesmentSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
