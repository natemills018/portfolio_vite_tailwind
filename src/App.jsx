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
import ProfileImage from "./components/profileimage";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Article from "./components/ArticleTest";
import MyCard from "./components/RevealCard";
import PortfolioBg from "./components/PortfolioBG";


const App = () => {
  const images = {
    // heere's where I'll add an array of images for gallery
  };
  const [isDark, setisDark] = useState(true);
  useEffect(() => {
    themeChange(false);
  });

  const articleData = {
    title: "React Components Explained",
    author: "Jane Doe",
    date: "2024-11-15",
    content:
      "Understanding components in React is crucial for building scalable web applications...",
    image: "https://via.placeholder.com/600x400",
  };

  // Function to handle the click event
  const handleArticleClick = () => {
    console.log("Article clicked!");
  };

  return (
    <div className="relative"> <PortfolioBg />
    {/* <div className="h-screen bg-gradient-to-tr"> */}
      <div className="flex flex-col items-center p-4 text-white nav md:flex-row">
       
        <ul className="flex flex-col gap-4 md:flex-row">
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
        </ul>
      </div>

      <main className="p-5 smaller-margin">
        {/* <ProfileImage imageURL={'/images/md -Nate Mills Headshot.png'} altText={'Profile Image'}/> */}
        {/* 
        <a
          href="/images/Mills_Nate_Technical_Resume_2024.pdf"
          className="text-6xl"
        >
          'Professional Resume'
        </a> */}

        <a
          href="/images/Mills_Nate_Technical_Resume_2024.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 mb-5 text-xl font-bold text-center text-black transition-transform duration-300 bg-gray-200 rounded-md hover:shadow-lg hover:scale-105"
        >
          <img
            src="/images/nmills media_logo Concept 7.png"
            alt="PDF Icon"
            className="w-6 h-6"
          />
          Professional Resume
        </a>

        <div className="static flex justify-center p-2 shadow-xl bg-primary">
          <img
            className="relative m-auto size-32"
            // className="object-contain h-48 w-96"
            src="/images/nmills media_logo Concept 7.png"
          />
          <div className="clear-right text-secondary">
            <h1 className="text-3xl md:text-7xl">Nathaniel Mills</h1>
            <h1 className="text-3xl md:text-7xl">Full Stack Engineer</h1>
          </div>
        </div>
      </main>

      <MyCard /> 

      <div
        className="container big-margin"
        id="about"
      >
        {/* <h1 className="m-6 text-6xl">About Me</h1> */}
        <div className="flex justify-center pt-4 mt-5 row">
          <div className="shadow-xl card bg-accent/30">
            <p className="text-2xl">
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

        <div className="flex justify-center pt-4 mt-5 space-x-6">
          <BookstoreCard />
          <ChirperCard />
          <ShapeCard />
          <TodoListCard />
        </div>
        <div className="flex justify-center pt-4 mt-5 space-x-4"></div>
      </div>

      <div
        className="container"
        id="contact"
      ></div>
    {/* </div> */}
    </div>
  );
};

export default App;
