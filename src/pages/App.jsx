// import logo from './logo.svg';
// import './App.css';

import Header from "../components/header";
import Footer from "../components/footer"
import Banner from "../pages/banner"
import Contact from "../components/contact_us"

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>  
      <Contact/>   
      <Footer/>
    </div>
  );
}

export default App;
