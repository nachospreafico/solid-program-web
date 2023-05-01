import { useState, useEffect } from "react";
import "./styles/ProgramsDetail.css";

const ProgramsDetail = ({ title, imgSrc, endpoint, text }) => {
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
    <div className="program-card">
      <img
        src={imgSrc}
        className={`program-image${clicked ? " blurred" : ""}`}
        onClick={handleClick}
      />
      {showComponent ? (
        <h3 className="program-title">{title}</h3>
      ) : (
        <h3
          className={`program-title ${clicked == false ? "visible" : ""}`}
          onClick={handleClick}
        >
          {title}
        </h3>
      )}

      <p
        className={`program-description ${clicked == false ? "visible" : ""}`}
        onClick={handleClick}
      >
        {text}
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
