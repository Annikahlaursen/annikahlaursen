import SocialIcons from "./SocialIcons";
import image from "../assets/contactimg.jpg";
export default function ContactSection() {
  return (
    <section id="contact">
      <article>
        <h2>
          Let's grab
          <br />a Coffee
        </h2>
        <article className="tagline">
          <p>
            And chat about how I can bring <br /> your ideas to life online.
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
        <img src={image} alt="Annika Laursen" />
      </figure>
    </section>
  );
}
