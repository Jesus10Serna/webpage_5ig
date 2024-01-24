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
      <div className="services-title second-child">
        <div className="line_1"></div>
        <h2>ACERCA DE NOSOTROS</h2>
        <div className="line_2"></div>
      </div>
      <div className="container-about-us-grid">
        <div className="image-about-us about-us"></div>
        <div className="text-about-us">
          <p>
            Líderes innovadores en inteligencia artificial y automatización, nos
            especializamos en automatización inteligente, RPA e inteligencia
            empresarial.
          </p>
          <p>
            Nuestra misión es simplificar los procesos organizativos para los
            clientes aprovechando tecnologías de vanguardia como la inteligencia
            artificial, el aprendizaje automático y el procesamiento del
            lenguaje natural.
          </p>
          <h3>Siempre de la mano con nuestros clientes y la tecnología</h3>
        </div>
      </div>
    </div>
  );
};

export default services;
