import React from "react";
import "./Services.css";

import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";

function Services() {
  const [{ isDark }] = useContext(ThemeContext);

  return (
    <div className={isDark ? "servicesDark" : "services"}>
      <h1>Services</h1>
    </div>
  );
}

export default Services;
