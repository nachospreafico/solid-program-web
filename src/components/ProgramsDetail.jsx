import { useState, useEffect } from "react";
import "./styles/ProgramsDetail.css";

const ProgramsDetail = ({
  key,
  title,
  imgSrc,
  endpoint,
  description,
  duration,
}) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1280) {
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
    <div className="program-card" key={key}>
      <img
        src={imgSrc}
        className={`program-image${clicked ? " blurred" : ""}`}
        onClick={handleClick}
      />
      {showComponent ? (
        <h3 className={`program-title ${clicked == true ? "transformed" : ""}`}>
          {title}
        </h3>
      ) : (
        <h3
          className={`program-title ${clicked == true ? "transformed" : ""}`}
          onClick={handleClick}
        >
          {title}
        </h3>
      )}

      <p
        className={`program-description ${clicked == false ? "visible" : ""}`}
        onClick={handleClick}
      >
        {description}
      </p>
      <p className={`program-duration ${clicked == false ? "visible" : ""}`}>
        Duracion: {duration}
      </p>
      <a
        href={`https://app.fitr.training/p/${endpoint}`}
        target="_blank"
        className="program-link"
      >
        {title === "Personalizado" ? "Consultanos" : `Unete a ${title}`}
      </a>
    </div>
  );
};

export default ProgramsDetail;
