import { Helmet } from 'react-helmet'
import './Contact.css'

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contacto - Kingdom Institute</title>
        <meta name="description" content="Formulario de contacto del instituto." />
        <meta name="keywords" content="cursos de ingles, inglés, inglés para niños, clases de inglés, inglés personalizado, examenes de inglés, preparacion de examenes" />
        <meta property="og:title" content="Contacto - Kingdom Institute" />
        <meta property="og:description" content="Ponte en contacto con Kingdom Institute para conocer más sobre nuestros cursos." />
        <meta property="og:image" content="/images/contact-image.jpg" />
      </Helmet>
      <section>
        <form id="form" data-aos="zoom-in-up" data-aos-duration="1000">
          <h4 className='contactTitle'>Formulario de contacto</h4>
          <input type="text" placeholder="Nombre" name="name" id="nam" required />
          <input type="text" placeholder="Apellido" name="last" id="last" required />
          <input type="email" placeholder="Correo electrónico" name="mail" id="mail" required />
          <textarea cols="30" rows="5" placeholder="Asunto" name="msg" id="msg" required></textarea>
          <input type="submit" id="button" value="Enviar" className="button" />
          <div className="resultado"></div>
        </form>
      </section>
    </>
  )
}

export default Contact