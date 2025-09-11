const SkillGrid = ({ skills = [] }) => {
  return (
    <section className="skills-section">
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillGrid;
