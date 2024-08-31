import './CustomizedClasses.css'

const CustomizedClasses = () => {
  return (
    <section className="section1">
      <h3 data-aos="fade-down">Clases personalizadas</h3>
      <ul className="offerings pt-1" data-aos="fade-right">
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
  )
}

export default CustomizedClasses