import React, { useState } from "react";
import "./Letter.scss";
import { motion } from "framer-motion";

const Letter = ({ oneLetter }) => {
  const [classLetter, setClassLetter] = useState("letter");
  const colors = [
    ["#049cd8", "#049cd8", "#049cd8", "#049cd8", "#fff"],
    ["#FBD000", "#FBD000", "#FBD000", "#FBD000", "#fff"],
    ["#E52521", "#E52521", "#E52521", "#E52521", "#fff"],
    ["#43B047", "#43B047", "#43B047", "#43B047", "#fff"],
  ];
  const classColor = [["blue"], ["yellow"], ["red"], ["green"]];
  return (
    <motion.div
      style={{ margin: 0 }}
      initial={{
        x: 0,
        y: -600,
      }}
      transition={{ duration: 0.5, delay: oneLetter.time }}
      animate={{
        x: 0,
        y: 0,
        color: colors[oneLetter.color],
      }}
    >
      <motion.p
        className={classLetter}
        style={{ margin: 0 }}
        transition={{ duration: 0.2 }}
        whileHover={{
          y: -20,
          color: colors[oneLetter.color][0],
          cursor: "pointer",
        }}
        whileTap={{ rotate: 180 }}
        onClick={() =>
          setClassLetter(classLetter + " " + classColor[oneLetter.color])
        }
      >
        {oneLetter.letter}
      </motion.p>
    </motion.div>
  );
};

export default Letter;
