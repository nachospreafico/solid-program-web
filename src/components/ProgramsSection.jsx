import { NavLink } from "react-router-dom";
import "./styles/ProgramsSection.css";

const ProgramsSection = () => {
  return (
    <div className="programs-section-container">
      <h3 className="programs-section-title">MIRA NUESTROS PROGRAMAS!</h3>
      <p className="programs-section-description">
        ¡Vamos a por ello! Mira nuestros programas de entrenamiento para elegir
        el que más se ajuste a ti.
      </p>
      <NavLink to="/programs" className="programs-section-btn">
        Ver Programas
      </NavLink>
    </div>
  );
};

export default ProgramsSection;
