import { useState } from "react";
import "./styles/Contact.css";

const Contact = () => {
  const [sent, setSet] = useState(false);

  function handleMessageSent(event) {
    event.preventDefault();
    setSet(true);
  }

  return (
    <div className="contact-container">
      <h3 className="contact-title">Contacto</h3>
      <p className="contact-description">
        ¿Tienes dudas o consultas? Envianos un mensaje y te responderemos a la
        brevedad.
      </p>
      <form className="contact-form">
        <label htmlFor="name">Nombre: </label>
        <input
          type="text"
          name="name"
          min={1}
          max={50}
          required
          id="name"
          placeholder="Nombre"
        ></input>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          min={1}
          max={100}
          required
          id="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          placeholder="Email"
        ></input>
        <label htmlFor="message">Mensaje: </label>
        <textarea
          rows="5"
          required
          name="message"
          id="message"
          placeholder="Escribe aqui tu consulta..."
        ></textarea>
        <button
          className="contact-btn"
          onClick={handleMessageSent}
          disabled={sent}
        >
          Enviar
        </button>
        {sent ? (
          <p className="message-success">Tu mensaje se envió correctamente.</p>
        ) : null}
      </form>
    </div>
  );
};

export default Contact;
