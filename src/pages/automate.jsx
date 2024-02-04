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
import Contact from "../components/contact_us"

import call_Contact from '../components/access_contact.jsx'


function automate() {

  return (
    <div className='automate'>
    <Header handleRedirect2={call_Contact}></Header>
    <div className='automate-top-banner'>
        <div className='blend'>
            <div className='automate-top-container'>
                <h1>AUTOMATIZA TU EMPRESA</h1>
                <button 
                  className="blue-button"
                >
                  <img src={WspIcon} alt="Whatsapp Logo para chatear con nosotros" />
                  Chatea con nosotros
                </button>
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
              <img src={Brain} alt="Cerebro"/>
              <h2>Inteligencia artificial</h2>
            </div>
            <div>
            <img src={PowerPlatform} alt="Logo de Power Platform" />
              <h2>Microsoft Power Platform</h2>
            </div>
            <div>
            <img src={Robot} alt="Simbolo de Robot(Machine Learning)"/>
              <h2>Machine Learning</h2>
            </div>
            <div>
            <img src={Chip} alt="MicroChip"/>
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
            <div>
              <ul>
                <li><h3>Adquirir las habilidades y conocimientos necesarios para aprovechar las oportunidades que ofrecen las tecnologías de automatización, y crear soluciones que se ajusten a sus necesidades y objetivos específicos. Para ello, puede ser útil ofrecerles formación, asesoramiento y recursos que les ayuden a entender cómo funcionan los procesos automatizados, qué factores influyen en sus resultados y cómo optimizar su rendimiento y valor.</h3></li>
                <li><h3>Acompañamiento al enfrentarse a barreras técnicas, organizativas o regulatorias para implementar los procesos automatizados en sus procesos y sistemas.  Para ello, puede ser útil proporcionarles una visión estratégica, un marco de gobernabilidad y una plataforma tecnológica que les permitan integrar los procesos automatizados con sus sistemas existentes y cumplir con las normas y regulaciones.</h3></li>
              </ul>
            </div>
          </div>
        </div>
        <div>
        <h2>Nuestros Clientes sueñan con</h2>
          <div>
            <div>
              <ul>
                <li><h3>Ser un líder en su industria o campo gracias a la innovación y la transformación digital impulsadas por los procesos automatizados. Para ello, puede ser útil inspirarles con ejemplos de casos de éxito, mostrarles los beneficios y el potencial de los procesos automatizados, y animarles a experimentar y a innovar con las tecnologías de automatización</h3></li>
                <li><h3>Lograr una armonía y una sinergia entre los procesos automatizados y los humanos, y crear una cultura de colaboración y empoderamiento. Para ello, puede ser útil involucrarles en el diseño, la implementación y el mantenimiento de los procesos automatizados, explicarles el propósito y el valor de los procesos automatizados, y reconocer y recompensar sus contribuciones y logros</h3></li>
              </ul>
            </div>
            <div></div>
          </div>
        </div>
        <div>
        <h2>Nuestros Clientes temen</h2>
          <div>
            <div></div>
            <div>
              <ul>
                <li><h3>Perder el control o la confianza en los procesos automatizados, y que estos causen errores, daños o perjuicios. Tu audiencia puede tener dudas o preocupaciones sobre la fiabilidad, la seguridad y la responsabilidad de los procesos automatizados, y temer que estos fallen, se desvíen o se vuelvan en su contra. Para ello, puede ser útil garantizarles la calidad, la transparencia y la trazabilidad de los procesos automatizados, establecer mecanismos de control, supervisión y auditoría de los procesos automatizados, y definir normas y protocolos de actuación en caso de incidencias o emergencias</h3></li>
                <li><h3>Ser reemplazado o desplazado por los procesos automatizados, y perder su relevancia o competitividad en el mercado. Tu audiencia puede sentirse amenazada o desvalorizada por los procesos automatizados, y temer que estos les quiten su trabajo, su rol o su posición.  Para ello, puede ser útil asegurarles que los procesos automatizados no pretenden sustituirles sino complementarles, identificar y desarrollar sus fortalezas y capacidades diferenciales, y ofrecerles oportunidades de crecimiento y desarrollo profesional</h3></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Contact></Contact>
    <Footer></Footer>
    </div>
  )
}

export default automate;