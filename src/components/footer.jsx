import React from "react";
import logo5ig from "./logo5ig.svg";
import "../style/footer.css";

const footer = () => {
  return (
    <div className="footer-container">
      <div>
        <img className="logo-5ig-footer" src={logo5ig} alt="Logo_5ig"></img>
      </div>
    </div>
  );
};

export default footer;
