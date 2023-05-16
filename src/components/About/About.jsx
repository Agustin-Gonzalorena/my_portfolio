import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import marioRun from "../../assets/gif/marioRun.gif";
import githubLogo from "../../assets/img/githubLogo.png";
import linkedInLogo from "../../assets/img/linkedinLogo.png";
import cvLogo from "../../assets/img/cvLogo.png";

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
          whileInView={{ x: 0, scale: [0.1, 0.2, 0.2, 0.2, 1] }}
          viewport={{ once: true }}
        >
          <h2>Sobre mi</h2>
          <p>
            Soy un desarrollador web Full Stack con experiencia en la creación
            de aplicaciones web personalizadas desde cero. Con habilidades en el
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
        <a href="https://github.com/Agustin-Gonzalorena" target="_blank">
          <motion.img
            className="logos"
            initial={{ x: -exitX + 100, opacity: 0 }}
            transition={{ duration: 3, delay: 2 }}
            whileInView={{ x: 0, opacity: 1, rotate: [-360 * 2, 0] }}
            viewport={{ once: true }}
            src={githubLogo}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/agustin-gonzalorena/"
          target="_blank"
        >
          <motion.img
            className="logos"
            initial={{ x: -exitX + 100, opacity: 0 }}
            transition={{ duration: 3, delay: 2 }}
            whileInView={{ x: 0, opacity: 1, rotate: [-360 * 2, 0] }}
            viewport={{ once: true }}
            src={linkedInLogo}
          />
        </a>
        <a
          href="https://drive.google.com/file/d/1l8ddO_ZF0U5PwOsVZV9YBY1dvfSUR8H_/view?usp=share_link"
          target="_blank"
        >
          <motion.img
            className="logos"
            initial={{ x: -exitX + 100, opacity: 0 }}
            transition={{ duration: 3, delay: 2 }}
            whileInView={{ x: 0, opacity: 1, rotate: [-360 * 2, 0] }}
            viewport={{ once: true }}
            src={cvLogo}
          />
        </a>

        <motion.img
          className="marioRun"
          initial={{ x: -exitX + 100, opacity: 0 }}
          transition={{ duration: window.screen.width > 768 ? 3 : 5, delay: 2 }}
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
