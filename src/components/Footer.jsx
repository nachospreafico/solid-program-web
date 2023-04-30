import { useState, useEffect } from "react";
import FooterLogo from "./../assets/images/Solid-Logo-Header.png";
import { NavLink } from "react-router-dom";
import InstagramLogo from "./../assets/images/instagram-icon.png";
import YoutubeLogo from "./../assets/images/youtube-icon.png";
import "./styles/Footer.css";

const Footer = () => {
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
    <div className="footer-container">
      <div className="footer-logo-container">
        <NavLink to="/" className="footer-logo-link">
          <img src={FooterLogo} className="footer-logo"></img>
        </NavLink>
      </div>

      <div className="footer-social-container">
        <a href="https://www.instagram.com/solid.program" target="_blank">
          <img src={InstagramLogo} className="insta-icon"></img>
        </a>
        <a href="https://www.youtube.com/@solid.program" target="_blank">
          <img src={YoutubeLogo} className="youtube-icon"></img>
        </a>
      </div>

      <div className="footer-nav-container">
        <NavLink to="/about/" className="footer-nav-link">
          Sobre Nosotros
        </NavLink>
        <NavLink to="/contact/" className="footer-nav-link">
          Contacto
        </NavLink>
        <NavLink to="/programs/" className="footer-nav-link">
          Programas
        </NavLink>
        <NavLink to="/" className="footer-nav-link">
          Home
        </NavLink>
      </div>

      <div className="footer-base">
        <p className="credits">
          Desarrollado por <strong>Ignacio Spreafico</strong>
        </p>
      </div>
    </div>
  );
};

export default Footer;
