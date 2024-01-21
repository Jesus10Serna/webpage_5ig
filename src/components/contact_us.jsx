import React from "react";
import "../style/contact-us.css";
import insta from "./insta.svg";
import linkedin from "./linkedin.svg";
import facebook from "./facebook.svg";

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
              <img src={insta} alt="Instagram"></img>
              <img src={linkedin} alt="Linkedin"></img>
              <img src={facebook} alt="Facebook"></img>
            </div>
          </div>
        </div>

        <div className="contact-us-forms"></div>
      </div>
    </div>
  );
};

export default contact_us;
