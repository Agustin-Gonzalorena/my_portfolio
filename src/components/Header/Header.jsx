import React, { useState } from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import marioGif from "../../assets/gif/mario.gif";
import arrowGif from "../../assets/gif/arrow2.gif";
import { myName, myLastName } from "../../utils/MyName";
import Letter from "../Letter/Letter";

const Header = () => {
  const [mario, setMario] = useState(true);
  setTimeout(() => {
    setMario(false);
  }, 2900);
  return (
    <header>
      <section className="boxGif">
        {mario && <img className="marioHeader" src={marioGif} />}
      </section>
      <section>
        <div className="myName">
          {myName.map((l) => (
            <Letter key={l.id} oneLetter={l} />
          ))}
        </div>
        <div className="myName">
          {myLastName.map((l) => (
            <Letter key={l.id} oneLetter={l} />
          ))}
        </div>
        {!mario ? (
          <motion.h2
            className="profession"
            initial={{ opacity: 0 }}
            transition={{ duration: 3 }}
            animate={{ opacity: 1 }}
          >
            Full Stack Developer
          </motion.h2>
        ) : (
          <h2></h2>
        )}
      </section>
      <motion.img
        initial={{ opacity: 0 }}
        transition={{ delay: 4 }}
        animate={{ opacity: 1 }}
        style={{ height: "30px" }}
        src={arrowGif}
      />
    </header>
  );
};

export default Header;
