import React from "react";
import "./Proyects.scss";
import ProyectCard from "../ProyectCard/ProyectCard";
import { myProyects } from "../../utils/MyProyects";

const Proyects = () => {
  const arr = [{ id: 1 }, { id: 2 }];
  return (
    <section className="proyectsBox">
      <h2>Proyects</h2>
      <div className="proyectsContent">
        {myProyects.map((i) => (
          <ProyectCard
            key={i.id}
            time={i.id * 800}
            name={i.name}
            description={i.description}
            stacks={i.stacks}
            img={i.img}
            deploy={i.deploy}
            github={i.github}
          />
        ))}
      </div>
      <a
        href="https://github.com/Agustin-Gonzalorena?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="moreProyects">Ver mas...</button>
      </a>
    </section>
  );
};

export default Proyects;
