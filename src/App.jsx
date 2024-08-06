import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Button from "@mui/material/Button";
import "./App.css";

function themeComponent() {
  const [theme, setTheme] = useState("lemonade");
  const toggletheme = () => {
    setTheme(theme === "bumblebee" ? "lemonade" : bumblee);
  };

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
}

const App = () => {
  const [isDark, setisDark] = useState(true);

  return (
    <div>
      <div className="nav">
        <a
          className="site-title"
          href="/"
        >
          Portfolio
        </a>

        <ul className="ul">
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="">
        <div>
          <h1 className="text-2xl">Nathaniel Mills</h1>
          <h1 className="text-2xl">Full Stack Engineer</h1>

          <h1>'Perpetual optimism is a force multipler'</h1>
          <h1 className="text-sm italic"> Colin Powell</h1>
        </div>
      </div>

      <div
        className="container"
        id="about"
      >
        <div className="mt-5 row justify-content-center">
          <h1 className="m-6 text-6xl text-primary/60">About Me</h1>
          <div className="card">
            Hello, My name is Nate Mills! Full stack web developer with a
            passion for tech and learning new frameworks. Proficient in
            JavaScript, TypeScript, React, Express, SQL and Node. I'm focused on
            finding solutions to complex problems, and creating impactful
            software.
          </div>
        </div>
      </div>

      <div
        className="container"
        id="projects"
      >
        <div className="carousel rounded-box">
          <div className="carousel-item">
            <Button variant="contained">Hello Carousel</Button>
          </div>
        </div>
      </div>


      <div
      className="container"
      id="contact">
        
      </div>
    </div>
  );
};

export default App;
