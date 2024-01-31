import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../style/services_content.css";
import { info } from "../pages/dataservices.js";


const Services_content = () => {

  const DynamicImage = ({ src, alt }) => {
    const [imageSrc, setImageSrc] = useState(null);
  
    useEffect(() => {
      import(`../components/${src}`)
        .then(image => {
          setImageSrc(image.default);
        })
        .catch(error => {
          console.error('Error al  Cargar la Imagen:', error);
        });
    }, [src]);   
    return (
      <img className="image_service" src={imageSrc} alt={alt} />
    );
  };


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
    endIdx = startIdx + 3;
  } else if (service === "rpa") {
    startIdx = 3;
    endIdx = startIdx + 2;
  } else if (service === "cloud") {
    startIdx = 5;
    endIdx = startIdx + 2;
  } else if (service === "bi") {
    startIdx = 7;
    endIdx = startIdx + 2;
  } else if (service === "web-app-dev") {
    startIdx = 9;
    endIdx = startIdx + 2;
  }

  if (startIdx !== undefined && endIdx !== undefined) {
    content = (
      <div className="content-services">
        <div className="parent_container">
          {info.slice(startIdx, endIdx).map((item, index) => (
          <div key={index} className={`container_content`}>
            {index % 2 === 0 ? ( 
              <>
                <DynamicImage src={item.img_source} alt="Imagen"/>
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
                <DynamicImage src={item.img_source} alt="Imagen"/>
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
        <div className="parent_container">
          {info.slice(startIdx, endIdx).map((item, index) => (
          <div key={index} className={`container_content`}>
            {index % 2 === 0 ? ( 
              <>
                <DynamicImage src={item.img_source} alt="Imagen"/>
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
                <DynamicImage src={item.img_source} alt="Imagen"/>
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
