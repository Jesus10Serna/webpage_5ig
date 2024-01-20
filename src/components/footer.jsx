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
            <img src={insta} alt="Home"></img>
            <img src={linkedin} alt="Home"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
