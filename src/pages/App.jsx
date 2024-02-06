// import logo from './logo.svg';
// import './App.css';

import Header from "../components/header";
import Footer from "../components/footer"
import Banner from "../pages/banner"
import Contact_us from "../components/contact_us"
import Services from "../pages/services"
import call_Contact from '../components/access_contact.jsx'

function App() {

  return (
    <div className="App">
      <Header handleRedirect2={call_Contact}/>
      <Banner/>
      <Services/> 
      <Contact_us/>   
      <Footer/>
    </div>
  );
}

export default App;
