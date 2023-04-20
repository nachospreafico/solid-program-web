import { NavLink } from "react-router-dom";
import "./styles/Banner.css";

const Banner = () => {
  return (
    <NavLink to="/programs" className="banner">
      Mira nuestros Programas!
    </NavLink>
  );
};

export default Banner;
