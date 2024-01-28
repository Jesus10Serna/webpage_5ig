import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../style/services_content.css'

const Services_content = () => {
  const params = useParams();
  const [service, setService] = useState("");
  useEffect(() => {
    console.log(params.service,".");
    setService(params.service);
  }, [params.service]);

  let content;

  if (params.service === "ia") {
    content = (
      <div className="content-services">
        <div className="container_1"></div>
        <div className="container_2"></div>
        <div className="container_3"></div>
      </div>
    );
  } else {
    content = (
      <div className="content-services">
        <div className="container_1"></div>
        <div className="container_2"></div>
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
