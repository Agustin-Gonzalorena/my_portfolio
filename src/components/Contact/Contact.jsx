import React, { useState } from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import coinImg from "../../assets/gif/coin.gif";
import turtleImg from "../../assets/gif/turtle.gif";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [send, setSend] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSend(false);
    emailjs
      .sendForm(
        "service_4k6v44k",
        "template_nyzi2de",
        e.target,
        "XmI1mlKojbS-Mmgn9"
      )
      .then(
        (result) => {
          setLoading(false);
          setSend(true);
          setEmail("");
          setName("");
          setMessage("");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <motion.img
          style={{ height: "100px" }}
          src={turtleImg}
          initial={{ opacity: 1, y: 400 }}
          transition={{ duration: 3 }}
          whileInView={{ opacity: [1, 1, 0], y: [400, 0, -200] }}
          viewport={{ once: true }}
        />
      </div>
      <motion.section
        className="contactContainer"
        initial={{ opacity: 1, y: 400 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: [1, 1, 1], y: [400, 0] }}
        viewport={{ once: true }}
      >
        <h2>Contact me</h2>
        {loading && (
          <img style={{ height: "50px" }} src={coinImg} alt="loading" />
        )}
        {send && <p style={{ color: "#e52521" }}>Enviado!!!</p>}
        <form className="form" onSubmit={sendEmail}>
          <div className="input-container">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <span className="bar"></span>
          </div>
          <div className="input-container">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Nombre"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className="bar"></span>
          </div>
          <div className="input-container">
            <textarea
              id="message"
              name="message"
              placeholder="Escribe tu mensaje"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <span className="bar"></span>
          </div>
          {!loading ? (
            <button type="submit" className="mario-button ">
              ENVIAR
            </button>
          ) : (
            <button type="submit" className="mario-button disabled" disabled>
              ENVIAR
            </button>
          )}
        </form>
      </motion.section>
    </>
  );
};

export default Contact;
