import React from "react";
import "./Proyects.scss";
import ProyectCard from "../ProyectCard/ProyectCard";

const Proyects = () => {
  const arr = [{ id: 1 }, { id: 2 }];
  return (
    <section className="proyectsBox">
      <h2>Proyects</h2>
      <div className="proyectsContent">
        {arr.map((i) => (
          <ProyectCard key={i.id} time={i.id * 1000} />
        ))}
      </div>
    </section>
  );
};

export default Proyects;
