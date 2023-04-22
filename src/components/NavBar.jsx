import { NavLink } from "react-router-dom";
import "./styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <NavLink to="/about/" className="navbar-link">
        Sobre Nosotros
      </NavLink>
      <NavLink to="/contact/" className="navbar-link">
        Contacto
      </NavLink>
      <NavLink to="/programs/" className="navbar-link">
        Programas
      </NavLink>
      <NavLink to="/" className="navbar-link">
        Home
      </NavLink>
    </div>
  );
};

export default NavBar;
