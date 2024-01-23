import React from "react";
import Advantages from "../pages/advantages";
import Benefits from "../pages/benefits";
import Header from "../components/header";
import Footer from "../components/footer";
import Contact from "../components/contact_us";

const WorkWithUS = () => {
  return (
    <div className="work-with-us-container">
      <Header></Header>
      <Benefits></Benefits>
      <Advantages></Advantages>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default WorkWithUS;