import React from "react";
import "../style/contact-us.css";
import insta from "./insta.svg";
import linkedin from "./linkedin.svg";
import Formulario from "../components/form.jsx"


const contact_us = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-us-total">
        <div className="contact-us-set">
          <div className="contact-us-countries">
            <h3>CONTACTANOS</h3>
            <h4>USA-MX-COL</h4>
            <p>contact@5igsolutions.com</p>
          </div>
          <div className="contact-us-social">
            <h3>SIGUENOS EN</h3>
            <div className="contact-us-logos">
              <a href="https://www.instagram.com/5ig_solutions/" target="_blank" rel="noreferrer"><img src={insta} alt="Instagram" ></img></a>
              <a href="https://www.linkedin.com/company/5ig-solutions/about"  target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn"></img></a>
            </div>
          </div>
        </div>
        <Formulario></Formulario>
        
      </div>
    </div>
  );
};

export default contact_us;
