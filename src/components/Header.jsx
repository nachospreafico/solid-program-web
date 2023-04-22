import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import HeaderLogo from "/src/assets/images/Solid-Logo-Header.png";
import { NavLink } from "react-router-dom";
import "./styles/Header.css";

const Header = () => {
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
    <div className="header-container" id="Header">
      {showComponent ? (
        <div className="header-logo-container">
          <NavLink to={"/"}>
            <img src={HeaderLogo} className="header-logo"></img>
          </NavLink>
        </div>
      ) : (
        <NavLink to={"/"}>
          <img src={HeaderLogo} className="header-logo"></img>
        </NavLink>
      )}
      {showComponent ? <div className="header-spacer"></div> : null}
      {showComponent ? <NavBar /> : null}
      <div className="join-now-container">
        <NavLink to={"/programs"} className="join-now-btn">
          Unete Ahora
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
