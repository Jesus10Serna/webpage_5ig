import React from "react";
import logo5ig from "./logo5ig.svg";
import home from "./home.svg";
import insta from "./insta.svg";
import linkedin from "./linkedin.svg";
import "../style/header.css";


const Header = (props) => {

  const handleRedirect = (route, container) => {
    window.location.href = `/${route}`;

    // Esperar un breve tiempo (500 milisegundos) antes de intentar desplazarse al contenedor
    setTimeout(() => {
        // Si se proporciona un contenedor, desplazarse a él
        if (container) {
            const containerElement = document.getElementById(container);
            if (containerElement) {
                containerElement.scrollIntoView();
            } else {
                console.error(`No se encontró el contenedor con id '${container}'.`);
            }
        }
    }, 500);
  };
  

  return (
    <div className="header-container">
      <div className="header-home-container">
        <img className="img-5ig" src={home} onClick={()=>handleRedirect('')} alt="Icono_5ig"></img>
        <img className="logo-5ig" src={logo5ig} onClick={()=>handleRedirect('')} alt="Logo_5ig"></img>
      </div>
      <div className="header-contact-container">
        <button className="header-button" id="contract" onClick={()=>handleRedirect('contractus')}>Contrata con Nosotros</button>

        <button className="header-button" onClick={()=>props.handleRedirect2('services-container')}>Servicios</button>
        <button className="header-button" onClick={()=>handleRedirect('aboutus')}>¿Quienes Somos?</button>
        
        <div className="header-logos">
          <a href="https://www.instagram.com/5ig_solutions/" target="_blank" rel="noreferrer"><img src={insta} alt="Instagram" ></img></a>
          <a href="https://www.linkedin.com/company/5ig-solutions/about"  target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn"></img></a>
        </div>
      </div>
    </div>
  );
};

export default Header;
