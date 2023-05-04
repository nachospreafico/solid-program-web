import { useState } from "react";
import {
  getFirestore,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import "./styles/Contact.css";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const db = getFirestore();

  const sendMessage = (e) => {
    e.preventDefault();
    const userName = document.querySelector("#name").value;
    const userEmail = document.querySelector("#email").value;
    const userMessage = document.querySelector("#message").value;
    const date = serverTimestamp();
    const messageData = {
      user: { name: userName, email: userEmail },
      message: userMessage,
      date: date,
    };

    const collectionRef = collection(db, "messages");

    addDoc(collectionRef, messageData)
      .then(() => {
        setMessageSent(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="contact-container">
      <h3 className="contact-title">Contacto</h3>
      <p className="contact-description">
        ¿Tienes dudas, consultas o comentarios? Envíanos un mensaje y te
        responderemos a la brevedad.
      </p>
      <form className="contact-form" id="contact-form">
        <input
          type="text"
          name="name"
          minLength={1}
          maxLength={50}
          required
          id="name"
          placeholder="Nombre"
        ></input>
        <input
          type="email"
          name="email"
          minLength={1}
          maxLength={100}
          required
          id="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          placeholder="Email"
        ></input>
        <textarea
          rows="4"
          required
          name="message"
          id="message"
          placeholder="Escribe aquí tu consulta..."
        ></textarea>
        <input
          type="hidden"
          name="g-recaptcha-response"
          id="g-recaptcha-response"
        />
        <button className="contact-btn" type="submit" onClick={sendMessage}>
          Enviar
        </button>
        {messageSent ? (
          <p className="message-success">Tu mensaje se envió correctamente.</p>
        ) : null}
      </form>
    </div>
  );
};

export default Contact;
