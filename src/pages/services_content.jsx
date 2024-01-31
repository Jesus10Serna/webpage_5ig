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

const Services_content = () => {
  const DynamicImage = ({ src, alt }) => {
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
      import(`../components/${src}`)
        .then((image) => {
          setImageSrc(image.default);
        })
<<<<<<< HEAD
        .catch((error) => {
          console.error("Error al cargar la imagen:", error);
=======
        .catch(error => {
          console.error('Error al  Cargar la Imagen:', error);
>>>>>>> d84faa7f57b0df1382a9e06a2eeafd651f44f7fe
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
        return "INTELIGENCIA ARTIFICAL (IA) Y MACHINE LEARNING";
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

  const sectionTitle = getTitleByService();

  let content, route;

  let startIdx, endIdx;

  if (service === "ia") {
    startIdx = 0;
    endIdx = startIdx + 3;
    route = imgBanner;
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
          <h1>{sectionTitle}</h1>
          <button>CONTRATA CON NOSOTROS</button>
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
          <h1>{sectionTitle}</h1>
          <button>CONTRATA CON NOSOTROS</button>
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
      <Footer></Footer>
    </div>
  );
};

export default Services_content;
