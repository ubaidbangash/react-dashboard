import React from "react";
import "./Contact.css";

import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";

function Contact() {
  const [{ isDark }] = useContext(ThemeContext);

  return (
    <div className={isDark ? "ContactDark" : "Contact"}>
      <h1>Contact</h1>
    </div>
  );
}

export default Contact;
