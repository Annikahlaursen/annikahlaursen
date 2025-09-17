import React from "react";
import { NavLink } from "react-router-dom";
import Contact from "../components/ContactSection";

// OmMig - Nyhedstrekanten (React-komponent)
// Brug: kopier filen direkte ind i dit projekt. Komponentens styling bruger Tailwind-klasser.

export default function About() {
  // const [project, setProjects] = useState([]); // Not needed for just linking

  return (
    <section
      className="about py-12 px-4 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="max-w-3xl mx-auto">
        <h2 id="about-heading" className="text-2xl font-semibold mb-3">
          About Me
        </h2>

        <p className="text-lg leading-relaxed mb-4">
          I live in Aarhus and describe myself as a social, outgoing, and
          positive person who values spending time with family and friends. In
          my free time, I enjoy staying active through skateboarding, cycling,
          and bouldering. I am ambitious and goal-oriented, which shows in the
          way I approach new challenges.
          <br />
          <br />I am currently studying <strong>Multimedia Design</strong> with
          a specialization in <strong>Frontend Development</strong> at Business
          Academy Aarhus. My studies focus on building responsive websites and
          interactive prototypes using <code>JavaScript</code> and
          <code> React</code>, as well as designing visual content with Adobe
          <em>Illustrator</em>, <em>Photoshop</em>, and <em>InDesign</em>. I am
          eager to apply my skills in a professional setting through an
          internship, where I can contribute to creating user-friendly and
          engaging digital solutions.
          <br />
          <br />
          I am passionate about developing frameworks that support businesses
          and delivering customer experiences that make a real difference. My
          strengths lie in my positive mindset, service-oriented approach, and
          the professional experience I have built throughout my career.
          <br />
          <br />
          If my portfolio has sparked your interest, please feel free to reach
          out via the email provided below. I look forward to a conversation
          where I can share more about who I am and how I can contribute to your
          team.
        </p>
        <br />

        <NavLink to="/projects">
          <button className="button-grow" role="button">
            <h1>Explore my projects</h1>
          </button>
        </NavLink>
      </div>

      <Contact />
    </section>
  );
}
