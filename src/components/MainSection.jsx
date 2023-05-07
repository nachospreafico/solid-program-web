import { useEffect, useState } from "react";
import MainSectionBackground from "./../assets/images/Fio-Home.jpg";
import MainSectionBackground2 from "./../assets/images/Nacho-Home.jpg";
import { NavLink } from "react-router-dom";
import "./styles/MainSection.css";

const MainSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 666) {
        setShowComponent(true);
      } else {
        setShowComponent(false);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="main-section-container">
      <img
        src={MainSectionBackground}
        className="main-section-bg"
        alt="Mujer entrenando"
      ></img>
      {showComponent ? (
        <div className="main-section-description-container">
          <h1 className="main-section-title">
            <span className="main-over-title">SOLID PROGRAM</span>
            <br></br>
            ESTAS LISTO PARA ENTRENAR?
          </h1>
          <p className="main-section-description">
            Programa de Entrenamiento que te ofrece entrenamientos
            cuidadosamente planificados, constantemente variados, desafiantes y
            divertidos.
          </p>
          <NavLink to="/programs" className="main-section-btn">
            UNETE AHORA
          </NavLink>
        </div>
      ) : (
        <div>
          <h1 className="main-section-title">
            <br></br>
            ESTAS LISTO PARA ENTRENAR?
          </h1>
          <p className="main-section-description">
            Programa de entrenamiento que te ofrece entrenamientos
            cuidadosamente planificados, constantemente variados, desafiantes y
            divertidos.
          </p>
          <NavLink to="/programs" className="main-section-btn">
            UNETE AHORA
          </NavLink>
        </div>
      )}
      {showComponent ? (
        <img
          className="main-section-bg-2"
          src={MainSectionBackground2}
          alt="Hombre entrenando"
        ></img>
      ) : null}
    </div>
  );
};

export default MainSection;
