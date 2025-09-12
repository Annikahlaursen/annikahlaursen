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
    <div className="skillsection">
      <h2>Skills</h2>
      <SkillGrid skills={skills} />
    </div>
  );
}
