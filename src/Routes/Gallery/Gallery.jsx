import { Helmet } from 'react-helmet';
import './Gallery.css'

const Gallery = () => {
  const images = [
    { src: "/images/gallery/alumnos-en-salida-didactica.jpeg", alt: "Graduación de alumnos" }, // Horizontal
    { src: "/images/gallery/alumna-con-diploma.jpeg", alt: "Alumna con diploma" }, // Vertical
    // { src: "/images/gallery/despedida.jpeg", alt: "Despedida del anio" }, // Horizontal
    { src: "/images/gallery/alumnos-en-clase.jpeg", alt: "Alumnos en clase" }, // Horizontal
    { src: "/images/gallery/alumna-con-diploma-2.jpeg", alt: "Alumna con diploma" }, // Vertical
    { src: "/images/gallery/alumnos-con-regalos-de-halloween.jpeg", alt: "Alumnos con regalos de halloween" }, // Horizontal
    { src: "/images/gallery/regalos-de-pascuas.jpeg", alt: "Regalos de pascuas" }, // Vertical
    { src: "/images/gallery/despedida2.jpeg", alt: "Despedida del anio" }, // Horizontal
    { src: "/images/gallery/alumno-con-diploma.jpeg", alt: "Alumno con diploma" }, // Vertical
    { src: "/images/gallery/estudiantes-con-actores.jpg", alt: "Estudiantes con actores" }, // Horizontal
    { src: "/images/gallery/alumnos-con-diplomas.jpeg", alt: "Alumnos con diploma" }, // V
    { src: "/images/gallery/entrega-audeppi.jpg", alt: "Entrega de premios de Audeppi" }, // Horizontal
    { src: "/images/gallery/regalos-de-halloween.jpeg", alt: "Regalos de halloween" }, // Vertical
    { src: "/images/gallery/alumnos-con-diplomas-2.jpeg", alt: "Alumnos con diplomas" }, // H
    { src: "/images/gallery/alumnas-con-libretitas-audeppi.jpeg", alt: "Alumnas con libretitas de Audeppi" }, // Vertical
    { src: "/images/gallery/alumnos-en-clase-2.jpeg", alt: "Alumnos en clase" }, // Horizontal
    { src: "/images/gallery/certificados-st-clares-audeppi.jpeg", alt: "Certificados de St Clare's Audeppi" }, // Vertical
    { src: "/images/gallery/gradu-2024.jpeg", alt: "Graduacion 2024" }, // Horizontal
    { src: "/images/gallery/regalos-de-pascuas-2.jpeg", alt: "Regalos de pascuas" }, // Vertical
    { src: "/images/gallery/salida-didactica.jpg", alt: "Alumnos en salida didactica" }, // Horizontal
    { src: "/images/gallery/estudiantes-aprobadas.jpg", alt: "Estudiantes aprobadas" }, // Vertical
    { src: "/images/gallery/graduacion.jpeg", alt: "Graduacion" }, // Horizontal
    { src: "/images/gallery/cumpleanios.jpg", alt: "Festejo de cumpleanios de una alumna" }, // Vertical
    { src: "/images/gallery/despedida-de-anio.jpg", alt: "Despedida de anio" }, // Horizontal
  ];

  return (
    <>
      <Helmet>
        <title>Galería - Kingdom Institute</title>
        <meta name="description" content="Galería de fotos del instituto." />
        <meta name="keywords" content="cursos de ingles, inglés, inglés para niños, clases de inglés, inglés personalizado, examenes de inglés, preparacion de examenes" />
        <meta property="og:title" content="Galería - Kingdom Institute" />
        <meta property="og:description" content="Descubre nuestros eventos y clases a través de nuestra galería de fotos." />
        <meta property="og:image" content="/images/gallery-image.jpg" />
      </Helmet>
      <section className="gallery">
        {images.map((image, index) => (
          <picture className={index % 2 == 0 ? "item horizontal" : "item vertical"} key={index} data-aos="fade-up">
            <img src={image.src} alt={image.alt} className="photo" />
          </picture>
        ))}
      </section>
    </>
  )
}

export default Gallery