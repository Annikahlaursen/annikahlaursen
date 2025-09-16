import React, { useState } from "react";
import Nav from "./Nav";
import { CiMenuBurger } from "react-icons/ci";

export default function OverlayMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* The overlay, always rendered, but width toggled by class */}
      <div id="myNav" className={`overlay${open ? " open" : ""}`}>
        <button className="closebtn" onClick={() => setOpen(false)}>
          &times;
        </button>
        <div className="overlay-content">
          <Nav />
        </div>
      </div>

      {/* Element to open/show the overlay navigation menu */}
      <span onClick={() => setOpen(true)} style={{ cursor: "pointer" }}>
        <CiMenuBurger />
      </span>
    </div>
  );
}
