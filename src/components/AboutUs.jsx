import { useEffect } from "react";
import AboutUsDetails from "./AboutUsDetails";
import Fiore from "/src/assets/images/Fiore-SobreNosotros.jpg";
import Nacho from "/src/assets/images/Nacho-SobreNosotros.jpg";
import "./styles/AboutUs.css";
import PhilosophySection from "./PhilosphySection";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fiorellaBio =
    "Hola, soy Fiore. Entrenadora personal y Coach y Atleta de CrossFit. Cuento con más de 8 años de experiencia en el ámbito de la Salud y el Fitness";

  const nachoBio =
    "Hola, soy Nacho. Médico y Coach y Atleta de CrossFit. Cuento con más de 8 años de experiencia en el ámbito de la Salud y el Fitness";

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
        <AboutUsDetails imgSrc={Fiore} nombre="Fiore" bio={fiorellaBio} />
        <AboutUsDetails imgSrc={Nacho} nombre="Nacho" bio={nachoBio} />
      </div>

      <PhilosophySection />
    </div>
  );
};

export default AboutUs;
