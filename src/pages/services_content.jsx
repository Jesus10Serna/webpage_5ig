import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../style/services_content.css";
import { info } from "../pages/dataservices.js";

const Services_content = () => {
  const params = useParams();
  const [service, setService] = useState("");
  useEffect(() => {
    console.log(params.service, ".");
    setService(params.service);
  }, [params.service]);

  let content;

  let startIdx, endIdx;

  if (service === "ia") {
    startIdx = 0;
    endIdx = 3;
  } else if (service === "rpa") {
    startIdx = 3;
    endIdx = 5;
  } else if (service === "cloud") {
    startIdx = 5;
    endIdx = 7;
  } else if (service === "bi") {
    startIdx = 7;
    endIdx = 9;
  }
 else if (service === "web-app-dev") {
  startIdx = 9;
  endIdx = 11;
}



  if (startIdx !== undefined && endIdx !== undefined) {
    content = (
      <div className="content-services">
        <div className="parent_container">
          {info.slice(startIdx, endIdx).map((item, index) => (
            <div key={index} className={`container_${startIdx + index + 1}`}>
              <img src={item.img_source} alt="Imagen" />
              <h2>{item.title}</h2>
              <p>{item.info}</p>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    content = (
      <div className="content-services">
        <div className="parent_container">
          {/* Renderizar los primeros tres elementos por defecto */}
          {info.slice(0, 3).map((item, index) => (
            <div key={index} className={`container_${index + 1}`}>
              <img src={item.img_source} alt="Imagen" />
              <h2>{item.title}</h2>
              <p>{item.info}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header></Header>
      {content}
      <Footer></Footer>
    </div>
  );
};

export default Services_content;
