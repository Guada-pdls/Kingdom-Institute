import CourseSection from "../../Components/CourseSection/CourseSection"

const Courses = () => {
  return (
    <>
      <section className="courses">
        <CourseSection
          title="Niños"
          description="Cursos para niños de entre 8 y 12 años. Hay evaluación formal, dividiéndose en tres niveles: Audeppi Kids 1, 2 y 3."
          details="Consta de 2hs semanales, modalidad presencial o virtual. A lo largo del año habrá 4 evaluaciones formales. El examen final consta de parte oral y escrita en todos los niveles y es respaldado por el colegio St Clare’s, Oxford."
        />
        <CourseSection
          title="Jóvenes"
          description="Cursos para niños a partir de los 11 años. Las evaluaciones son: Audeppi Teens 1, 2, 3, 4, 5, 6 y Audeppi Pre-FCE."
          details="AT1, AT2, AT3 y AT4 tendrán 2hs semanales. AT5, AT6 y Pre-FCE 3hs semanales. Modalidad presencial o virtual. A lo largo del año habrá 4 evaluaciones formales. El examen final consta de parte oral y escrita en todos los niveles y es respaldado por el colegio St Clare’s, Oxford."
        />
        <CourseSection
          title="Adultos"
          description="Cursos para adultos a partir de los 16 años. Hay evaluación formal, dividiéndose en seis niveles: Audeppi Adults 1, 2, 3, 4, 5 y Pre FC."
          details="2hs semanales. Modalidad presencial o virtual. A lo largo del año habrá 4 evaluaciones formales. El examen final consta de parte oral y escrita en todos los niveles y es respaldado por el colegio St Clare’s, Oxford."
        />
        <CourseSection
          title="Negocios"
          description="Este curso se enfoca en ámbitos de negocios, como comercio internacional, finanzas, seguros, bancos y administración."
          details="Ofrecemos la opción de rendir evaluaciones por módulos o anuales."
        />
      </section>
    </>
  )
}

export default Courses