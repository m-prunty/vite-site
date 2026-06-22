import React from "react";
import { Socials } from "./Socials";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Socials />
      </div>
      <p> &copy; 2026 mprunty.com</p>
    </div>
  );
}

export default Footer;
