import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <ul className="mb-0"> 
        <li><a href="https://www.facebook.com/Instituto-de-Inglés-Kingdom-132014517487472/?ref=page_internal" target="_blank" rel="noopener noreferrer"><img src="./images/facebook.svg" alt="Logo de Facebook" className="small-icon" /></a></li>
        <li><a href="https://wa.me/+59894056125" target="_blank" rel="noopener noreferrer"><img src="./images/icons8-whatsapp.svg" alt="Logo de WhatsApp" className="small-icon" /></a></li>
        <li><a href="tel:+59894056125"><img src="./images/phone.svg" alt="Teléfono" className="small-icon" /></a></li>
        <li><a href="./pages/contacto.html"><img src="./images/mail.svg" alt="Correo" className="small-icon" /></a></li>
      </ul>
    </footer>
  );
};

export default Footer;
