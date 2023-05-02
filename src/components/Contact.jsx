import { useState } from "react";
import {
  getFirestore,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import "./styles/Contact.css";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");

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

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (captchaToken === "") {
      // Captcha is not solved
      alert("Por favor, resuelve el reCAPTCHA para enviar el mensaje.");
      return;
    }
    sendMessage(
      document.querySelector("#name").value,
      document.querySelector("#email").value,
      document.querySelector("#message").value,
      captchaToken
    );
  };

  const handleOnCaptchaChange = (value) => {
    setCaptchaToken(value);
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
        <ReCAPTCHA
          sitekey="6Lf2XtIlAAAAAGz6q_AJh9stQ7HSgugu9qdZ0bsg"
          onChange={handleOnCaptchaChange}
        />
        <button
          className="contact-btn"
          type="submit"
          data-sitekey="6Lf2XtIlAAAAAGz6q_AJh9stQ7HSgugu9qdZ0bsg"
        >
          Enviar
        </button>
        {messageSent ? (
          <p className="message-success">Tu mensaje se envió correctamente.</p>
        ) : null}
        <input type="hidden" name="captchaToken" value={captchaToken} />
      </form>
    </div>
  );
};

export default Contact;
