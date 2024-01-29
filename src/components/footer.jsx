import React from "react";
import logo5ig from "./logo5ig.svg";
import "../style/footer.css";
import insta from "./insta.svg";
import linkedin from "./linkedin.svg";

const footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-info-container">
        <img className="logo-5ig-footer" src={logo5ig} alt="Logo_5ig"></img>
        <div className="footer-general-info">
          <p>¿Quienes somos?</p>
          <p>Contáctanos</p>
          <div className="footer-logos">
          <a href="https://www.instagram.com/5ig_solutions/" target="_blank" rel="noreferrer"><img src={insta} alt="Instagram" ></img></a>
          <a href="https://www.linkedin.com/company/5ig-solutions/about"  target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn"></img></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
