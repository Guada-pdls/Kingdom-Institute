import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <h5>Contacto</h5>
        <ul className="mb-0">
          <li>
            <a
              href="https://www.facebook.com/Instituto-de-Inglés-Kingdom-132014517487472/?ref=page_internal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons/facebook.png"
                alt="Logo de Facebook"
                className="small-icon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/+59894056125"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons/whatsapp.png"
                alt="Logo de WhatsApp"
                className="small-icon"
              />
            </a>
          </li>
          <li>
            <a href="tel:+59894056125">
              <img
                src="/icons/instagram.png"
                alt="Logo de Instagram"
                className="small-icon"
              />
            </a>
          </li>
          <li>
            <Link to="/contacto">
              <img src="/icons/mail.png" alt="Correo" className="small-icon" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="brand-footer">
        <p>
          Profesora miembro de
          <img
            src="./images/Logotipo-Audeppi-Descripcion-chico.jpg"
            alt="Logo Audeppi"
          />
        </p>
        <img
          className="footer-logo"
          src="./images/logo.jpg"
          alt="Logo del instituto"
        />
      </div>
    </footer>
  );
};

export default Footer;
