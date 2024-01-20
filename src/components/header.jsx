import React from "react";
import logo5ig from "./logo5ig.svg";
import home from "./home.svg";
import insta from "./insta.svg";
import linkedin from "./linkedin.svg";

import "./header.css";

const header = () => {
  return (
    <div className="header-container">
      <div className="header-home-container">
        <img className="img-5ig" src={home} alt="Icono_5ig"></img>
        <img className="logo-5ig" src={logo5ig} alt="Logo_5ig"></img>
      </div>
      <div className="header-contact-container">
        <button className="header-button">Trabaja con Nosotros </button>
        <button className="header-button">¿Quienes Somos?</button>
        <button className="header-button">Contáctanos</button>
        <div className="header-logos">
          <img src={insta} alt="Home"></img>
          <img src={linkedin} alt="Home"></img>
        </div>
      </div>
    </div>
  );
};

export default header;
