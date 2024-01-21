import React from 'react'
import "../style/automate.css";
import "../style/banner.css";
import WspIcon from "../components/wsp.svg";
import Footer from "../components/footer"
import Header from '../components/header';


function automate() {
  return (
    <div className='automate'>
    <Header></Header>
    <div className='automate-top-banner'>
        <div className='blend'>
            <div className='automate-top-container'>
                <h1>AUTOMATIZA TU EMPRESA</h1>
                <button className="blue-button"><span><img src={WspIcon} alt="" /></span>Chatea con nosotros</button>
            </div>
        </div>
    </div>
    <Footer></Footer>
    </div>
  )
}

export default automate