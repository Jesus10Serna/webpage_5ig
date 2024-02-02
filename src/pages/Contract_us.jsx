import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../style/contract_us.css";

const Contract_us = () => {
  return (
    <>
      <Header></Header>
      <div className="contact-us-container">
        <div className="contact-us-total">
          <div className="contact-us-set">
            <p>Lleva tu negocio a la nueva era de la tecnología</p>
            <button>Contrata Con Nosotros</button>
          </div>
          <div className="contact-us-forms">
            <form>
              <p>¿Quien nos escribe?</p>
              <input className="input-width" placeholder="Nombre"></input>
              <p>Regálanos tu correo</p>
              <input className="input-width" placeholder="E-mail"></input>
              <p>Regálanos tu Teléfono</p>
              <input className="input-width" placeholder="E-mail"></input>
              <p>Déjanos tu mensaje</p>
              <input className="input-width" placeholder="Mensaje"></input>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Contract_us;
