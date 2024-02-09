import React from "react";
import WspIcon from "../components/wsp.svg";
import "../style/benefits.css";

const Benefits = () => {
  return (
    <div className="benefits-primary-container">
      <div className="work-with-us-banner">
        <h1>TRABAJA CON NOSOTROS</h1>
        <button className="blue-button">
          <span>
            <img src={WspIcon} alt="wspImg"/>
          </span>
          Chatea con nosotros
        </button>
      </div>
    </div>
  );
};

export default Benefits;
