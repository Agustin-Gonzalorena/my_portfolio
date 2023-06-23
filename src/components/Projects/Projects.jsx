import React from "react";
import "./Projects.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import { myProjects } from "../../utils/MyProjects";

const Projects = () => {
  const arr = [{ id: 1 }, { id: 2 }];
  return (
    <section className="projectsBox">
      <h2>Projects</h2>
      <div className="projectsContent">
        {myProjects.map((i) => (
          <ProjectCard
            key={i.id}
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
        <button className="moreProjects">More</button>
      </a>
    </section>
  );
};

export default Projects;
