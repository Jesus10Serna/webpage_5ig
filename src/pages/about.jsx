import React from "react";
import Logo from "../components/logo_about_us.svg";
import "../style/about.css";

const AboutUS = () => {
  const newLocal = "";
  return (
    <div className="about-container">
      <div className="about-title">
        <div className="line_1"></div>
        <h2>¿QUIÉNES SOMOS?</h2>
        <div className="line_2"></div>
      </div>

      <div className="about-portfolio">
        <div className="about-portfolio-height image">
          <img src={Logo} alt="" />
        </div>
        <div className="about-portfolio-height valores">
          <h1>Nuestros Valores</h1>
          <p className="about-text-valores">
            A través de la confianza, prácticas honestas y éticas, creamos
            soluciones rápidas y valiosas que ofrecen una ventaja competitiva
            mediante la utilización de la tecnología y la innovación humana.
          </p>
        </div>
        <div className="about-portfolio-height mision">
          <h1>Misión</h1>
          <p className="about-text-mision">
            Convertirnos en los socios de confianza líderes para habilitar la
            inteligencia artificial, la automatización y la innovación a través
            de una amplia gama de soluciones rentables.
          </p>
        </div>
        <div className="about-portfolio-height vision">
          <h1>Visión</h1>
          <p className="about-text-vision">
            Transformar la sociedad y las corporaciones con tecnología e
            innovación a una velocidad extraordinaria
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
