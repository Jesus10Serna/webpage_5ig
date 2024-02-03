import "../components/form.css";

const Form = () => {
  return (
    <div>
      <div className="contact-us-forms">
        <form>
          <p>¿Quién nos escribe?</p>
          <input className="input-width" placeholder="Nombre"></input>
          <p>Regálanos tu correo</p>
          <input className="input-width" placeholder="E-mail"></input>
          <p>Regálanos tu Teléfono</p>
          <div className="phone_container">
            <input className="input-width-domain" placeholder="+57"></input>
            <input
              className="input-width"
              id="phone"
              placeholder="Teléfono"
            ></input>
          </div>
          <p>Déjanos tu mensaje</p>
          <textarea
            className="input-width message"
            placeholder="Mensaje"
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
