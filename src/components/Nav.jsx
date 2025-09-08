import { NavLink } from "react-router";
import Header from "./Header";

export default function Nav() {
  return (
    <div className="headernav">
      <h1>Annikahlaursen</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </div>
  );
}
