import React from 'react'
import "../style/automate.css";
import "../style/banner.css";
import Footer from "../components/footer"
import Header from '../components/header';


function automate() {
  return (
    <div className='automate'>
    <Header></Header>
    <div className='automate-top-banner'>
        <div className='blend'>
            <div className='automate-top-container'>
                <h1>automatiza tu empresa</h1>
                <button className="blue-button">Chatea con nosotros</button>
            </div>
        </div>
    </div>
    <Footer></Footer>
    </div>
  )
}

export default automate