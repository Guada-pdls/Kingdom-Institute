import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Collapse } from 'bootstrap';
import AOS from 'aos';

const Navbar = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.getElementById('navbarNavAltMarkup');

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
          const bsCollapse = new Collapse(navbarCollapse, { toggle: false });
          bsCollapse.hide();

          // Delay AOS refresh to allow time for menu to close
          setTimeout(() => {
            AOS.refresh();
          }, 500); 
        }
      });
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/images/logo.jpg" alt="Logo del instituto" className="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse links" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/cursos">CURSOS</Link>
            <Link className="nav-link" to="/examenes">EXÁMENES</Link>
            <Link className="nav-link" to="/galeria">GALERÍA</Link>
            <Link className="nav-link" to="/placement-test">PLACEMENT TEST</Link>
            <Link className="nav-link" to="/contacto">CONTACTO</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
