import React from "react";
import Logo from "../components/logo_about_us.svg";
import "../style/about.css";
import { useTranslation } from 'react-i18next';

const AboutUS = () => {
  const { t } = useTranslation();
  return (
    <div className="about-container">
      <div className="about-title">
        <div className="line_1"></div>
        <h2>{t('QS_TITLE')}</h2>
        <div className="line_2"></div>
      </div>

      <div className="about-portfolio">
        <div className="about-portfolio-height image">
          <img src={Logo} alt="" />
        </div>
        <div className="about-portfolio-height valores">
          <h1>{t('QS_VALUES')}</h1>
          <p className="about-text-valores">
            {t('QS_VALUES_DESCR')}
          </p>
        </div>
        <div className="about-portfolio-height mision">
          <h1>{t('QS_MISION')}</h1>
          <p className="about-text-mision">
            {t('QS_MISION_DESCR')}
          </p>
        </div>
        <div className="about-portfolio-height vision">
          <h1>{t('QS_VISION')}</h1>
          <p className="about-text-vision">
            {t('QS_VISION_DESCR')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
