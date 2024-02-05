// import logo from './logo.svg';
// import './App.css';

import Header from "../components/header";
import Footer from "../components/footer"
import Banner from "../pages/banner"
import Contact from "../components/contact_us"
import Services from "../pages/services"
import call_Contact from '../components/access_contact.jsx'
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";


function App() {
  const params = useParams();
  useEffect(() => {
    if (params.toService) {
        setTimeout(() => {
            const component = document.querySelector('.services-container');
            if (component) {
                console.log(component);
                component.scrollIntoView({ behavior: 'smooth' });
                console.log(component);
            }
        }, 100); 
    }
}, [params]);

  return (
    <div className="App">
      <Header handleRedirect2={call_Contact}/>
      <Banner/>
      <Services/> 
      <Contact/>   
      <Footer/>
    </div>
  );
}

export default App;
