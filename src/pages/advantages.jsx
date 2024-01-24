import React from "react";
import "../style/advantages.css";

const Advantages = () => {
  return (
    <div className="benefits-container">
      <div className="advantages-title">
        <div className="line_1"></div>
        <h2>NUESTROS BENEFICIOS</h2>
        <div className="line_2"></div>
      </div>

      <div className="benefit-portfolio">
        <div className="benefit-portfolio-height remote">
          <span className="benefit-text">Trabajo 100% remoto</span>
        </div>

        <div className="benefit-portfolio-height conectivity">
          <span className="benefit-text">Auxilio de conectividad</span>
        </div>

        <div className="benefit-portfolio-height plan">
          <span className="benefit-text">Plan de referidos</span>
        </div>

        <div className="benefit-portfolio-height company">
          <span className="benefit-text">
            Formaciones y capacitaciones brindadas por la empresa
          </span>
        </div>

        <div className="benefit-portfolio-height certfied">
          <span className="benefit-text">Certificaciones Microsoft</span>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
