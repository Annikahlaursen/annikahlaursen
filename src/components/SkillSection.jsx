import React from "react";
import SkillGrid from "./SkillGrid";

export default function SkillSection() {
  const skills = [
    "React.js",
    "JavaScript",
    "HTML",
    "CSS",
    "Adobe",
    "Canva",
    "Figma",
    "Github",
    "VS Code",
  ];

  return (
    <div>
      <h2 className="headlineskill">Skills</h2>
      <div className="skillsection">
        <SkillGrid skills={skills} />
      </div>
    </div>
  );
}
