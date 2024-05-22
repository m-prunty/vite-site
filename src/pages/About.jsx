import React from "react";
import { MDRender } from "../components/Markdown";
import YoutubeEmbed from "../components/YTEmbed";
import md from "/site.md";

function About() {
  const pedro_embedId = "f55qeKGgB_M?list=PLpPqplz6dKxW5ZfERUPoYTtNUNvrEebAR"
  return (
    <div className="about">
      <h1> About this Site </h1>
      <div className="md">
        <MDRender filename={ md }/>
      </div>
      <div className="yt">
        <YoutubeEmbed id="pedroYT"  embedId={ pedro_embedId } />
      </div>
    </div>
  );
}

export default About;
