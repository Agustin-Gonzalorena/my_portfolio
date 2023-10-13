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
            I am a passionate web developer with experience in both front-end
            and back-end development. Currently, my primary focus is on
            front-end development using React. My constant desire for learning
            drives me to explore and master new tools and technologies
            continuously, enabling me to stay updated on the latest trends and
            provide innovative solutions in my projects.
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
