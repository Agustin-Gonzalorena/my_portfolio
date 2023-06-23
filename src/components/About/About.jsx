import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import marioRun from "../../assets/gif/marioRun.gif";
import SocialCard from "../SocialCard/SocialCard";
import { mySocial } from "../../utils/MySocial";

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
            I am a Full Stack web developer with experience in creating custom
            web applications from scratch. With skills in both front-end and
            back-end development, I can work on all stages of the software
            development life cycle. My passion for creating innovative and
            high-quality solutions for end users drives me to stay up-to-date
            with the latest technologies and trends in the market.
          </p>
        </motion.div>
      </section>
      <div className="boxSocial">
        <div className="firstLogo"></div>
        {mySocial.map((i) => (
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
            duration: window.screen.width > 768 ? 2 : 1.8,
            delay: 1.5,
          }}
          whileInView={{
            x: [-exitX + 50, 0],
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
