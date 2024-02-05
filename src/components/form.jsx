import React, { useState } from 'react';
import '../components/form.css';

const Form = () => {
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

  const handleSubmit = e => {
    e.preventDefault();
    
    console.log('Formulario enviado:', formData);
  };

  return (
    <div>
      <div className="contact-us-forms">
        <form target="_blank" action="https://formsubmit.co/eduardortegon2398@gmail.com" method="POST">
          <p>¿Quién nos escribe?</p>
          <input
            className="input-width"
            placeholder="Nombre"
            name="name"
            type='text'
            // value={formData.name}
            onChange={handleChange}
            required
          />
          <p>Regálanos tu correo</p>
          <input
            className="input-width"
            placeholder="E-mail"
            name="email"
            type='email'
            required
            value={formData.email}
            onChange={handleChange}
          />
          <p>Regálanos tu Teléfono</p>
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
          <p>Déjanos tu mensaje</p>
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
