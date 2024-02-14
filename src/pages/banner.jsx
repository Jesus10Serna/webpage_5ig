import React from "react";
import "../style/banner.css";
import { useNavigate } from "react-router";
import { useTranslation } from 'react-i18next';

const   Banner = () => {
  const navigate = useNavigate();
  const handleRedirect = (route) => {
    navigate(route);
  };

  const { t } = useTranslation();
  return (
    <div className="banner-container">
      <div className="banner-title">
        <div className="titles">
          <div className="title1"><h2> {t('HOME_TITLE')}</h2></div>
          <div className="title2"><h1> {t('HOME_TITLE_2')}</h1></div>
        </div>
        <div className="banner-buttons">
          <button
            className="blue-button"
            onClick={() => handleRedirect("automate")}
          >
            {t('HOME_MAIN_BUTTON')}
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
