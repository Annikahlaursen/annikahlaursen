import ProjectRow from "./ProjectRow";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import radar from "../assets/radar-mockup.png";
import skateducate from "../assets/skateducate-mockup.png";
import gravel from "../assets/gravel-mockup.png";

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
    <section id="mockup">
      <div className="mockupgrid">
        <div>
          <h2>Skateducate</h2>
          <img src={skateducate} alt="" />
        </div>
        <div>
          <h2>Radar</h2>
          <img src={radar} alt="" />
        </div>
        <div>
          <h2>Gravel</h2>
          <img src={gravel} alt="" />
        </div>
      </div>
      <NavLink to={`/projects${project}`}>Læs mere</NavLink>
    </section>
  );
}
