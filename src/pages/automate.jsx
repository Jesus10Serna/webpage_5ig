import React from 'react'
import "../style/automate.css";
import "../style/banner.css";
import Brain from "../components/brain-automate.svg";
import PowerPlatform from "../components/powerplatform-automate.svg";
import Robot from "../components/robot-automate.svg";
import Chip from "../components/chip-automate.svg";
import WspIcon from "../components/wsp.svg";
import Footer from "../components/footer";
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
    <div className='content-automate'>
      <div className='automate-title'>
        <div className='mid-line-container'>      
        </div>
          <div>
          <h1>¿qué son los procesos automatizados?</h1>
          </div>
        <div className='mid-line-container'>
        </div>
      </div>
      <div className='automate-container'>
        <div>
          <div>
            <h3>Los procesos automatizados son aquellos que se realizan mediante el uso de tecnologías como:</h3>
          </div>
          <div>
            <div>
              <img src={Brain} />
              <h2>Inteligencia artificial</h2>
            </div>
            <div>
            <img src={PowerPlatform} />
              <h2>Microsoft Power Platform</h2>
            </div>
            <div>
            <img src={Robot} />
              <h2>Machine Learning</h2>
            </div>
            <div>
            <img src={Chip} />
              <h2>Plataformas Tecnológicas Innovadoras</h2>
            </div>
          </div>
          <div>
            <h3>Estos procesos permiten a las organizaciones mejorar su rendimiento, eficiencia y adaptabilidad, así como crear experiencias de cliente excepcionales y memorables.</h3>
          </div>
        </div>
        <div>
          <h2>Nuestros Clientes suelen querer</h2>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  )
}

export default automate