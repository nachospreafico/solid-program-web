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

  const sendMessage = (userName, userEmail, userMessage) => {
    const date = serverTimestamp();
    const messageData = {
      user: { name: userName, email: userEmail },
      message: userMessage,
      date: date,
    };

    const collectionRef = collection(db, "messages");

    addDoc(collectionRef, messageData)
      .then((messageRef) => {
        const messageId = messageRef.id;
        setMessageSent(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="contact-container">
      <h3 className="contact-title">Contacto</h3>
      <p className="contact-description">
        ¿Tienes dudas, consultas o comentarios? Envianos un mensaje y te
        responderemos a la brevedad.
      </p>
      <form className="contact-form">
        <input
          type="text"
          name="name"
          min={1}
          max={50}
          required
          id="name"
          placeholder="Nombre"
        ></input>
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
        <textarea
          rows="4"
          required
          name="message"
          id="message"
          placeholder="Escribe aqui tu consulta..."
        ></textarea>
        <button
          className="contact-btn"
          onClick={(event) => {
            event.preventDefault();
            sendMessage(
              document.querySelector("#name").value,
              document.querySelector("#email").value,
              document.querySelector("#message").value
            );
          }}
        >
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
