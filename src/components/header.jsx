import React from 'react'
import logo5ig from './logo5ig.svg'
import home from './home.svg'
import insta from './insta.svg'
import linkedin from './linkedin.svg'

import './header.css'


const header = () => {
  return (
    <div className="header-container">
      <img src={home} alt="Home"></img>
      <img src={logo5ig} alt="Home"></img>
      <button>Trabaja con Nosotros </button>
      <button>¿Quienes Somos?</button>
      <button>Contáctanos</button>
      <img src={insta} alt="Home"></img>
      <img src={linkedin} alt="Home"></img>
    </div>
  )
}

export default header
