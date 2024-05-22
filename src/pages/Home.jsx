import React from "react";
import "../styles/Home.css";
import { Socials } from "../components/Socials";

function Home() {
  return (
    <div className="home">
      <div className="home_hd">
      <h2>WIP </h2>
        <div className="prompt">
        <p>Watch this space!</p>
          <Socials />
        </div>
      </div>
      
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Languages</h2>
            <span>C/C++, Python, Bash, R, Java, Javasript, mySQL, MongoDB, MariaDB, HTML, CSS</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

  export default Home;
