import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </div>
  );
}
