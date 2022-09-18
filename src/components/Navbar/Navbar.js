import React, { useState } from "react";
import Logo from "./icons8-menu-30.png";
import Dark from "./dark.png";
import light from "./light.png";
import "./Navbar.css";
import Sidebar from "../sidebar/Sidebar";

import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";

function Navbar() {
  const [{ isDark }, toggleTheme] = useContext(ThemeContext);

  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className={isDark ? "NavbarDark" : "Navbar"}>
      <div className={isDark ? "IconDark" : "Icon"}>
        <img
          src={Logo}
          alt="logo"
          onClick={() => {
            setOpenSidebar((prev) => !prev);
          }}
        />
      </div>
      <div className="button-dark">
        <button
          className={isDark ? "btnDark" : "btnLight"}
          type="button"
          onClick={toggleTheme}
        >
          {isDark ? <i class="fas fa-sun"></i> : <i class="fas fa-moon"></i>}
        </button>
      </div>

      {openSidebar && <Sidebar />}
    </div>
  );
}

export default Navbar;
