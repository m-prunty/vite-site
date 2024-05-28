import React from "react";
import { Socials } from "./Socials";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Socials />
      </div>
      <p> &copy; 2024 marcusprunty.co.uk</p>
    </div>
  );
}

export default Footer;
