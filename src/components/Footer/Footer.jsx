import React, { useState } from "react";
import "./Footer.scss";
import { motion } from "framer-motion";
import billImg from "../../assets/img/bill3.png";
import calaveraImg from "../../assets/img/calaveraMario.png";
import cañonImg from "../../assets/img/cañon.png";

const Footer = () => {
  const [takeoff, setTakeoff] = useState(false);
  const goUp = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setTakeoff(false);
    }, 1700);
    setTakeoff(true);
  };
  return (
    <>
      <section className="shooting">
        <img className="cannon" src={cañonImg} />
        <img
          className={takeoff ? "skullButton skullActive" : "skullButton"}
          src={calaveraImg}
          onClick={goUp}
          title="Go up"
        />
        {takeoff ? (
          <motion.img
            className="bulletBill"
            src={billImg}
            transition={{ duration: 2 }}
            animate={{ y: [0, -100, -1000] }}
          />
        ) : (
          <h1></h1>
        )}
      </section>
      <footer></footer>
    </>
  );
};

export default Footer;
