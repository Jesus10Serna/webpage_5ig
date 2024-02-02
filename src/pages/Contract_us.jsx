import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../style/contract_us.css";
import Formulario from "../components/form.jsx"

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
          <Formulario></Formulario>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Contract_us;
