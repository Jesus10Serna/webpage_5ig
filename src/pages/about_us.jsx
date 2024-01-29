import React from "react";
import AboutUS from "../pages/about.jsx";
import Header from "../components/header";
import Footer from "../components/footer";
import call_Contact from '../components/access_contact.jsx'



const AboutUs= () => {
  
  return (
    <div className="about-us-container">
      <Header handleRedirect2={call_Contact}></Header>
      <AboutUS></AboutUS>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;