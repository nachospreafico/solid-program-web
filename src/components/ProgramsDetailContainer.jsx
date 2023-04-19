import { useEffect } from "react";
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
          Desliza para ver los Programas, pincha la imagen para ver los
          detalles!
        </p>
      </div>
      <div className="programs-list">
        <ProgramsDetail
          title="Competitor"
          imgSrc={CompetitorImg}
          endpoint="solid-comp"
        />
        <ProgramsDetail
          title="Queens"
          imgSrc={QueensImg}
          endpoint="solid-queens"
        />
        <ProgramsDetail
          title="Fitness"
          imgSrc={FitnessImg}
          endpoint="solid-hour-5d"
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
