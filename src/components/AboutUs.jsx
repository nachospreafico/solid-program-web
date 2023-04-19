import Fiore from "/src/assets/images/Fiore-SobreNosotros.jpg";
import Nacho from "/src/assets/images/Nacho-SobreNosotros.jpg";
import "./styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h3 className="about-us-title">Sobre Nosotros</h3>
        <p className="about-us-subtitle">
          Somos Fiore y Nacho, entrenadores, agentes de Salud y Atletas
        </p>
      </div>
      <div className="about-us-details-container">
        <div className="about-us-details">
          <h3 className="about-details-title">Fiorella</h3>
          <img src={Fiore} className="about-details-image"></img>
          <p className="about-details-description">
            Hola, soy Fiorella. Aguante la falopa!
          </p>
        </div>
        <div className="about-us-details">
          <h3 className="about-details-title">Fiorella</h3>
          <img src={Nacho} className="about-details-image"></img>
          <p className="about-details-desription">
            Hola, soy Fiorella. Aguante la falopa!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
