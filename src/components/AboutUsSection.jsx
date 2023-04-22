import { NavLink } from "react-router-dom";
import "./styles/AboutUsSection.css";

const AboutUsSection = () => {
  return (
    <div className="about-section-container">
      <h3 className="about-section-title">Encantados en Conocerte!</h3>
      <p className="about-section-description">
        Hola, somos Fiore y Nacho. Creemos que entrenar es una parte fundamental
        de la salud y bienestar. ¡Únete a nuestro entrenamiento en línea!
      </p>
      <NavLink to="/about" className="about-section-btn">
        Conocenos
      </NavLink>
    </div>
  );
};

export default AboutUsSection;
