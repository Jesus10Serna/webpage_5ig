import React from "react";
import logo5ig from "./logo5ig.svg";
import "../style/footer.css";
import insta from "./insta.svg";
import linkedin from "./linkedin.svg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleRedirect = (route) => {
    window.scrollTo(0, 0);
    navigate(route);
  };

  return (
    <div className="footer-container">
      {/* <div className="footer-info-container"> */}
      <div className="sig-solutions-datapolicy-content">
        <img
          className="logo-5ig-footer"
          src={logo5ig}
          onClick={() => handleRedirect("/")}
          alt="Logo_5ig"
        ></img>
      </div>
      <div className="policy-approval">
        <p>
          {t('FOOTER_MESSAGE')}
        </p>
      </div>
      <div className="line-middle"></div>
      {/* <div className="footer-general-info"> */}
      <div className="policy-title-links">
        <h3 className="policy-publication">{t('FOOTER_POLICIES')}</h3>
        <a href="/TerminosDeUso.docx" className="policy-link">
          {t('FOOTER_TERMS')} <br />
        </a>
        <a
          href="/PoliticaDeTratamientoDeDatosPersonales.docx"
          className="policy-link"
        >
          {t('FOOTER_DATA')}
        </a>
      </div>
      <div className="policy-logos-info">
        <div onClick={() => handleRedirect("/aboutus")}>
          <h3>{t('FOOTER_WHOWEARE')}</h3>
        </div>
        <div onClick={() => handleRedirect("/to-contact")}>
          <p>{t('FOOTER_CONTACT_US')}</p>
        </div>
        <div className="footer-logos">
          <a
            href="https://www.instagram.com/5ig_solutions/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={insta} alt="Instagram"></img>
          </a>
          <a
            href="https://www.linkedin.com/company/5ig-solutions/about"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="LinkedIn"></img>
          </a>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default Footer;
