import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import { useContext } from "react";
import { ThemeContext } from "./contexts/Theme";
import Home from "./components/home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Clients from "./components/Clients/Clients";

function App() {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

  return (
    <>
      <Router>
        <div className={isDark ? "AppDark" : "App"}>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
