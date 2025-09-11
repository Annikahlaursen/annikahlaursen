import React from "react";
import SkillGrid from "./SkillGrid";

export default function SkillSection() {
  const skills = [
    "React.js",
    "JavaScript",
    "CSS",
    "Illustrator",
    "Indesign",
    "Photoshop",
  ];

  return (
    <div>
      <h2>Skills</h2>
      <SkillGrid skills={skills} />
    </div>
  );
}
