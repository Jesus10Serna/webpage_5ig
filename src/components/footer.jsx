import React from "react";
import logo5ig from "./logo5ig.svg";
import "../style/footer.css";
import insta from "./insta.svg";
import linkedin from "./linkedin.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
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
          La gerencia aprueba la política de tratamiento de datos el 8 de
          febrero de 2024, Se publica en las respectivas plataformas para el
          acceso público.
        </p>
      </div>
      <div className="line-middle"></div>
      {/* <div className="footer-general-info"> */}
      <div className="policy-title-links">
        <h3 className="policy-publication">Políticas</h3>
        <a href="/TerminosDeUso.docx" className="policy-link">
          Términos de uso <br />
        </a>
        <a
          href="/PoliticaDeTratamientoDeDatosPersonales.docx"
          className="policy-link"
        >
          Tratamiento de datos
        </a>
      </div>
      <div className="policy-logos-info">
        <div onClick={() => handleRedirect("/aboutus")}>
          <h3>¿Quiénes somos?</h3>
        </div>
        <div onClick={() => handleRedirect("/to-contact")}>
          <p>Contáctanos</p>
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
