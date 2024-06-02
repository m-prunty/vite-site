import React from "react";
import "../styles/Home.css";
import { Socials } from "../components/Socials";
import { ReactTyped } from "react-typed";

function Home() {
  //const textArray = ["from", "the", "kitchen", "to", "the", "command", "line","▮"]
  const textArray = ["from the kitchen to the command line"]
  return (
    <div className="home">
      <div className="home_hd">
      <h2> Marcus Prunty </h2>
        <div className="prompt">
        <p>
          <ReactTyped
          strings={textArray}
          typeSpeed={100}
          //loop
          //backSpeed={20}
          cursorChar="▮"
          showCursor={true}
        />
        </p>
          <Socials />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Languages</h2>
            <span> C/C++, Python, Bash, R, Java, Javascript, mySQL, MongoDB, MariaDB, HTML, CSS </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

  export default Home;
