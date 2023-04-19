import { useEffect } from "react";
import MainSectionBackground from "/src/assets/images/Fio-Home.jpg";
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
      <button className="main-section-btn">UNITE AHORA</button>
    </div>
  );
};

export default MainSection;
