import { Helmet } from 'react-helmet'
import './CustomizedClasses.css'

const CustomizedClasses = () => {
  return (
    <>
      <Helmet>
        <title>Clases Personalizadas - Kingdom Institute</title>
        <meta name="description" content="Clases de inglés personalizadas para niños, jóvenes y adultos." />
        <meta name="keywords" content="cursos de ingles, inglés, inglés para niños, clases de inglés, inglés personalizado, examenes de inglés, preparacion de examenes" />
        <meta property="og:title" content="Clases Personalizadas - Kingdom Institute" />
        <meta property="og:description" content="Clases personalizadas para maximizar tu aprendizaje en Kingdom Institute." />
        <meta property="og:image" content="/images/custom-classes-image.jpg" />
      </Helmet>
      <section className="section1">
        <h3 data-aos="fade-down">Clases personalizadas</h3>
        <ul className="classes pt-1" data-aos="fade-right">
          <li>Clases personalizadas, para todas las edades.</li>
          <li>Clases de apoyo para escolares y liceales.</li>
          <li>Horarios flexibles.</li>
          <li>Material incluido.</li>
          <li>Modalidad presencial o virtual.</li>
        </ul>
        <div>
          <img
            src="../images/two-people-studying-together.jpg"
            alt="Personas estudiando"
            data-aos="fade-left"
          />
        </div>
      </section>
    </>
  )
}

export default CustomizedClasses