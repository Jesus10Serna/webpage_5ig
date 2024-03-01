import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../style/services_content.css";
import { info } from "../pages/dataservices.js";
import { info2 } from "../pages/dataservices.js";
import imgBanner from "../components/ia.svg";
import imgBanner1 from "../components/rpa.svg";
import imgBanner2 from "../components/cloud.svg";
import imgBanner3 from "../components/bi.svg";
import imgBanner4 from "../components/wd&ad.svg";
import arrow from "../components/arrow_contract.svg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Services_content = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleRedirect = (route) => {
      navigate(route);
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
    window.scrollTo(0, 0);
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
              onClick={() => handleRedirect("/")}
              alt="arrow_back"
            ></img>
          </div>
          <div className="title_button_container">
            <h1 style={service === "ia" ? miEstilo : {}}>{sectionTitle}</h1>
            <button onClick={() => handleRedirect("/contractus")}>
              {t('HEADER_CONTRACT')}
            </button>
          </div>
        </div>
        <div className="parent_container">
          {info.slice(startIdx, endIdx).map((item, index) => (
            <div key={index} className={`container_content`}>
              {index % 2 === 0 ? (
                <>
  
                  <DynamicImage src={item.img_source} alt="Imagen" />
                  <div className="desc_service">
                    <h2>{t(item.title)}</h2>
                    <p>{t(item.info)}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="desc_service">
                    <h2>{t(item.title)}</h2>
                    <p>{t(item.info)}</p>
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
              onClick={() => handleRedirect("/")}
              alt="arrow_back"
            ></img>
            <div className="superposition"></div>
          </div>
          <h1>{sectionTitle}</h1>
          <button>CONTRATA CON NOSOTROS </button>
          <h1 style={service === "ia" ? miEstilo : {}}>{sectionTitle}</h1>
          <button onClick={() => handleRedirect("/contractus")}>
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
                    <h2>{t(item.title)}</h2>
                    <p>{t(item.info)}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="desc_service">
                    <h2>{t(item.title)}</h2>
                    <p>{t(item.info)}</p>
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
  const findServices = (idService) => {
    const foundService = info2.find(service => service.id === idService);
    return foundService ? foundService.contentServices : null;
  };
  const services = findServices(params.service);

  const importImage = (imageName) => {
    switch (imageName) {
      case 'moreServicesRobot':
        return import("../components/more-services-robot.svg");
      case 'moreServicesBi':
        return import("../components/more-services-bi.svg");
      case 'moreServicesCloud':
        return import("../components/more-services-cloud.svg");
      case 'moreServicesIA':
      return import("../components/more-services-ia.svg");
      case 'moreServicesDev':
      return import("../components/more-services-dev.svg");
      default:
        return null;
    }
  };
  const [iconImg1, setIconImg1] = useState(null);
  const [iconImg2, setIconImg2] = useState(null);
  const [iconImg3, setIconImg3] = useState(null);
  const [iconImg4, setIconImg4] = useState(null);
  useEffect(() => {
    const importImagePath1 = importImage(services[0].img1);
    const importImagePath2 = importImage(services[0].img2);
    const importImagePath3 = importImage(services[0].img3);
    const importImagePath4 = importImage(services[0].img4);
    if (importImagePath1) {
      importImagePath1.then(module => setIconImg1(module.default));
    }
    if (importImagePath2) {
      importImagePath2.then(module => setIconImg2(module.default));
    }
    if (importImagePath3) {
      importImagePath3.then(module => setIconImg3(module.default));
    }
    if (importImagePath4) {
      importImagePath4.then(module => setIconImg4(module.default));
    }
  }, [params.service, services]);

  const styleForWebItem = {
    paddingTop: "4px",
    alignSelf: "start"
  }

  return (
    <div>
      <Header></Header>
      {content}
      <div className="more-services-background">
        <div className="more-services-container">
          <div className="more-services-title"><div></div><h1>{t('HOME_SERVICES_BUTTON')}</h1><div></div></div>
          <div className="more-services-content-grid">
            <div className="more-services-content-grid-item">
              <div className="more-services-content-grid-item-content" >
                {iconImg1 && <img src={iconImg1} alt="" />}
                <h1>{services[0].text1}</h1>
              </div>
              <button className="more-services-content-grid-item-content-button" onClick={()=>{handleRedirect(services[0].link1)}}>{t('HOME_SERVICES_BUTTON')}</button>
            </div>
            <div className="more-services-content-grid-item">
              <div className="more-services-content-grid-item-content">
              {iconImg1 && <img src={iconImg2} alt="" />}
                <h1>{services[0].text2}</h1>
              </div>
              <button className="more-services-content-grid-item-content-button" onClick={()=>{handleRedirect(services[0].link2)}}>{t('HOME_SERVICES_BUTTON')}</button>
            </div>
            <div className="more-services-content-grid-item">
              <div className="more-services-content-grid-item-content">
                {iconImg1 && <img src={iconImg3} alt="" />}
                <h1>{services[0].text3}</h1>
              </div>
              <button className="more-services-content-grid-item-content-button" onClick={()=>{handleRedirect(services[0].link3)}}>{t('HOME_SERVICES_BUTTON')}</button>
            </div>
            <div className="more-services-content-grid-item">
              <div className="more-services-content-grid-item-content">
              {iconImg1 && <img src={iconImg4} alt="" />}
                <h1> {services[0].text4}</h1>
              </div>
              <button className="more-services-content-grid-item-content-button" onClick={()=>{handleRedirect(services[0].link4)}}>{t('HOME_SERVICES_BUTTON')}</button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Services_content;
