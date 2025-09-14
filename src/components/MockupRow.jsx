export default function MockupRow({ mockup }) {
  return (
    <section className="project-row mockup-row">
      <article>
        <h3>{mockup.title}</h3>
        <p>{mockup.description}</p>
        {mockup.links && mockup.links.length > 0 && (
          <section className="project-links mockup-links">
            {mockup.links.map((link, index) => (
              <a
                key={`${mockup.id}-${index}`}
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
        <img src={mockup.image} alt={mockup.title} />
      </figure>
    </section>
  );
}
