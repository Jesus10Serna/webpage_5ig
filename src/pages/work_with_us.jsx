import React from "react";
import Advantages from "../pages/advantages";
import Benefits from "../pages/benefits";
import Header from "../components/header";
import Footer from "../components/footer";
import Contact from "../components/contact_us";
import call_Contact from '../components/access_contact.jsx'



const WorkWithUS = () => {
  

  return (
    <div className="work-with-us-container">
      <Header handleRedirect2={call_Contact}></Header>
      <Benefits></Benefits>
      <Advantages></Advantages>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default WorkWithUS;