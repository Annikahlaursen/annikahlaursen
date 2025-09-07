import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function ProjectDetail() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("/projects.json");
      const data = await response.json();
      setProjects(data);
    }
    getData();
  }, []);

  return (
    <section id="projects">
      <div className="headline-container">
        <h2>Projekter</h2>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <img
        src={project.image}
        alt={project.title}
        style={{ maxWidth: "500px" }}
      />
      <p>{project.description}</p>
      <NavLink to={`/project/${project.id}`}>Læs mere</NavLink>
    </div>
  );
}
