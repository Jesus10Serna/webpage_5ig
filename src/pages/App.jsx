// import logo from './logo.svg';
// import './App.css';

import Header from "../components/header";
import Footer from "../components/footer"
import Banner from "../pages/banner"
import Contact from "../components/contact_us"
import Services from "../pages/services"

function App() {
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
    <div className="App">
      <Header handleRedirect2={handleRedirect2}/>
      <Banner/>
      <Services/> 
      <Contact/>   
      <Footer/>
    </div>
  );
}

export default App;
