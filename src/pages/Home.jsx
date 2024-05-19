import React from "react";
import "../styles/Home.css";
import { Socials } from "../components/Socials";

function Home() {
  return (
    <div className="home">
      <div className="about">
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
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>C/C++, Python, Bash, R, Java, SQL, MongoDB, MariaDB</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
