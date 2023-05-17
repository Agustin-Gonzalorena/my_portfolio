import React, { useState } from "react";
import "./Stack.scss";
import marioBomb from "../../assets/gif/bomb3.gif";
import { stacks } from "../../utils/MyStack";
import StackCard from "../stackCard/stackCard";
import { motion } from "framer-motion";

const Stack = () => {
  const [bomb, setBomb] = useState(true);
  const explodeBomb = () => {
    setTimeout(() => {
      setBomb(false);
    }, 2200);
    return { opacity: 1 };
  };

  return (
    <section className="boxStack">
      <h2>Stack</h2>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ delay: 1.5 }}
        whileInView={explodeBomb}
        viewport={{ once: true }}
        className="contentStack"
      >
        {bomb ? (
          <motion.img
            whileInView={{
              scale: [
                1, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4, 2.6, 2.8, 3, 3.2, 3.4, 3.6,
                3.8, 4,
              ],
            }}
            viewport={{ once: true }}
            className="marioBomb"
            src={marioBomb}
          />
        ) : (
          stacks.map((s) => <StackCard key={s.id} name={s.name} img={s.img} />)
        )}
      </motion.div>
    </section>
  );
};

export default Stack;
