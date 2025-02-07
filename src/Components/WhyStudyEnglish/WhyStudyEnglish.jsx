import "./WhyStudyEnglish.css";

const WhyStudyEnglish = () => {
  return (
    <section className="whyStudyEnglish" data-aos="zoom-in">
      <h3>¿Por qué estudiar inglés?</h3>
      <ol className="reasons">
        <li>
          <img src="./icons/globe.svg" alt="global" />
          <h5>Idioma global</h5>Es la lengua más hablada en el mundo en cuanto a
          comunicación internacional, negocios y turismo.
        </li>
        <li>
          <img src="./icons/briefcase.svg" alt="trabajo" />
          <h5>Oportunidades laborales</h5>Es fundamental para muchos empleos
          internacionales y en empresas multinacionales.
        </li>
        <li>
          <img src="./icons/plane.svg" alt="vuelo" />
          <h5>Viajes internacionales</h5>Facilita la comunicación durante viajes, ya
          que es un idioma ampliamente comprendido en todo el mundo.
        </li>
        <li>
          <img src="./icons/mask.svg" alt="mascara" />
          <h5>Cultura y entretenimiento</h5>Gran parte de las películas, series, libros
          y música más influyentes están en inglés.
        </li>
        <li>
          <img src="./icons/psychology.svg" alt="Psicología" />
          <h5>Habilidades cognitivas</h5>Aprender un segundo idioma mejora la memoria, la capacidad de concentración y el pensamiento crítico.
        </li>
        <li>
          <img src="./icons/rocket.svg" alt="cohete" />
          <h5>Desarrollo personal y laboral</h5>Aprender inglés impulsa la confianza y
          abre nuevas oportunidades de crecimiento personal y profesional.
        </li>
      </ol>
    </section>
  );
};

export default WhyStudyEnglish;
