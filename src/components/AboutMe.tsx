import React from "react";
import { Link } from "react-router-dom";

interface AboutMeProps {}

const AboutMe = (props: AboutMeProps) => {
  // if I want some sort of state or fetching hook, it goes here!

  return (
    <div>
      <main className="">
        <h1>About Me!</h1>
        <p>
          Hello, My name is Nate Mills! Full stack web developer with a passion
          for tech and learning new frameworks. Proficient in JavaScript,
          TypeScript, React, Express, SQL and Node. I'm focused on finding
          solutions to complex problems, and creating impactful software.
        </p>
      </main>
    </div>
  );
};

export default AboutMe;
