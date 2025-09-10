import SocialIcons from "./SocialIcons";
import sejtest from "../assets/sejtest.png";
export default function ContactSection() {
  return (
    <section id="contact">
      <article>
        <h2>
          Get in
          <br />
          touch
        </h2>
        <article className="tagline">
          <p>
            And let us talk about how I<br /> can help you look your best online
          </p>
        </article>

        <address>
          <p>
            <strong>Annika Hecto Laursen</strong>
            <br />
            Frontend developer
            <br />
          </p>
          <p>
            <a href="mailto:annikahlaursen@gmail.com">
              annikahlaursen@gmail.com
            </a>
            <br />
          </p>
          <p>
            <a href="http://annikahlaursen.dk">annikahlaursen.dk</a>
          </p>
          <SocialIcons />
        </address>
      </article>
      <figure>
        <img src={sejtest} alt="Annika Laursen" />
      </figure>
    </section>
  );
}
