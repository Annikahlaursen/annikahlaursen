import { useEffect, useState } from "react";
import MockupRow from "../components/MockupRow";
import { NavLink } from "react-router-dom";

export default function Projects() {
  const [mockups, setMockups] = useState([]);
  const [project, setProjects] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("/mockups.json");
      const data = await response.json();
      setMockups(data);
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      const response = await fetch("/data/projects.json");
      const data = await response.json();
      setProjects(data);
    }
    getData();
  }, []);

  return (
    <section>
      <article>
        <h2>Projects</h2>
        {mockups.map((mockup) => (
          <MockupRow mockup={mockup} key={mockup.id} />
        ))}
      </article>
      <NavLink to={`/projects${project}`}>
        <button className="button-grow" role="button">
          <h2>Explore more projects</h2>
        </button>
      </NavLink>
    </section>
  );
}
