import React from "react";
import "./StackCard.scss";
import { motion } from "framer-motion";

const StackCard = ({ name, img }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="cardStackBox"
    >
      <div
        className="imgStack"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <p>{name}</p>
    </motion.div>
  );
};

export default StackCard;
