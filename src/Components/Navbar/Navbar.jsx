import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Collapse } from "bootstrap";
import AOS from "aos";

const Navbar = () => {
  const navbarCollapseRef = useRef(null);
  const navbarTogglerRef = useRef(null);
  const collapseInstance = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (navbarCollapseRef.current) {
      collapseInstance.current = new Collapse(navbarCollapseRef.current, { toggle: false });
    }

    const toggleMenu = () => {
      if (collapseInstance.current) {
        if (isMenuOpen) {
          collapseInstance.current.hide();
        } else {
          collapseInstance.current.show();
        }
        setIsMenuOpen((prev) => !prev);
      }
    };

    const closeMenu = () => {
      if (collapseInstance.current && isMenuOpen) {
        collapseInstance.current.hide();
        setIsMenuOpen(false);
        setTimeout(() => AOS.refresh(), 500);
      }
    };

    const navbarToggler = navbarTogglerRef.current;
    const navLinks = document.querySelectorAll(".nav-link");

    navbarToggler.addEventListener("click", toggleMenu);
    navLinks.forEach((link) => link.addEventListener("click", closeMenu));

    return () => {
      navbarToggler.removeEventListener("click", toggleMenu);
      navLinks.forEach((link) => link.removeEventListener("click", closeMenu));
    };
  }, [isMenuOpen]); // Ahora el useEffect solo se ejecuta cuando `isMenuOpen` cambia.

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/images/logo.jpg" alt="Logo del instituto" className="logo" />
        </Link>
        <button
          ref={navbarTogglerRef}
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNavAltMarkup"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div ref={navbarCollapseRef} className="collapse navbar-collapse links" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/cursos">CURSOS</Link>
            <Link className="nav-link" to="/examenes">EXÁMENES</Link>
            <Link className="nav-link" to="/placement-test">PLACEMENT TEST</Link>
            <Link className="nav-link" to="/contacto">CONTACTO</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
