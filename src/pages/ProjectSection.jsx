import ProjectRow from "../components/ProjectRow";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function ProjectSection() {
  const [project, setProjects] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("/data/projects.json");
      const data = await response.json();
      setProjects(data);
    }
    getData();
  }, []);
  return (
    <section id="projects">
      <div className="headline-container">
        <h2>Projects</h2>
      </div>
      {project.map((project) => (
        <ProjectRow project={project} key={project.id} />
      ))}
      <NavLink to={`/projects/${project.id}`}>Læs mere</NavLink>
    </section>
  );
}
