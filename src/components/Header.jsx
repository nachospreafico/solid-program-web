import NavBar from "./NavBar";
import HeaderLogo from "/src/assets/images/Solid-Logo-Header.png";
import { NavLink } from "react-router-dom";
import "./styles/Header.css";

const Header = () => {
  return (
    <div className="header-container" id="Header">
      <NavLink to={"/"}>
        <img src={HeaderLogo} className="header-logo"></img>
      </NavLink>
      <div className="join-now-container">
        <NavLink to={"/programs"} className="join-now-btn">
          Unete Ahora
        </NavLink>
      </div>
      <NavBar />
    </div>
  );
};

export default Header;
