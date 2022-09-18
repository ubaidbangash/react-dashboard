import React from "react";
import "./Sidebar.css";

import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";
import { Link } from "react-router-dom";

function Sidebar() {
  const [{ isDark }] = useContext(ThemeContext);

  return (
    <div className={isDark ? "sidenavDark" : "sidenav"}>
      <Link to="/home">
        <a>Home</a>
      </Link>

      <Link to="/about">
        <a>About</a>
      </Link>
      <Link to="/services">
        <a>Services</a>
      </Link>
      <Link to="/clients">
        <a>Clients</a>
      </Link>

      <Link to="/contact">
        <a>Contact</a>
      </Link>
    </div>
  );
}

export default Sidebar;
