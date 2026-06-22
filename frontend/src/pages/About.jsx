import React from "react";
import { MDRender } from "../components/Markdown";
import md from "/resume.md";

function About() {
  return (
    <div className="about">
       <div className="about-header">
        <h1>My CV</h1>
        <p className="subtitle">Backend Developer · C / Python · Linux</p>
      </div>

      <div className="md">
        <MDRender filename={md} />
      </div>
    </div>
  );
}

export default About;
