import React from "react";
import "./SocialCard.scss";
import { motion } from "framer-motion";

const SocialCard = ({ urlSocial, imgLogo, exitX, name }) => {
  return (
    <a href={urlSocial} target="_blank" title={name}>
      <motion.img
        className="logos"
        initial={{ x: -exitX + 100, opacity: 0 }}
        transition={{ duration: 2, delay: 1.5 }}
        whileInView={{ x: 0, opacity: 1, rotate: [-360 * 2, 0] }}
        viewport={{ once: true }}
        src={imgLogo}
      />
    </a>
  );
};

export default SocialCard;
