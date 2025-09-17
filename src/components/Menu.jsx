import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { NavLink } from "react-router-dom";

export default function OverlayMenu() {
  const [open, setOpen] = useState(false);

  return (
    <section>
      <div className={`overlay${open ? " open" : ""}`}>
        <button className="closebtn" onClick={() => setOpen(false)}>
          &times;
        </button>
        <div className="overlay-content">
          <NavLink to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/projects" onClick={() => setOpen(false)}>
            Projects
          </NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>
            Contact
          </NavLink>
        </div>
      </div>
      <div>
        {/* Element to open/show the overlay navigation menu */}
        <span
          className="openbtn"
          onClick={() => setOpen(true)}
          style={{
            cursor: "pointer",
            marginRight: "1em",
          }}
        >
          <CiMenuBurger />
        </span>
      </div>
    </section>
  );
}
