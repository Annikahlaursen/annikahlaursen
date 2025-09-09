import React from "react";

// OmMig - Nyhedstrekanten (React-komponent)
// Brug: kopier filen direkte ind i dit projekt. Komponentens styling bruger Tailwind-klasser.

export default function About({
  email = "Annikahlaursen@gmail.com",
  projectsHref = "#projects",
}) {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-12 px-4 bg-white"
    >
      <div className="max-w-3xl mx-auto">
        <h2 id="about-heading" className="text-2xl font-semibold mb-3">
          Om mig
        </h2>

        <p className="text-lg leading-relaxed mb-4">
          Jeg er <strong>multimediedesignerstuderende</strong> med speciale i
          <strong> frontend development</strong> på Erhvervsakademi Aarhus.
          Gennem studiet bygger jeg responsive websites og interaktive
          prototyper med <code>Javascript</code> og <code>React</code>, samtidig
          med at jeg producerer grafisk indhold i <em>Illustrator</em>,{" "}
          <em>Photoshop</em> og <em>InDesign</em>. Jeg søger praktik, hvor jeg
          kan omsætte studieprojekter til brugervenlige digitale oplevelser. med
          speciale i samtidig med at jeg producerer grafisk indhold i{" "}
          <em>Illustrator</em>, <em>Photoshop</em> og <em>InDesign</em>.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={projectsHref}
            className="inline-block px-4 py-2 rounded-md border font-medium hover:bg-gray-50"
          >
            Se mine projekter
          </a>
          <a
            href={`mailto:${email}`}
            className="inline-block px-4 py-2 rounded-md border bg-gray-50 hover:bg-gray-100"
          >
            Kontakt mig
          </a>
        </div>
      </div>
    </section>
  );
}
