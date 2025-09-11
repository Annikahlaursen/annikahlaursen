import React from "react";
import SkillGrid from "./SkillGrid";

export default function SkillSection() {
  const skills = [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Java",
    "Spring Boot",
    "PostgreSQL",
  ];

  return (
    <div>
      <h2>Skills</h2>
      <SkillGrid skills={skills} />
    </div>
  );
}
