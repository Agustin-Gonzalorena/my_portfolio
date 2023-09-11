import React, { useState } from "react";
import "./ProjectCard.scss";
import { motion } from "framer-motion";
import cubeImg from "../../assets/img/Cubo.png";

const ProjectCard = ({ name, description, stacks, img, deploy, github }) => {
  const [view, setView] = useState(false);
  const change = () => {
    setTimeout(() => {
      setView(true);
    }, 2000);
  };
  return (
    <>
      {view ? (
        <motion.div
          className="projectCardContainer"
          transition={{ duration: 2 }}
          animate={{ opacity: [0, 1] }}
        >
          <div className="boxImg">
            <img src={img} />
          </div>
          <div className="divider"></div>
          <div className="boxInfo">
            <h3>{name}</h3>
            <p>{description}</p>
            <ul>
              {stacks.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <div>
              <a href={github} target="_blank" rel="noopener noreferrer">
                <button className="goTo">GitHub</button>
              </a>
              {deploy === "none" ? (
                <button className="goTo disabled" disabled>
                  Deploy
                </button>
              ) : (
                <a href={deploy} target="_blank" rel="noopener noreferrer">
                  <button className="goTo">Deploy</button>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          transition={{ duration: 2 }}
          whileInView={change}
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

export default ProjectCard;
