import { useEffect, useState } from "react";
import ProjectRow from "../components/ProjectRow";
import ContactSection from "../components/ContactSection";

export default function Projects() {
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
    <section>
      <h2>Projects</h2>
      {projects.map((project) => (
        <ProjectRow project={project} key={project.id} />
      ))}
      <ContactSection />
    </section>
  );
}
