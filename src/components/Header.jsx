import SocialIcons from "./SocialIcons";
import hero from "../assets/hero.png";

export default function Header() {
  return (
    <header className="header">
      <article className="vertical-head">
        <div className="header-img">
          <img src={hero} alt="outfit billede" />
        </div>
        <div className="header-text">
          <h1>Jeg er Annika</h1>
          <p>Frontend Developer | Student</p>
          <SocialIcons />
        </div>
      </article>
    </header>
  );
}
