import React, { useState } from "react";
import "../style/contact-us.css";
import insta from "./insta.svg";
import linkedin from "./linkedin.svg";
import facebook from "./facebook.svg";
import facebook2 from "./arrowDown.svg";
import InputComponent from "./inputComponent";
import TextAreaComponent from "./textAreaComponent";

const Contact_us = () => {
  const [openDropdown, setOpenDropdown] = useState(false)
  const [selectedPhonePrefix, setSelectedPhonePrefix] = useState()
  const options = [
    { "country": "Estados Unidos", "code": "+1" },
    { "country": "Canadá", "code": "+1" },
    { "country": "México", "code": "+52" },
    { "country": "Brasil", "code": "+55" },
    { "country": "Argentina", "code": "+54" },
    { "country": "Colombia", "code": "+57" },
    { "country": "Chile", "code": "+56" },
    { "country": "Venezuela", "code": "+58" },
    { "country": "Perú", "code": "+51" },
    { "country": "Ecuador", "code": "+593" },
    { "country": "Cuba", "code": "+53" },
    { "country": "Bolivia", "code": "+591" },
    { "country": "Costa Rica", "code": "+506" },
    { "country": "Panamá", "code": "+507" },
    { "country": "Uruguay", "code": "+598" },
    { "country": "España", "code": "+34" },
    { "country": "Alemania", "code": "+49" },
    { "country": "Francia", "code": "+33" },
    { "country": "Italia", "code": "+39" },
    { "country": "Reino Unido", "code": "+44" },
    { "country": "Rusia", "code": "+7" },
    { "country": "Ucrania", "code": "+380" },
    { "country": "Polonia", "code": "+48" },
    { "country": "Rumania", "code": "+40" },
    { "country": "Países Bajos", "code": "+31" },
    { "country": "Bélgica", "code": "+32" },
    { "country": "Grecia", "code": "+30" },
    { "country": "Portugal", "code": "+351" },
    { "country": "Suecia", "code": "+46" },
    { "country": "Noruega", "code": "+47" },
    { "country": "China", "code": "+86" },
    { "country": "India", "code": "+91" },
    { "country": "Japón", "code": "+81" },
    { "country": "Corea del Sur", "code": "+82" },
    { "country": "Indonesia", "code": "+62" },
    { "country": "Turquía", "code": "+90" },
    { "country": "Filipinas", "code": "+63" },
    { "country": "Tailandia", "code": "+66" },
    { "country": "Vietnam", "code": "+84" },
    { "country": "Israel", "code": "+972" },
    { "country": "Malasia", "code": "+60" },
    { "country": "Singapur", "code": "+65" },
    { "country": "Pakistán", "code": "+92" },
    { "country": "Bangladés", "code": "+880" },
    { "country": "Arabia Saudita", "code": "+966" },
    { "country": "Egipto", "code": "+20" },
    { "country": "Sudáfrica", "code": "+27" },
    { "country": "Nigeria", "code": "+234" },
    { "country": "Kenia", "code": "+254" },
    { "country": "Marruecos", "code": "+212" },
    { "country": "Argelia", "code": "+213" },
    { "country": "Uganda", "code": "+256" },
    { "country": "Ghana", "code": "+233" },
    { "country": "Camerún", "code": "+237" },
    { "country": "Costa de Marfil", "code": "+225" },
    { "country": "Senegal", "code": "+221" },
    { "country": "Tanzania", "code": "+255" },
    { "country": "Sudán", "code": "+249" },
    { "country": "Libia", "code": "+218" },
    { "country": "Túnez", "code": "+216" },
    { "country": "Australia", "code": "+61" },
    { "country": "Nueva Zelanda", "code": "+64" },
    { "country": "Fiji", "code": "+679" },
    { "country": "Papúa Nueva Guinea", "code": "+675" },
    { "country": "Tonga", "code": "+676" },
    { "country": "Irán", "code": "+98" },
    { "country": "Iraq", "code": "+964" },
    { "country": "Jordania", "code": "+962" },
    { "country": "Líbano", "code": "+961" },
    { "country": "Kuwait", "code": "+965" },
    { "country": "Emiratos Árabes Unidos", "code": "+971" },
    { "country": "Omán", "code": "+968" },
    { "country": "Catar", "code": "+974" },
    { "country": "Bahrein", "code": "+973" },
    { "country": "Yemen", "code": "+967" }
  ]

  const handleDropdown = () => {
    setOpenDropdown(!openDropdown)
  }

  const handleSelectOption = (option) => {
    setSelectedPhonePrefix(option)
  }

  return (
    <div className="contact-us-container">
      <div className="contact-us-total">
        <div className="contact-us-set">
          <div className="contact-us-countries">
            <h3>CONTACTANOS</h3>
            <h4>USA-MX-COL</h4>
            <p>contact@5igsolutions.com</p>
          </div>
          <div className="contact-us-social">
            <h3>SIGUENOS EN</h3>
            <div className="contact-us-logos">
              <a href="https://www.instagram.com/5ig_solutions/" target="_blank" rel="noreferrer"><img src={insta} alt="Instagram" ></img></a>
              <a href="https://www.linkedin.com/company/5ig-solutions/about" target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn"></img></a>
              <a href="https://www.facebook.com/profile.php?id=100087891016427" target="_blank" rel="noreferrer"><img src={facebook} alt="Facebook"></img></a>
            </div>
          </div>
        </div>
        <div className="contact-us-forms">
          <form target="_blank" action="https://formsubmit.co/martin.sanchez0653@gmail.com" method="POST">            <InputComponent
            className={`input-width`}
            label={`¿Quien nos escribe?`}
            placeholdel={`Nombre`}
            name={'name'}
          />
            <InputComponent
              className={`input-width`}
              label={`Regálanos tu correo`}
              placeholdel={`E-mail`}
              name={'email'}
            />

            <p>Regálanos tu télefono</p>
            <div className="phoneContactContainer">
              <div className="phoneContactDropdown">
                <div className="phoneContactInputContainer">
                  <input type="text" className={`inputNumber ${openDropdown && "active"}`} onClick={() => handleDropdown()} placeholder="+57" name="phone_prefix" readOnly value={selectedPhonePrefix}/>
                  <img src={facebook2} alt="" />
                </div>
                {openDropdown &&
                  (<>
                    <div className="phoneContactOptions">
                      <div className="optionsContainer">
                      {options.map((option) => {
                        return (<p onClick={() => handleSelectOption(option.code)}>
                          {option.country}
                        </p>)
                      })}
                      </div>
                    </div>
                  </>)}
              </div>
              <InputComponent
                className={`input-width`}
                placeholdel={`Telefono`}
                name={'phone'}
              />
            </div>

            <TextAreaComponent
              className={`input-width textArea`}
              label={`Déjanos tu mensaje`}
              placeholdel={`Mensaje`}
              name={'message'}
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact_us;
