import { useState } from "react";
import { Link } from "react-router-dom";
import PlaceholderImage from "/src/assets/images/Solid-Logo-500x500.jpg";
import "./styles/ProgramsDetail.css";

const ProgramsDetail = ({ title, imgSrc, endpoint }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="program-card">
      <img
        src={imgSrc}
        className={`program-image${clicked ? " blurred" : ""}`}
        onClick={handleClick}
      />

      <h3
        className={`program-title ${clicked == false ? "visible" : ""}`}
        onClick={handleClick}
      >
        {title}
      </h3>
      <p
        className={`program-description ${clicked == false ? "visible" : ""}`}
        onClick={handleClick}
      >
        Texto de Prueba! Aca habria texto, pero todavia no.
      </p>
      <a
        href={`https://app.fitr.training/p/${endpoint}`}
        target="_blank"
        className="program-link"
      >
        {title === "Personalizado" ? "Consultanos" : `Unite a ${title}`}
      </a>
    </div>
  );
};

export default ProgramsDetail;
