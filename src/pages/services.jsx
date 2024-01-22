import React from "react";
import "../style/services.css";

const services = () => {
  return (
    <div className="services-container">
      <div className="services-title">
        <div className="line_1"></div>
        <h2>SERVICIOS</h2>
        <div className="line_2"></div>
      </div>
      <div className="services-portfolio">
        <div className="services-portfolio-height ia"></div>
        <div className="services-portfolio-height rpa"></div>
        <div className="services-portfolio-height cloud"></div>
        <div className="services-portfolio-height bi"></div>
        <div className="services-portfolio-height wdad"></div>
      </div>
    </div>
  );
};

export default services;
