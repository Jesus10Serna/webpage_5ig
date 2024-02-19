import React, { useState } from 'react';
import '../components/form.css';
import { useTranslation } from 'react-i18next';

const Form = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_prefix: '',
    phone: '',
    message: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  return (
    <div>
      <div className="contact-us-forms">
        <form target="_blank" action="https://formsubmit.co/eduardortegon2398@gmail.com" method="POST">
          <p>{t('FORM_NAME')}</p>
          <input
            className="input-width"
            placeholder="Nombre"
            name="name"
            type='text'
            // value={formData.name}
            onChange={handleChange}
            required
          />
          <p>{t('FORM_EMAIL')}</p>
          <input
            className="input-width"
            placeholder="E-mail"
            name="email"
            type='email'
            required
            value={formData.email}
            onChange={handleChange}
          />
          <p>{t('FORM_PHONE')}</p>
          <div className="phone_container">
            <input
              className="input-width-domain"
              placeholder="+57"
              name="phone_prefix"
              type='text'
              required
              value={formData.phone_prefix}
              onChange={handleChange}
            />
            <input
              className="input-width"
              id="phone"
              placeholder="Teléfono"
              name="phone"
              type='text'
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <p>{t('FORM_MESSAGE')}</p>
          <textarea
            className="input-width message"
            placeholder="Mensaje"
            name="message"
            type='text'
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
