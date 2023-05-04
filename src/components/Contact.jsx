import { useState } from "react";
import {
  getFirestore,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import "./styles/Contact.css";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const db = getFirestore();

  const sendMessage = (userName, userEmail, userMessage, captchaToken) => {
    const date = serverTimestamp();
    const messageData = {
      user: { name: userName, email: userEmail },
      message: userMessage,
      date: date,
      captchaToken: captchaToken,
    };

    const collectionRef = collection(db, "messages");

    addDoc(collectionRef, messageData)
      .then(() => {
        setMessageSent(true);
      })
      .catch((error) => console.log(error));
  };

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const siteKey = "6Lf2XtIlAAAAAGz6q_AJh9stQ7HSgugu9qdZ0bsg";
    window.grecaptcha.ready(() => {
      window.grecaptcha.execute(siteKey, { action: "submit" }).then((token) => {
        sendMessage(
          document.querySelector("#name").value,
          document.querySelector("#email").value,
          document.querySelector("#message").value,
          token
        );
      });
    });
  };

  return (
    <div className="contact-container">
      <h3 className="contact-title">Contacto</h3>
      <p className="contact-description">
        ¿Tienes dudas, consultas o comentarios? Envíanos un mensaje y te
        responderemos a la brevedad.
      </p>
      <form
        className="contact-form"
        id="contact-form"
        onSubmit={handleOnSubmit}
      >
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
        <button className="contact-btn" type="submit">
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
