const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="./index.html">
          <img src="./images/logo.png" alt="Logo del instituto" className="logo" />
        </a>
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
            <a className="nav-link" href="./pages/cursos.html">CURSOS</a>
            <a className="nav-link" href="./pages/clases_personalizadas.html">CLASES PERSONALIZADAS</a>
            <a className="nav-link" href="./pages/examenes.html">EXÁMENES</a>
            <a className="nav-link" href="./pages/galeria.html">GALERÍA</a>
            <a className="nav-link" href="./pages/contacto.html">CONTACTO</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
