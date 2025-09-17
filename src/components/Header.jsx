import Nav from "./Nav";
import Menu from "./Menu";
import React from "react";
import { Link } from "react-router-dom";

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
}

export default function Header() {
  const isMobile = useIsMobile();
  return (
    <header className="headernav">
      <Link to="/">Annikahlaursen</Link>
      {isMobile ? <Menu /> : <Nav />}
    </header>
  );
}
