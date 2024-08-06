import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Button from "@mui/material/Button";
import { themeChange } from "theme-change";
import MediaControlCard from "./components/cardmedia";
import PaddingComponent from "./PaddingComponents";
import "./App.css";

const App = () => {
  const [isDark, setisDark] = useState(true);
  useEffect(() => {
    themeChange(false);
  });

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
          <li>
            <select
              className="m-2 gradientselect"
              data-choose-theme
            >
              <option
                disabled
                value=""
              >
                Pick a theme
              </option>
              <option value="">Default</option>
              <option value="light">Light</option>
              <option value="lemonade">Lemonade</option>
              <option value="valentine">Valentine</option>
              <option value="bumblebee">BZzzz</option>
            </select>
          </li>
        </ul>
      </div>
      <main className="p-5 smaller-margin">
        <div className="flex justify-center p-2 shadow-xl bg-primary">
          <img
            className="object-contain h-48 w-96"
            src="/images/nmills media_logo Concept 7.png"
          />
          <div className="clear-right text-secondary">
            <h1 className="text-7xl">Nathaniel Mills</h1>
            <h1 className="text-7xl">Full Stack Engineer</h1>

            <h1 className="text-2xl">
              'Perpetual optimism is a force multipler'
            </h1>
            <h1 className="text-sm italic"> Colin Powell</h1>
          </div>
        </div>
      </main>

      <div
        className="container big-margin"
        id="about"
      >
        {/* <h1 className="m-6 text-6xl">About Me</h1> */}
        <div className="flex justify-center pt-4 mt-5 row">
          <div className="shadow-xl card bg-accent/30">
            <p className="text-3xl">
              My name is Nate Mills! Full stack web developer with a
              passion for tech and learning new frameworks. Proficient in
              JavaScript, TypeScript, React, Express, SQL and Node. I'm focused
              on finding solutions to complex problems, and creating impactful
              software.
            </p>
          </div>
        </div>
      </div>

      <div
        className="container big-margin"
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
        id="contact"
      >
        <PaddingComponent />
      </div>
    </div>
  );
};

export default App;
