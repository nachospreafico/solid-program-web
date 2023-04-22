import { NavLink } from "react-router-dom";
import "./styles/SelfAssesmentSection.css";

const SelfAssesmentSection = () => {
  return (
    <div className="self-section-container">
      <h3 className="self-section-title">Autoevaluacion</h3>
      <p className="self-section-description">
        Hace nuestra Autoevaluacion para que te recomendemos el programa que
        mejor se adapte a ti!
      </p>
      <NavLink to={"/programs"} className="self-section-btn">
        Realizar Autoevaluacion
      </NavLink>
    </div>
  );
};

export default SelfAssesmentSection;
