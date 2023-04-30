import { useEffect, useState } from "react";
import ProgramsDetail from "./ProgramsDetail";
import CompetitorImg from "/src/assets/images/Nacho_AB.jpg";
import QueensImg from "/src/assets/images/Fio_Queens.png";
import FitnessImg from "/src/assets/images/Fitness-KB-Swing.jpg";
import PersonalImg from "/src/assets/images/Personal_Training.jpg";
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
    "Competitor esta diseñado para Atletas Avanzados que compitan o busquen competir en el deporte del Fitness";
  const queensText =
    "Programa diseñado para personas de cualquier nivel que quieran hacer hincapié en los grupos musculares correspondientes a Gluteos, Abdomen y Piernas.";
  const fitnessText =
    "Programa diseñado para Atletas Principiantes/Intermedios que solo dispongan de 1 hora al día para entrenar, de 3 a 5 dias a la semana.";

  return (
    <div className="programs-detail-container">
      <div className="programs-detail-header">
        <h1 className="programs-detail-title">Programas de Entrenamiento</h1>
        <h3 className="programs-detail-subtitle">
          Unete a Solid Program eligiendo el Programa que mejor se adecue a ti!
        </h3>
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
          imgSrc={PersonalImg}
          endpoint="solid-personalizados"
        />
      </div>
    </div>
  );
};

export default ProgramsDetailContainer;
