import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../style/services_content.css";
import { info } from "../pages/dataservices.js";
import imgBanner from "../components/ia.svg";
import imgBanner1 from "../components/rpa.svg";
import imgBanner2 from "../components/cloud.svg";
import imgBanner3 from "../components/bi.svg";
import imgBanner4 from "../components/wd&ad.svg";
import arrow from "../components/arrow_contract.svg";

const Services_content = () => {
  const handleRedirect = (route) => {
    window.location.href = `/${route}`;
  };

  const DynamicImage = ({ src, alt }) => {
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
      import(`../components/${src}`)
        .then((image) => {
          setImageSrc(image.default);
        })
        .catch((error) => {
          console.error("Error al cargar la imagen:", error);
        });
    }, [src]);
    return <img className="image_service" src={imageSrc} alt={alt} />;
  };

  const params = useParams();
  const [service, setService] = useState("");
  useEffect(() => {
    console.log(params.service, ".");
    setService(params.service);
  }, [params.service]);

  const getTitleByService = () => {
    switch (service) {
      case "ia":
        return "INTELIGENCIA ARTIFICAL (IA) Y MACHINE LEARNING (LM)";
      case "rpa":
        return "ROBOTIC PROCESS AUTOMATION (RPA)";
      case "cloud":
        return "CLOUD SOLUTIONS";
      case "bi":
        return "BUSINESS INTELLIGENCE (BI)";
      case "web-app-dev":
        return "WEB DEVELOPMENT Y APP DEVELOPMENT";
      default:
        return "";
    }
  };

  const miEstilo = {
    width: "",
  };

  const sectionTitle = getTitleByService();

  let content, route, startIdx, endIdx;

  if (service === "ia") {
    startIdx = 0;
    endIdx = startIdx + 3;
    route = imgBanner;
    miEstilo.width = "46.125rem";
  } else if (service === "rpa") {
    startIdx = 3;
    endIdx = startIdx + 2;
    route = imgBanner1;
  } else if (service === "cloud") {
    startIdx = 5;
    endIdx = startIdx + 2;
    route = imgBanner2;
  } else if (service === "bi") {
    startIdx = 7;
    endIdx = startIdx + 2;
    route = imgBanner3;
  } else if (service === "web-app-dev") {
    startIdx = 9;
    endIdx = startIdx + 2;
    route = imgBanner4;
  }

  if (startIdx !== undefined && endIdx !== undefined) {
    content = (
      <div className="content-services">
        <div className="img-banner">
          <img src={route} alt="" />
          <div className="arrow-container">
            <img
              className="back-link"
              src={arrow}
              onClick={() => handleRedirect("")}
              alt="arrow_back"
            ></img>
          </div>
          <h1 style={service === "ia" ? miEstilo : {}}>{sectionTitle}</h1>
          <button onClick={() => handleRedirect("contractus")}>
            Contrata Con Nosotros
          </button>
        </div>
        <div className="parent_container">
          {info.slice(startIdx, endIdx).map((item, index) => (
            <div key={index} className={`container_content`}>
              {index % 2 === 0 ? (
                <>
                  <DynamicImage src={item.img_source} alt="Imagen" />
                  <div className="desc_service">
                    <h2>{item.title}</h2>
                    <p>{item.info}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="desc_service">
                    <h2>{item.title}</h2>
                    <p>{item.info}</p>
                  </div>
                  <DynamicImage src={item.img_source} alt="Imagen" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    content = (
      <div className="content-services">
        <div className="img-banner">
          <img src={route} alt="" />
          <div className="arrow-container">
            <img
              className="back-link"
              src={arrow}
              onClick={() => handleRedirect("")}
              alt="arrow_back"
            ></img>
          </div>
          <h1>{sectionTitle}</h1>
          <button>CONTRATA CON NOSOTROS </button>
          <h1 style={service === "ia" ? miEstilo : {}}>{sectionTitle}</h1>
          <button onClick={() => handleRedirect("contractus")}>
            CONTRATA CON NOSOTROS
          </button>
        </div>
        <div className="parent_container">
          {info.slice(startIdx, endIdx).map((item, index) => (
            <div key={index} className={`container_content`}>
              {index % 2 === 0 ? (
                <>
                  <DynamicImage src={item.img_source} alt="Imagen" />
                  <div className="desc_service">
                    <h2>{item.title}</h2>
                    <p>{item.info}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="desc_service">
                    <h2>{item.title}</h2>
                    <p>{item.info}</p>
                  </div>
                  <DynamicImage src={item.img_source} alt="Imagen" />
                </>
              )}
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
      <div className="more-services-background">
        <div className="more-services-container">
          <div className="more-services-title"><div></div><h1>más servicios</h1><div></div></div>
          <div className="more-services-content"></div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Services_content;
