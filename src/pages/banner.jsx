import React from "react";
import "../style/banner.css";

const banner = () => {
  const handleRedirect = (route) => {
    window.location.href = `/${route}`;
  };
  return (
    


    <div className="banner-container">
      <div className="banner-title">
        <div className="titles">
          <h2>COMIENZA A</h2>
          <h1>AUTOMATIZAR TU MUNDO</h1>
        </div>
        <div className="banner-buttons">
          <button className="yellow-button" >Trabaja Con Nosotros</button>
          <button className="blue-button" onClick={()=>handleRedirect('automate')}>Automatiza Tu Empresa</button>
        </div>
      </div>
    </div>
  );
};

export default banner;
