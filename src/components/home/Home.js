import React from "react";
import "./Home.css";

import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";

function Home() {
  const [{ isDark }] = useContext(ThemeContext);
  return (
    <div className={isDark ? "HomeDark" : "Home"}>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
