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
import ContactUs from "../components/contact_us"
import { useTranslation } from 'react-i18next';

import call_Contact from '../components/access_contact.jsx'

  const handleRedirectWP = () => {
     window.open("https://api.whatsapp.com/send?phone=573025779018")
  };



function Automate() {
  const { t } = useTranslation();

  return (
    <div className='automate'>
    <Header handleRedirect2={call_Contact}></Header>
    <div className='automate-top-banner'>
        <div className='blend'>
            <div className='automate-top-container'>
                <h1>{t('AUT_TITLE')}</h1>
                <button 
                  className="blue-button"
                  onClick={handleRedirectWP}
                >
                  <img src={WspIcon} alt="Whatsapp Logo para chatear con nosotros" />
                  {t('AUT_BUTTON')}
                </button>
            </div>
        </div>
    </div>
    <div className='content-automate'>
      <div className='automate-title'>
        <div className='mid-line-container'>      
        </div>
          <div>
          <h1>{t('AUT_SUBTITLE')}</h1>
          </div>
        <div className='mid-line-container'>
        </div>
      </div>
      <div className='automate-container'>
        <div>
          <div>
            <h3>{t('AUT_FIRST_TEXT')}</h3>
          </div>
          <div>
            <div>
              <img src={Brain} alt="Cerebro"/>
              <h2>{t('AUT_IMG_TITLE_1')}</h2>
            </div>
            <div>
            <img src={PowerPlatform} alt="Logo de Power Platform" />
              <h2>{t('AUT_IMG_TITLE_2')}</h2>
            </div>
            <div>
            <img src={Robot} alt="Simbolo de Robot(Machine Learning)"/>
              <h2>{t('AUT_IMG_TITLE_3')}</h2>
            </div>
            <div>
            <img src={Chip} alt="MicroChip"/>
              <h2>{t('AUT_IMG_TITLE_4')}</h2>
            </div>
          </div>
          <div>
            <h3>{t('AUT_SECOND_TEXT')}</h3>
          </div>
        </div>
        <div>
          <h2>{t('AUT_FIRST_TITLE')}</h2>
          <div>
            <div className='imgAutomate'></div>
            <div>
              <ul>
                <li><h3>{t('AUT_THIRD_TEXT')}</h3></li>
                <li><h3>{t('AUT_FOUR_TEXT')}</h3></li>
              </ul>
            </div>
          </div>
        </div>
        <div>
        <h2>{t('AUT_SECOND_TITLE')}</h2>
          <div>
            <div>
              <ul>
                <li><h3>{t('AUT_FIFTH_TEXT')}</h3></li>
                <li><h3>{t('AUT_SIX_TEXT')}</h3></li>
              </ul>
            </div>
            <div className='imgAutomate'></div>
          </div>
        </div>
        <div>
        <h2>{t('AUT_THIRD_TITLE')}</h2>
          <div>
            <div className='imgAutomate'></div>
            <div>
              <ul>
                <li><h3>{t('AUT_SEVEN_TEXT')}</h3></li>
                <li><h3>{t('AUT_EIGHT_TEXT')}</h3></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ContactUs></ContactUs>
    <Footer></Footer>
   </div>
  )
}

export default Automate;