import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import marioRun from "../../assets/gif/marioRun.gif";
import SocialCard from "../SocialCard/SocialCard";
import { social } from "../../utils/MySocial";

const About = () => {
  const screenWidth = window.screen.width;
  const exitX = screenWidth / 2;
  return (
    <>
      <section className="aboutContainer">
        <motion.div className="tube"></motion.div>
        <motion.div
          className="textContainer"
          initial={{ x: -exitX, scale: 0.1 }}
          transition={{ delay: 0.5, duration: 1 }}
          whileInView={{ x: 0, scale: [0.1, 0.1, 0.2, 0.2, 1] }}
          viewport={{ once: true }}
        >
          <h2>About me</h2>
          <p>
            Soy desarrollador web Full Stack con experiencia en la creación de
            aplicaciones web personalizadas desde cero. Con habilidades en el
            desarrollo de front-end y back-end, puedo trabajar en todas las
            etapas del ciclo de vida del desarrollo de software. Mi pasión por
            crear soluciones innovadoras y de alta calidad para los usuarios
            finales me lleva a estar siempre al día con las últimas tecnologías
            y tendencias en el mercado.
          </p>
        </motion.div>
      </section>
      <div className="boxSocial">
        <div className="firstLogo"></div>
        {social.map((i) => (
          <SocialCard
            key={i.id}
            name={i.name}
            urlSocial={i.url}
            imgLogo={i.logo}
            exitX={exitX}
          />
        ))}
        <motion.img
          className="marioRun"
          initial={{ x: -exitX + 100, opacity: 0 }}
          transition={{
            duration: window.screen.width > 768 ? 2 : 3,
            delay: 1.5,
          }}
          whileInView={{
            x: [-exitX + 100, 0],
            opacity: [0, 1, 1, 1, 1, 0],
          }}
          viewport={{ once: true }}
          src={marioRun}
        />
      </div>
    </>
  );
};

export default About;
