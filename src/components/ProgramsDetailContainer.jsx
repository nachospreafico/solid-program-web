import { useEffect, useState } from "react";
import ProgramsDetail from "./ProgramsDetail";
import CompetitorImg from "./../assets/images/Nacho_AB.jpg";
import QueensImg from "./../assets/images/Fio_Queens.png";
import FitnessImg from "./../assets/images/Fitness-KB-Swing.jpg";
import PersonalImg from "./../assets/images/Personal_Training.jpg";
import "./styles/ProgramsDetailContainer.css";

const ProgramsDetailContainer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 635) {
        setShowComponent(true);
      } else {
        setShowComponent(false);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const competitorText =
    "Competitor esta diseñado para Atletas Avanzados que compitan o busquen competir en el deporte del Fitness. 5 dias de entrenamiento a la semana, 90 a 120 minutos por sesión.";
  const queensText =
    "Programa diseñado para personas de cualquier nivel que quieran hacer hincapié en los grupos musculares correspondientes a Gluteos, Abdomen y Piernas.";
  const fitnessText =
    "Programa diseñado para Atletas Principiantes/Intermedios que solo dispongan de 1 hora al día para entrenar, de 3 a 5 dias a la semana.";
  const personalizadosText =
    "Programa personalizado de 3, 4 o 5 dias. Se adapta 100% a tus objetivos, disponibilidad y necesidades! Consulta más.";

  return (
    <div className="programs-detail-container">
      <div className="programs-detail-header">
        <h1 className="programs-detail-title">Programas de Entrenamiento</h1>
        <h3 className="programs-detail-subtitle">
          Unete a Solid Program eligiendo el Programa que mejor se adecue a ti!
        </h3>
      </div>

      <div className="fitr-container">
        <p className="fitr-description">
          Todos nuestros Programas son distribuidos a traves de la App de{" "}
          <a
            href="https://app.fitr.training/"
            target="_blank"
            className="fitr-link"
          >
            Fitr
          </a>{" "}
          ®
        </p>
      </div>

      <div className="instructions">
        <p className="instructions-text">
          {showComponent
            ? "Clickea las imagenes para ver más informacion sobre los Programas."
            : "Desliza para ver los Programas, clickea la imagen para ver los detalles!"}
        </p>
      </div>

      <div className="programs-list">
        <ProgramsDetail
          title="Competitor"
          imgSrc={CompetitorImg}
          endpoint="solid-comp"
          text={competitorText}
        />
        <ProgramsDetail
          title="Queens"
          imgSrc={QueensImg}
          endpoint="solid-queens"
          text={queensText}
        />
        <ProgramsDetail
          title="Fitness"
          imgSrc={FitnessImg}
          endpoint="solid-hour-5d"
          text={fitnessText}
        />
        <ProgramsDetail
          title="Personalizado"
          text={personalizadosText}
          imgSrc={PersonalImg}
          endpoint="solid-personalizados"
        />
      </div>
    </div>
  );
};

export default ProgramsDetailContainer;
