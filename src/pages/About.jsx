import React from "react";
import { NavLink } from "react-router-dom";

// OmMig - Nyhedstrekanten (React-komponent)
// Brug: kopier filen direkte ind i dit projekt. Komponentens styling bruger Tailwind-klasser.

export default function About() {
  // const [project, setProjects] = useState([]); // Not needed for just linking

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-12 px-4 bg-white"
    >
      <div className="max-w-3xl mx-auto">
        <h2 id="about-heading" className="text-2xl font-semibold mb-3">
          About Me
        </h2>

        <p className="text-lg leading-relaxed mb-4">
          I am a <strong>Multimedia Design student</strong> specializing in
          <strong>Frontend Development</strong> at Business Academy Aarhus. My
          studies focus on building responsive websites and interactive
          prototypes using <code>JavaScript</code> and <code>React</code>,
          alongside creating visual content in Adobe <em>Illustrator</em>,
          <em> Photoshop</em>, and <em>InDesign</em>. I am eager to apply my
          skills in a professional setting through an internship, where I can
          contribute to developing user-friendly digital solutions.
        </p>

        <NavLink to="/projects">
          <button className="button-grow" role="button">
            <h1>Explore more projects</h1>
          </button>
        </NavLink>
      </div>
    </section>
  );
}
