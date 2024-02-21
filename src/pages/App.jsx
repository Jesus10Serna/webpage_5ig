
import '../style/app.css';

import Header from "../components/header";
import Footer from "../components/footer";
import Banner from "../pages/banner";
import Contact from "../components/contact_us";
import Services from "../pages/services";
import call_Contact from "../components/access_contact.jsx";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function App() {
  const params = useParams();
  useEffect(() => {
    console.log(params)
    if (params.toService === "to-service") {
      setTimeout(() => {
        const component = document.querySelector(".services-container");
        if (component) {
          component.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else if (params.toService === "to-contact") {
      setTimeout(() => {
        const component = document.querySelector(".contact-us-container");
        if (component) {
          component.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [params]);

  return (
    <div className="App">
      <Header handleRedirect2={call_Contact} />
      <Banner />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
