import { useEffect, useRef } from "react";
import { createWidget } from "@typeform/embed";
import "./styles/SelfAssesmentSection.css";

const SelfAssesmentSection = () => {
  const typeformContainer = useRef(null);

  useEffect(() => {
    if (typeformContainer.current) {
      createWidget("https://8w2kgbnepu8.typeform.com/to/hNXshzvC", {
        container: typeformContainer.current,
      });
    }
  }, []);

  return (
    <div className="self-section-container">
      <h3 className="self-section-title">Autoevaluacion</h3>
      <p className="self-section-description">
        Hace nuestra Autoevaluacion para que te recomendemos el programa que
        mejor se adapte a ti!
      </p>
      <div className="typeform-form" ref={typeformContainer}></div>
    </div>
  );
};

export default SelfAssesmentSection;
