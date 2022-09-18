import React from "react";
import "./About.css";

import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";

function About() {
  const [{ isDark }] = useContext(ThemeContext);
  return (
    <div className={isDark ? "AboutDark" : "About"}>
      <h1>About</h1>
    </div>
  );
}

export default About;
