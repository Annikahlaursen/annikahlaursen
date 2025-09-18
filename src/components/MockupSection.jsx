import { useEffect, useState } from "react";
import MockupRow from "../components/MockupRow";
import { NavLink } from "react-router-dom";

export default function Projects() {
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("/projects.json");
      const data = await response.json();
      const chosen = [data[0], data[3], data[1]];
      setSelectedItems(chosen);
    }
    getData();
  }, []);

  return (
    <section id="projects">
      <article className="row">
        <div>
          <h2 className="headlinerow">Projects</h2>
        </div>
        {selectedItems.map((mockup) => (
          <MockupRow mockup={mockup} key={mockup.id} />
        ))}
      </article>
      <NavLink to="/projects">
        <button className="button-grow" role="button">
          <h1>Explore more projects</h1>
        </button>
      </NavLink>
    </section>
  );
}
