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
import ExperienceComponent from "./components/ExperienceComponent";
import BookstoreCard from "./components/cardmediawithoutimage";
import ChirperCard from "./components/ChriperCard";
import ShapeCard from "./components/shapeCard";
import TodoListCard from "./components/todolistCard";
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
          className="text-4xl site-title"
          href="/"
        >
          Portfolio
        </a>

        <ul className="ul">
          <li>
            <a
              className="text-xl"
              href="#about"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              className="text-xl"
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="text-xl"
              href="#contact"
            >
              Contact
            </a>
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
              My name is Nate Mills! Full stack web developer with a passion for
              tech and learning new frameworks. Proficient in JavaScript,
              TypeScript, React, Express, SQL and Node. I'm focused on finding
              solutions to complex problems, and creating impactful software.
            </p>
          </div>
        </div>
        <ExperienceComponent />
        <PaddingComponent />
        
      </div>

      <div
        className="container bigger-margin"
        id="projects"
      >
        <h1 className="p-10 text-6xl text-info">
          {" "}
          Check out some of these Projects!
        </h1>
        <div className="flex justify-center pt-4 mt-5 space-x-4">
          <BookstoreCard />
          <ChirperCard />
        </div>
        <div className="flex justify-center pt-4 mt-5 space-x-4">
          <ShapeCard />
          <TodoListCard />
        </div>
      </div>

      <div
        className="container"
        id="contact"
      >
        
      </div>
    </div>
  );
};

export default App;
