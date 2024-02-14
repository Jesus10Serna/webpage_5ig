import React from "react";
import "../style/services.css";
import { useNavigate } from "react-router";
import { useTranslation } from 'react-i18next';

const Services = () => {
  const navigate = useNavigate();
  const handleRedirect = (route, from_landing) => {
    navigate(route+"/"+from_landing, { replace: true });
  };

  const { t } = useTranslation();
  return (
    <div className="services-container" id="services-container">
      <div className="services-title first-child">
        <div className="line_1"></div>
        <h2>{t('HOME_SERVICES_TITLE')}</h2>
        <div className="line_2"></div>
      </div>
      <div className="services-portfolio">
        <div className="services-portfolio-height ia">
          <div className="max-container-services l">
            <h2>{t('HOME_SERVICE_IA_TITLE')}</h2>
            <button onClick={() => handleRedirect("services", "ia")}>
              {t('HOME_SERVICES_BUTTON')}
            </button>
          </div>
        </div>
        <div className="services-portfolio-height rpa">
          <div className="max-container-services r">
            <h2>{t('HOME_SERVICE_RPA_TITLE')}</h2>
            <button onClick={() => handleRedirect("services", "rpa")}>
              {t('HOME_SERVICES_BUTTON')}
            </button>
          </div>
        </div>
        <div className="services-portfolio-height cloud">
          <div className="max-container-services l">
            <h2>{t('HOME_SERVICE_CLOUD_TITLE')}</h2>
            <button onClick={() => handleRedirect("services", "cloud")}>
              {t('HOME_SERVICES_BUTTON')}
            </button>
          </div>
        </div>
        <div className="services-portfolio-height bi">
          <div className="max-container-services r">
            <h2>{t('HOME_SERVICE_BI_TITLE')}</h2>
            <button onClick={() => handleRedirect("services", "bi")}>
              {t('HOME_SERVICES_BUTTON')}
            </button>
          </div>
        </div>
        <div className="services-portfolio-height wdad">
          <div className="max-container-services l">
            <h2>{t('HOME_SERVICE_WEB_DEV_TITLE')}</h2>
            <button onClick={() => handleRedirect("services", "web-app-dev")}>
              {t('HOME_SERVICES_BUTTON')}
            </button>
          </div>
        </div>
      </div>
      <div className="services-title second-child">
        <div className="line_1"></div>
        <h2>{t('HOME_ABOUT_US')}</h2>
        <div className="line_2"></div>
      </div>
      <div className="container-about-us-grid">
        <div className="image-about-us about-us"></div>
        <div className="text-about-us">
          <p>
            {t('HOME_ABOUT_DESCRIPTION')}
          </p>
          <p>
            {t('HOME_ABOUT_DESCRIPTION_2')}
          </p>
          <h3>{t('HOME_ABOUT_DESCRIPTION_3')}</h3>

          <a href="https://www.linkedin.com/company/5ig-solutions/about">
            <button className="button-contact-us">
              <div className="img_link" alt="Encuentranos en linkedin"></div>
              <p>{t('HOME_LINKEDIN_BUTTON')}</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
