import React from "react";
import "../style/services.css";

const services = () => {
  const handleRedirect = (route, button) => {
    window.location.href = `/${route}`;
    console.log(button)
  };
  return (
    <div className="services-container">
      <div className="services-title">
        <div className="line_1"></div>
        <h2>SERVICIOS</h2>
        <div className="line_2"></div>
      </div>
      <div className="services-portfolio">
        <div className="services-portfolio-height ia">
          <div className="max-container-services l">
            <h2>INTELIGENCIA ARTIFICIAL (IA) Y MACHINE LEARNING (ML)</h2>
            <button onClick={() => handleRedirect("services/ml")}>Más Informacion</button>
          </div>
        </div>
        <div className="services-portfolio-height rpa">
        <div className="max-container-services r">
            <h2>ROBOTIC PROCESS AUTOMATION (RPA)</h2>
            <button onClick={() => handleRedirect("services/rpa")}>Más Informacion</button>
          </div>
        </div>
        <div className="services-portfolio-height cloud">
          <div className="max-container-services l">
            <h2>CLOUD SOLUTIONS</h2>
            <button onClick={() => handleRedirect("services/cloud")}>Más Informacion</button>
          </div>
        </div>
        <div className="services-portfolio-height bi">
        <div className="max-container-services r">
            <h2>BUSINESS INTELLIGENCE (BI)</h2>
            <button onClick={() => handleRedirect("services/bi")}>Más Informacion</button>
          </div>
        </div>
        <div className="services-portfolio-height wdad">
          <div className="max-container-services l">
            <h2>WEB DEVELOPMENT Y APP DEVELOPMENT</h2>
            <button onClick={() => handleRedirect("services/wdad")}>Más Informacion</button>
          </div>
        </div>
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

          <button className="button-contact-us">
            <div className="img_link" alt="Encuentranos en linkedin"></div>
            Encuentranos en LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default services;
