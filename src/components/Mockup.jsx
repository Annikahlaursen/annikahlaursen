import ProjectRow from "./ProjectRow";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import radar from "../assets/radar-mockup.png";
import skateducate from "../assets/skateducate-mockup.png";
import gravel from "../assets/gravel-mockup.png";
import { Link } from "react-router-dom";

export default function Mockup() {
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
    <section id="project-row">
      <div className="project-links">
        <a
          href="https://skateducate.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Skateducate</h3>
          <figure>
            <img src={skateducate} alt="" />
          </figure>
        </a>
        <a
          href="https://https://skateducate.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Radar</h3>
          <figure>
            <img src={radar} alt="" />
          </figure>
        </a>
        <a
          href="https://https://skateducate.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Gravel</h3>
          <figure>
            <img src={gravel} alt="" />
          </figure>
        </a>
      </div>
      <NavLink to={`/projects${project}`}>
        <button className="button-grow" role="button">
          <h2>Explore more projects</h2>
        </button>
      </NavLink>
    </section>
  );
}
