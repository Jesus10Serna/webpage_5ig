import React from "react";
import Advantages from "../pages/advantages";
import Benefits from "../pages/benefits";
import Header from "../components/header";
import Footer from "../components/footer";
import Contact from "../components/contact_us";



const WorkWithUS = () => {
  const handleRedirect2 = (sectionId) => {
    const section = document.getElementsByClassName(sectionId);
    console.log("Section Id:",sectionId);
    console.log(section);
    const firstElement = section instanceof HTMLCollection ? section[0] : section;
    if (section) {
      firstElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="work-with-us-container">
      <Header handleRedirect2={handleRedirect2}></Header>
      <Benefits></Benefits>
      <Advantages></Advantages>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default WorkWithUS;