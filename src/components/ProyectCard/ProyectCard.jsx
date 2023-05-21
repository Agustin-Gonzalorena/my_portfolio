import React, { useState } from "react";
import "./ProyectCard.scss";
import { motion } from "framer-motion";
import cubeImg from "../../assets/img/Cubo.png";

const ProyectCard = ({ time }) => {
  const [view, setView] = useState(false);
  const changue = () => {
    setTimeout(() => {
      setView(true);
    }, time);
  };
  return (
    <>
      {view ? (
        <motion.div
          transition={{ duration: 2 }}
          animate={{ opacity: [0, 1] }}
          style={{ height: "200px", width: "200px", backgroundColor: "grey" }}
        ></motion.div>
      ) : (
        <motion.div
          transition={{ duration: 2 }}
          whileInView={changue}
          exit={{ opacity: [1, 1, 0] }}
          style={{
            height: "200px",
            width: "200px",
            backgroundImage: `url(${cubeImg})`,
            backgroundSize: "cover",
            backgroundPosition: "100%",
          }}
        ></motion.div>
      )}
    </>
  );
};

export default ProyectCard;
