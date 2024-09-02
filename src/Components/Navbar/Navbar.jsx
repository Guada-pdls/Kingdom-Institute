import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/images/logo.png" alt="Logo del instituto" className="logo" />
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
            <Link className="nav-link" to="/courses">CURSOS</Link>
            <Link className="nav-link" to="/customized-classes">CLASES PERSONALIZADAS</Link>
            <Link className="nav-link" to="/exams">EXÁMENES</Link>
            <Link className="nav-link" to="/gallery">GALERÍA</Link>
            <Link className="nav-link" to="/placement-test">PLACEMENT TEST</Link>
            <Link className="nav-link" to="/contact">CONTACTO</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
