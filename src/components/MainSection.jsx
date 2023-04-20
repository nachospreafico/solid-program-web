import { useEffect } from "react";
import MainSectionBackground from "/src/assets/images/Fio-Home.jpg";
import { NavLink } from "react-router-dom";
import "./styles/MainSection.css";

const MainSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main-section-container">
      <img src={MainSectionBackground} className="main-section-bg"></img>

      <h2 className="main-section-title">
        <span className="main-section-over-title">SOLID PROGRAM</span> <br></br>
        ESTAS LISTO PARA ENTRENAR?
      </h2>
      <p className="main-section-description">
        Programa de entrenamiento que te ofrece entrenamientos cuidadosamente
        planificados, constantemente variados, desafiantes y divertidos.
      </p>
      <NavLink to="/programs" className="main-section-btn">
        UNETE AHORA
      </NavLink>
    </div>
  );
};

export default MainSection;
