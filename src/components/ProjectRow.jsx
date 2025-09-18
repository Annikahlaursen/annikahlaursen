export default function ProjectRow({ project }) {
  return (
    <section className="project-row">
      <article>
        <h3>{project.title}</h3>
        {project.year && <h4>{project.year}</h4>}
        <p>{project.description}</p>
        {project.links && project.links.length > 0 && (
          <section className="project-links">
            {project.links.map((link, index) => (
              <a
                key={`${project.id}-${index}`}
                href={link.url}
                rel="noreferrer"
                target="_blank"
              >
                {link.text} <i className="ion-ios-arrow-forward"></i>
                <i className="ion-ios-arrow-forward"></i>{" "}
              </a>
            ))}
          </section>
        )}
      </article>
      <figure>
        <img
          src={`${import.meta.env.BASE_URL}${project.image.replace(/^\//, "")}`}
          alt={project.title}
        />
      </figure>
    </section>
  );
}
