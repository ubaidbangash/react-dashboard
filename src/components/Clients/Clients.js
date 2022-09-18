import React from "react";
import "./Clients.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";

function Clients() {
  const [{ isDark }] = useContext(ThemeContext);

  return (
    <div className={isDark ? "ClientsDark" : "Clients"}>
      <h1>Clients</h1>
    </div>
  );
}

export default Clients;
