import SocialIcons from "./SocialIcons";
import hero from "../assets/hero.png";

export default function Header() {
  return (
    <header className="hero">
      <article className="vertical-head">
        <div className="hero-img">
          <img src={hero} alt="outfit billede" />
        </div>
        <div className="hero-text">
          <h1>Jeg er Annika</h1>
          <p>Frontend Developer | Student</p>
          <SocialIcons />
        </div>
      </article>
    </header>
  );
}
