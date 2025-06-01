import { Helmet } from "react-helmet"
import CourseSection from "../../Components/CourseSection/CourseSection"
import "./Courses.css"

const Courses = () => {
  return (
    <>
      <Helmet>
        <title>Cursos - Kingdom Institute</title>
        <meta name="description" content="Cursos de inglés para niños, jóvenes y adultos. Capacitaciones para negocios, preparación de exámenes internacionales y clases personalizadas." />
        <meta name="keywords" content="cursos de ingles, inglés, inglés para niños, clases de inglés, inglés personalizado, examenes de inglés, preparacion de examenes" />
        <meta property="og:title" content="Cursos - Kingdom Institute" />
        <meta property="og:description" content="Explora una variedad de cursos en Kingdom Institute para mejorar tu aprendizaje." />
        <meta property="og:image" content="/images/courses-image.jpg" />
      </Helmet>
      <section className="courses">
        <CourseSection
          title="Niños"
          description="Cursos para niños de entre 8 y 12 años. Los niveles son: Kids 1, 2 y 3."
          details="Consta de 2hs semanales, modalidad presencial o virtual. A lo largo del año habrá 4 evaluaciones formales. El examen final consta de parte oral y escrita en todos los niveles y es respaldado por el colegio St Clare’s, Oxford."
        />
        <CourseSection
          title="Jóvenes"
          description="Cursos para jóvenes a partir de los 11 años. Los niveles son: Teens 1, 2, 3, 4, 5, 6 y Audeppi Pre-FCE."
          details="AT1, AT2, AT3 y AT4 tendrán 2hs semanales. AT5, AT6 y Pre-FCE 3hs semanales. Modalidad presencial o virtual. A lo largo del año habrá 4 evaluaciones formales. El examen final consta de parte oral y escrita en todos los niveles y es respaldado por el colegio St Clare’s, Oxford."
        />
        <CourseSection
          title="Adultos"
          description="Cursos para adultos a partir de los 16 años. Los niveles son: Adults 1, 2, 3, 4, 5 y Pre FC."
          details="2hs semanales. Modalidad presencial o virtual. A lo largo del año habrá 4 evaluaciones formales. El examen final consta de parte oral y escrita en todos los niveles y es respaldado por el colegio St Clare’s, Oxford."
        />
      </section>
    </>
  )
}

export default Courses