import React from "react";
import "../style/banner.css";
import { useNavigate } from "react-router";


const   Banner = () => {
  const navigate = useNavigate();
  const handleRedirect = (route) => {
    navigate(route);
  };
  return (
    <div className="banner-container">
      <div className="banner-title">
        <div className="titles">
          <div className="title1"><h2>COMIENZA A</h2></div>
          <div className="title2"><h1>AUTOMATIZAR TU MUNDO</h1></div>
        </div>
        <div className="banner-buttons">
          <button
            className="blue-button"
            onClick={() => handleRedirect("automate")}
          >
            Automatiza Tu Empresa
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
