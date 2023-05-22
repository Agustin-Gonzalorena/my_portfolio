import React, { useEffect, useState } from "react";
import "./Letter.scss";
import { motion } from "framer-motion";
import cursorPointer from "../../assets/img/MarioCursorPointer.png";

const Letter = ({ oneLetter }) => {
  const [classLetter, setClassLetter] = useState("letter");
  const colors = [
    ["#049cd8", "#049cd8", "#049cd8", "#049cd8", "#fff"],
    ["#FBD000", "#FBD000", "#FBD000", "#FBD000", "#fff"],
    ["#E52521", "#E52521", "#E52521", "#E52521", "#fff"],
    ["#43B047", "#43B047", "#43B047", "#43B047", "#fff"],
  ];
  const classColor = [["blue"], ["yellow"], ["red"], ["green"]];
  useEffect(() => {
    setClassLetter(`letter ${classColor[oneLetter.color]}`);
  }, []);
  return (
    <motion.div
      style={{ margin: 0 }}
      initial={{
        x: 0,
        y: -300,
        opacity: 0,
      }}
      transition={{ duration: 0.5, delay: oneLetter.time }}
      animate={{
        x: 0,
        y: 0,
        opacity: 1,
        color: colors[oneLetter.color],
      }}
    >
      <motion.p
        className={classLetter}
        style={{ margin: 0 }}
        transition={{ duration: 0.2 }}
        whileHover={{
          y: -20,
          cursor: `url(${cursorPointer}),auto`,
        }}
        whileTap={{ rotate: 180 }}
        onClick={() =>
          setClassLetter(`letter ${classColor[oneLetter.color]}Active`)
        }
      >
        {oneLetter.letter}
      </motion.p>
    </motion.div>
  );
};

export default Letter;
