import React from "react";
import { Link } from "react-router-dom";

interface AboutMeProps {}

const AboutMe = (props: AboutMeProps) => {
  // if I want some sort of state or fetching hook, it goes here!

  return (
    <div>
      <section className="">
        <h1 className="m-6 text-6xl text-primary/60">About Me</h1>
        <div className="card">
          Hello, My name is Nate Mills! Full stack web developer with a passion
          for tech and learning new frameworks. Proficient in JavaScript,
          TypeScript, React, Express, SQL and Node. I'm focused on finding
          solutions to complex problems, and creating impactful software.
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
