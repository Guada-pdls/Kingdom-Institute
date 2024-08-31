import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import ExamDetail from '../../Components/ExamDetail/ExamDetail';

const Exams = () => {
  return (
    <>
      <section className="exams">
        <div className="padt">
          <h3 className="centered bold" data-aos="fade-down">
            Preparación de exámenes internacionales
          </h3>
          <h4 data-aos="fade-right">Cursos de preparación para:</h4>
          <ul className="offerings ms-5">
            <li>Cambridge KEY y PET. Presencial o virtual, 3hs semanales.</li>
            <li>Cambridge FCE. Presencial o virtual, 4hs semanales.</li>
            <li>Michigan ECCE. Presencial o virtual, 4hs semanales.</li>
          </ul>
        </div>

        <ExamDetail
          title="Cambridge KEY"
          description={[
            'La titulación A2 Key prueba que puedes comunicarte en inglés en situaciones simples y cotidianas.',
            'El examen pone a prueba las cuatro destrezas lingüísticas en inglés: Comprensión de Lectura (Reading), Expresión Escrita (Writing), Comprensión Auditiva (Listening) y Expresión Oral (Speaking).',
            'Con esta titulación, tendrás la confianza necesaria para abordar exámenes de nivel superior como B1 Preliminary y B2 First.',
          ]}
          examDetails={[
            'Formato de examen: Versión ordenador o papel',
            'Número de pruebas: 3',
            'Duración del examen: Cerca de 2 horas',
          ]}
          certificateDetails={[
            'Comprender y utilizar frases y expresiones básicas;',
            'Comprender el inglés escrito elemental;',
            'Presentarte y responder preguntas básicas sobre ti mismo;',
            'Interactuar con hablantes de inglés a un nivel básico.',
          ]}
          reasons={[
            'Obtienes una titulación que está reconocida mundialmente;',
            'Mejoras tus perspectivas en el ámbito laboral, estudios y viajes;',
            'Puedes demostrar que posees las destrezas lingüísticas básicas para comunicarte en inglés.',
          ]}
        />

        <ExamDetail
          title="Cambridge PET"
          description={[
            'La titulación B1 Preliminary demuestra que dominas los aspectos fundamentales del inglés y posees las destrezas lingüísticas necesarias para un uso cotidiano.',
            'En tu camino de aprendizaje, este examen es el paso intermedio entre A2 Key y B2 First.',
          ]}
          examDetails={[
            'Formato de examen: Versión ordenador o papel',
            'Número de pruebas: 3',
            'Duración del examen: Cerca de 2 horas y 20 minutos',
          ]}
          certificateDetails={[
            'leer libros de texto y artículos sencillos en inglés;',
            'escribir cartas y correos electrónicos sobre asuntos cotidianos;',
            'tomar notas de las reuniones;',
            'tomar conciencia de opiniones y estados de ánimo en el inglés hablado y escrito.',
          ]}
          reasons={[
            'Desarrollas tu capacidad para comunicarte en inglés en tareas y situaciones prácticas;',
            'Obtienes una valiosa titulación que se acepta en todo el mundo;',
            'Mejoras tus perspectivas en lo que respecta al trabajo, los estudios y los viajes.',
          ]}
        />

        <ExamDetail
          title="Cambridge FCE"
          description={[
            'Con la titulación B2 First, demuestras ante el mundo que posees las destrezas lingüísticas necesarias para vivir y trabajar de manera independiente en un país angloparlante, así como, para estudiar cursos impartidos en inglés.',
            'En tu trayectoria de aprendizaje, este examen es el paso intermedio entre B1 Preliminary y C1 Advanced.',
          ]}
          examDetails={[
            'Formato del examen: Versión ordenador o papel',
            'Número de pruebas: 4',
            'Duración del examen: Cerca de 3 horas y media',
          ]}
          certificateDetails={[
            'lograr una comunicación clara y efectiva;',
            'estar informado con las noticias actuales;',
            'escribir un inglés claro y preciso, así como, expresar tus opiniones y entender diferentes puntos de vista;',
            'escribir cartas, informes, historias y muchos otros tipos de textos.',
          ]}
          reasons={[
            'Está reconocido en varias instituciones educativas para realizar cursos básicos/preparatorios/primarios en países angloparlantes.',
            'Está reconocido en varias instituciones universitarias para realizar programas impartidos en inglés.',
          ]}
        />

        <ExamDetail
          title="Michigan ECCE"
          description={[
            'El ECCE está dirigido al nivel intermedio alto (B2) del Marco Común Europeo de Referencia para las Lenguas (MCER). Los usuarios de idiomas en este nivel de competencia pueden:',
          ]}
          certificateDetails={[
            'Comprender las ideas principales de textos complejos sobre temas tanto concretos como abstractos, incluidas discusiones técnicas en su campo de especialización.',
            'Interactuar con un grado de fluidez y espontaneidad que hace posible la interacción regular con hablantes nativos sin tensión para ninguna de las partes.',
            'Producir un texto claro y detallado sobre una amplia gama de temas y explicar un punto de vista sobre un tema de actualidad, dando las ventajas y desventajas de varias opciones (Consejo de Europa, 2001: 24)',
          ]}
          examDetails={[
            'Número de pruebas: 4',
            'Duración del examen: Cerca de 2 horas y 45 minutos',
          ]}
        />
      </section>
    </>
  );
};

export default Exams