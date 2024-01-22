// import logo from './logo.svg';
// import './App.css';

import Header from "../components/header";
import Footer from "../components/footer"
import Banner from "../pages/banner"
import Contact from "../components/contact_us"
import Services from "../pages/services"

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Services/> 
      <Contact/>   
      <Footer/>
    </div>
  );
}

export default App;
