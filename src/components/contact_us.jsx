import React, { useState } from "react";
import "../style/contact-us.css";
import insta from "./insta.svg";
import linkedin from "./linkedin.svg";
import arrowIcon from "./arrowDown.svg";
import InputComponent from "./inputComponent";
import TextAreaComponent from "./textAreaComponent";
import axios from 'axios';

const Contact_us = () => {
  const [openDropdown, setOpenDropdown] = useState(false)

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
    console.log(form);
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
      axios.post('https://formsubmit.co/ajax/martin.sanchez0653@gmail.com', form)
        .then(data => {
          data.data.success === "true" && setForm(initialData)
          setLoading(false)
        })
        .catch(error => {
          setLoading(false)
        });
    }
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
            </div>
          </div>
        </div>
        <div className="contact-us-forms">
          {/* <form action="https://formsubmit.co/your@email.com" method="POST"> */}
          <form onSubmit={handleSubmitContact}>
            <InputComponent
              className={`input-width`}
              label={`¿Quien nos escribe?`}
              placeholdel={`Nombre`}
              name={'name'}
              value={form.name}
              handleChange={handleChange}
            />
            {errors.name && <div className="alert alert-danger">{errors.name}</div>}
            <InputComponent
              className={`input-width`}
              label={`Regálanos tu correo`}
              placeholdel={`E-mail`}
              name={'email'}
              value={form.email}
              handleChange={handleChange}
            />
            {errors.email && <div className="alert alert-danger">{errors.email}</div>}
            <p>Regálanos tu télefono</p>
            <div className="phoneContactContainer">
              <div className="phoneContactDropdown">
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
                placeholdel={`Telefono`}
                name={'phone'}
                handleChange={handleChange}
                value={form.phone}
              />
            </div>
            {errors.phone_prefix && <div className="alert alert-danger">{errors.phone_prefix}</div>}
            {errors.phone && <div className="alert alert-danger">{errors.phone}</div>}

            <TextAreaComponent
              className={`input-width textArea`}
              label={`Déjanos tu mensaje`}
              placeholdel={`Mensaje`}
              name={'message'}
              handleChange={handleChange}
              value={form.message}
            />
            {errors.message && <div className="alert alert-danger">{errors.message}</div>}
            <div className="termsAndConditionsContainer">
              <input type="checkbox" name="policies" onChange={handleChange} />
              <p className="termsAndConditionsText">Al marcar esta casilla, confirmas que has leído y aceptas nuestra política de tratamiento de datos. <a href="">Haz clic aquí para leer la política completa.</a></p>
            </div>
            {errors.policies && <div className="alert alert-danger">{errors.policies}</div>}
            <button className="sendFormConatct" disabled={loading}>{loading ? "Enviando..." : "Enviar"}</button>
            {/* <input type="hidden" name="_next" value="/"/>
            <input type="hidden" name="_captcha" valu`e="false"/> */}
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact_us;
