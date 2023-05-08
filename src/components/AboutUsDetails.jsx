import { useState } from "react";
import "./styles/AboutUsDetails.css";

const AboutUsDetails = ({ img, name, bio }) => {
  const [isClicked, setIsClicked] = useState(false);

  function handleIsClicked() {
    setIsClicked(!isClicked);
  }

  return (
    <div className="about-us-details-container">
      <h3
        className={`about-details-title${
          isClicked == true ? " transformed" : ""
        }`}
        onClick={handleIsClicked}
      >
        {name}
      </h3>
      <img
        src={img}
        className={`about-details-image${isClicked ? " blurred" : ""}`}
        onClick={handleIsClicked}
      ></img>
      <p
        className={`about-details-description${
          isClicked == false ? " visible" : ""
        }`}
        onClick={handleIsClicked}
      >
        {bio}
      </p>
    </div>
  );
};

export default AboutUsDetails;
