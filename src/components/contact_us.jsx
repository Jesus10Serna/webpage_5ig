import React, { useEffect, useRef, useState } from "react";
import "../style/contact-us.css";
import insta from "./insta.svg";
import linkedin from "./linkedin.svg";
import arrowIcon from "./arrowDown.svg";
import InputComponent from "./inputComponent";
import TextAreaComponent from "./textAreaComponent";
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const Contact_us = () => {
  const { t } = useTranslation();
  const [openDropdown, setOpenDropdown] = useState(false)

  const handleRedirectWP = () => {
    window.open("https://api.whatsapp.com/send?phone=573025779018")
  };

  const initialData = {
    name: '',
    email: '',
    phone_prefix: '',
    phone: '',
    message: '',
    policies: false
  }
  const [loading, setLoading] = useState(false)
  const [errors, setErros] = useState({})
  // const [selectedPhonePrefix, setSelectedPhonePrefix] = useState(initialData.phone_prefix)
  const [form, setForm] = useState(initialData)

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

  const handleChange = (event) => {
    const { name, value, checked } = event.target
    if (name === 'policies') {
      setForm({ ...form, [name]: checked })
    } else {
      setForm({ ...form, [name]: value })
    }
    // console.log(form);
  }

  const handleSelectOption = (option) => {
    // setSelectedPhonePrefix(option)
    setForm({ ...form, phone_prefix: option })
  }

  const onValidate = (form) => {
    let errors = {}

    if (!form.name.trim()) {
      errors.name = 'Este campo debe ser completado.'
    }

    if (!form.email.trim()) {
      errors.email = 'Este campo debe ser completado.'
    }

    if (!form.phone_prefix.trim()) {
      errors.phone_prefix = 'El campo del sufijo del telefono debe ser completado.'
    }

    if (!form.phone.trim()) {
      errors.phone = 'El campo del numero de telefono debe ser completado.'
    }

    if (!form.message.trim()) {
      errors.message = 'Este campo debe ser completado.'
    }

    if (form.policies === false) {
      errors.policies = 'Este campo debe ser completado.'
    }

    return errors
  }

  const handleSubmitContact = (event) => {
    event.preventDefault()
    const err = onValidate(form)
    setErros(err)
    if (Object.keys(err).length === 0) {
      setLoading(true)
      axios.post('https://formsubmit.co/ajax/contact@5igsolutions.com', form)
        .then(data => {
          data.data.success === "true" && setForm(initialData)
          setLoading(false)
        })
        .catch(error => {
          setLoading(false)
        });
    }
  }

  const elementoRef = useRef(null);

  useEffect(() => {
    // Función para manejar los clics en toda la página
    const handleClickOutside = (event) => {
      if (elementoRef.current && !elementoRef.current.contains(event.target)) {
        // Si el clic ocurre fuera del elemento deseado, cambiar el estado
        setOpenDropdown(false);
      }
    };

    // Agregar event listener al montar el componente
    document.addEventListener('click', handleClickOutside);

    // Limpiar event listener al desmontar el componente
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []); // Se ejecuta solo al montar y desmontar el componente


  return (
    <div className="contact-us-container">
      <div className="contact-us-total">
        <div className="contact-us-set">
          <div className="contact-us-countries">
            <h3>{t('FORM_CONTACT_US')}</h3>
            <h4>USA-MX-COL</h4>
            <p>contact@5igsolutions.com</p>
          </div>
          <div className="contact-us-social">
            <h3>{t('FORM_FOLLOW')}</h3>
            <div className="contact-us-logos">
              <a href="https://www.instagram.com/5ig_solutions/" target="_blank" rel="noreferrer"><img src={insta} alt="Instagram" ></img></a>
              <a href="https://www.linkedin.com/company/5ig-solutions/about" target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn"></img></a>
            </div>
          </div>
          <button
            className="wsp-contact-button"
            onClick={handleRedirectWP}
          >
            <img src="/img/wsp_black_icon.svg" alt="Whatsapp Logo para chatear con nosotros" />
            {t('AUT_BUTTON')}
          </button>
        </div>
        <div className="contact-us-forms">
          {/* <form action="https://formsubmit.co/your@email.com" method="POST"> */}
          <form onSubmit={handleSubmitContact}>
            <h2 className="form-title">{t("FORM_HEADER")}</h2>
            <p className="form-title">{t("FORM_TITLE")}</p>
            <InputComponent
              className={`input-width`}
              placeholdel={t('FORM_NAME_LABEL')}
              name={'name'}
              value={form.name}
              handleChange={handleChange}
            />
            {errors.name && <div className="alert alert-danger">{errors.name}</div>}
            <InputComponent
              className={`input-width`}
              placeholdel={`E-mail`}
              name={'email'}
              value={form.email}
              handleChange={handleChange}
            />
            {errors.email && <div className="alert alert-danger">{errors.email}</div>}
            <p></p>
            <div className="phoneContactContainer">
              <div className="phoneContactDropdown" ref={elementoRef}>
                <div className="phoneContactInputContainer">
                  <input type="text" className={`inputNumber ${openDropdown && "active"}`} onClick={() => handleDropdown()} placeholder="+57" name="phone_prefix" readOnly value={form.phone_prefix} />
                  <img src={arrowIcon} alt="" />
                </div>
                {openDropdown &&
                  (<>
                    <div className="phoneContactOptions">
                      <div className="optionsContainer">
                        {options.map((option) => {
                          return (<p onClick={() => handleSelectOption(option.code)} key={option.country}>
                            {option.country}
                          </p>)
                        })}
                      </div>
                    </div>
                  </>)}
              </div>
              <InputComponent
                className={`input-width`}
                placeholdel={t('FORM_NAME_PHONE')}
                name={'phone'}
                handleChange={handleChange}
                value={form.phone}
              />
            </div>
            {errors.phone_prefix && <div className="alert alert-danger">{errors.phone_prefix}</div>}
            {errors.phone && <div className="alert alert-danger">{errors.phone}</div>}

            <TextAreaComponent
              className={`input-width textArea`}
              label={t('FORM_MESSAGE')}
              placeholdel={t('FORM_NAME_MESSAGE')}
              name={'message'}
              handleChange={handleChange}
              value={form.message}
            />
            {errors.message && <div className="alert alert-danger">{errors.message}</div>}
            <div className="termsAndConditionsContainer">
              <input type="checkbox" name="policies" onChange={handleChange} />
              <p className="termsAndConditionsText">{t('FORM_POLICY')} <a href="">{t('FORM_POLICY_LINK')}</a></p>
            </div>
            {errors.policies && <div className="alert alert-danger">{errors.policies}</div>}
            <button className="sendFormConatct" disabled={loading}>{loading ? t('FORM_BUTTON_LOADING') : t('FORM_BUTTON')}</button>
            {/* <input type="hidden" name="_next" value="/"/>
            <input type="hidden" name="_captcha" valu`e="false"/> */}
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact_us;
