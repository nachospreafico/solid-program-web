import { useEffect } from "react";
import AboutUsDetails from "./AboutUsDetails";
import PhilosophySection from "./PhilosphySection";
import aboutUsDetails from "./descriptions/aboutUsDetails";
import "./styles/AboutUs.css";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h3 className="about-us-title">Sobre Nosotros</h3>
        <p className="about-us-subtitle">
          Somos Fiore y Nacho, entrenadores, agentes de Salud y Atletas
        </p>
      </div>

      <div className="details-instructions">
        <p className="details-instructions-text">
          Clickea sobre las fotos para más detalles!
        </p>
      </div>

      <div className="about-us-list-container">
        {aboutUsDetails.map((elem) => {
          return (
            <AboutUsDetails
              name={elem.name}
              bio={elem.bio}
              img={elem.img}
              key={elem.name}
            />
          );
        })}
      </div>

      <PhilosophySection />
    </div>
  );
};

export default AboutUs;
