import React, { useEffect, useRef, useState } from "react";
import logo5ig from "./logo5ig.svg";
import home from "./home.svg";
import insta from "./insta.svg";
import linkedin from "./linkedin.svg";
import "../style/header.css";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Header = (props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const[showMenu, setShowMenu] = useState(false)

  const handleRedirect = (route) => {
    navigate(route);
  };

  const elementoRef = useRef(null);

  useEffect(() => {
    // Función para manejar los clics en toda la página
    const handleClickOutside = (event) => {
      console.log(event.target);
      if (elementoRef.current && !elementoRef.current.contains(event.target) &&
      !event.target.classList.contains('menuHeaderPhone')) {
        // Si el clic ocurre fuera del elemento deseado, cambiar el estado
        setShowMenu(false);
      }
    };

    // Agregar event listener al montar el componente
    document.addEventListener('click', handleClickOutside);

    // Limpiar event listener al desmontar el componente
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []); // Se ejecuta solo al montar y desmontar el componente

  return (
    <>
    <div className={`blur-background ${showMenu && "active"}`}></div>
      <div className="header-container">
        <div className="header-home-container">
          <img className="img-5ig" src={home} onClick={() => handleRedirect('/')} alt="Icono_5ig"></img>
          <img className="logo-5ig" src={logo5ig} onClick={() => handleRedirect('/')} alt="Logo_5ig"></img>
        </div>
        <div className="header-contact-container">
          <button className="header-button" id="contract" onClick={() => handleRedirect('/contractus')}>{t('HEADER_CONTRACT')}</button>

          <button className="secondary-header-button" onClick={() => handleRedirect('/to-service')}>{t('HEADER_SERVICES')}</button>
          <button className="secondary-header-button" onClick={() => handleRedirect('/aboutus')}>{t('HEADER_WHOWEARE')}</button>

          <div className="header-logos">
            <a href="https://www.instagram.com/5ig_solutions/" target="_blank" rel="noreferrer"><img src={insta} alt="Instagram" ></img></a>
            <a href="https://www.linkedin.com/company/5ig-solutions/about" target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn"></img></a>
          </div>
        </div>
        <img className="menuHeaderPhone" src="/img/Menu_svg.svg" alt="" onClick={() => setShowMenu(!showMenu)}/>

      </div>
      <div className={`header-contact-container_phone ${showMenu && "active"}`} ref={elementoRef}>
        <button className="header-button" id="contract" onClick={() => handleRedirect('/contractus')}>{t('HEADER_CONTRACT')}</button>

        <button className="secondary-header-button" onClick={() => handleRedirect('/to-service')}>{t('HEADER_SERVICES')}</button>
        <button className="secondary-header-button" onClick={() => handleRedirect('/aboutus')}>{t('HEADER_WHOWEARE')}</button>

        <div className="header-logos">
          <a href="https://www.instagram.com/5ig_solutions/" target="_blank" rel="noreferrer"><img src={insta} alt="Instagram" ></img></a>
          <a href="https://www.linkedin.com/company/5ig-solutions/about" target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn"></img></a>
        </div>
      </div>
    </>
  );
};

export default Header;
