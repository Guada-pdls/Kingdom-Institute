import './Offerings.css'

const Offerings = () => {
  return (
      <div className="offerings" data-aos="zoom-in">
        <h3>OFRECEMOS</h3>
        <ul>
          <li><img src="./icons/arrow-right.svg" alt="Flecha" />Cursos para todas las edades en modalidad presencial o virtual.</li>
          <li><img src="./icons/arrow-right.svg" alt="Flecha" />Exámenes con aval internacional de las universidades de Cambridge, St. Clare&apos;s y Michigan.</li>
          <li><img src="./icons/arrow-right.svg" alt="Flecha" />Nuestros exámenes AT5, AT6 o Audeppi Pre First te permiten <span>exonerar Inglés en 5to y 6to de bachillerato</span>.</li>
          <li><img src="./icons/arrow-right.svg" alt="Flecha" />Salidas didácticas</li>
          <li><img src="./icons/arrow-right.svg" alt="Flecha" />Bonificaciones especiales para familiares o amigos</li>
          <li><img src="./icons/arrow-right.svg" alt="Flecha" />Clases de apoyo para escolares y liceales</li>
          <li><img src="./icons/arrow-right.svg" alt="Flecha" />Cursos en la mañana y en la tarde</li>
        </ul>
      </div>
  );
};

export default Offerings;
