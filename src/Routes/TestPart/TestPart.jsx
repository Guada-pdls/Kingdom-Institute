import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Question from "../../Components/Question/Question";
import { questions } from "../../data/questions";
import "./TestPart.css";
import Swal from "sweetalert2";
import Arrow from "../../Components/Arrow/Arrow";
import { Helmet } from "react-helmet";

const TestPart = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const part = parseInt(page) || 1;

  const questionsPerPart = 25;
  const startIndex = (part - 1) * questionsPerPart;
  const currentQuestions = questions.slice(
    startIndex,
    startIndex + questionsPerPart
  );

  const savedAnswers = JSON.parse(localStorage.getItem("answers")) || {};
  const [answers, setAnswers] = useState(savedAnswers[part] || {});

  useEffect(() => {
    // Save answers when part changes
    const storedAnswers = JSON.parse(localStorage.getItem("answers")) || {};
    storedAnswers[part] = answers;
    localStorage.setItem("answers", JSON.stringify(storedAnswers));
  }, [answers, part]);

  const handleSelect = (id, letter) => {
    setAnswers((prev) => ({ ...prev, [id]: letter }));
  };

  const handleNext = () => {
    const totalQuestions = currentQuestions.length;
    const answeredQuestions = Object.keys(answers).length;
    const correctAnswers = currentQuestions.filter(q => {
      return answers[q.id] === q.correct_answer;
    }).length;
  
    const score = (correctAnswers / totalQuestions) * 100;
  
    // ❌ Bloquear si no responde nada en cualquier nivel
    if (answeredQuestions === 0) {
      Swal.fire({
        title: "Atención",
        text: "Debes responder al menos una pregunta antes de continuar.",
        icon: "warning",
        confirmButtonText: "Entendido"
      });
      return;
    }
  
    // 🔍 Validaciones para cada parte:
    if (part === 1) {
      // 📌 A1: Menos del 50% es A0, si no, sigue a A2
      if (score < 50) return finishTest("A0");
    } else if (part === 2) {
      // 📌 A2: Menos del 60% termina con A1
      if (score < 60) return finishTest("A1");
    } else if (part === 3) {
      // 📌 B1: Menos del 60% termina con A2
      if (score < 60) return finishTest("A2");
    } else if (part === 4) {
      // 📌 B2: Se necesita 85% o más para obtener B2
      return finishTest(score >= 85 ? "B2" : "B1");
    }
  
    // ✅ Si pasa todas las validaciones, avanzar a la siguiente parte
    localStorage.setItem("currentPart", part + 1);
    navigate(`/placement-test/test/${part + 1}`);
    window.scrollTo(0, 0);
  };
  

  const finishTest = (finalLevel) => {
    Swal.fire({
      title: "¡Test finalizado!",
      text: `Tu nivel de inglés es: ${finalLevel}`,
      icon: "success",
      confirmButtonText: "Volver al inicio",
    }).then(() => {
      navigate("/");
    });

    localStorage.removeItem("currentPart");
    localStorage.removeItem("answers");
  };

  const handlePrevious = () => {
    if (part > 1) {
      navigate(`/placement-test/test/${part - 1}`);
    }
  };

  return (
    <>
      <Helmet>
        <title>Test de Colocación - Parte {page} - Kingdom Institute</title>
        <meta
          name="description"
          content={`Realiza la parte ${page} de nuestro test de nivelación para conocer tu nivel de inglés.`}
        />
        <meta
          name="keywords"
          content={`test de nivelacion, parte ${page}, Kingdom Institute, inglés`}
        />
        <meta
          property="og:title"
          content={`Test de Nivelacion - Parte ${page} - Kingdom Institute`}
        />
        <meta
          property="og:description"
          content={`Realiza la parte ${page} de nuestro test de Nivelacion.`}
        />
        <meta property="og:image" content="/images/placement-test-part.jpg" />
      </Helmet>
      <section className="test container">
        <nav className="navigation">
          <button
            onClick={handlePrevious}
            disabled={part === 1}
            className={part === 1 ? "disabled prev" : "prev"}
          >
            <Arrow
              color={part !== 1 ? "#bebebe" : "#2e2e2e"}
              direction="left"
            />{" "}
            <span className="btn-text">Anterior</span>
          </button>

          <h3>Parte {part}</h3>

          <button
            onClick={handleNext}
            disabled={part === 4}
            className={part === 4 ? "disabled next" : "next"}
          >
            <span className="btn-text">Siguiente</span>{" "}
            <Arrow color={part !== 4 ? "#bebebe" : "#2e2e2e"} />
          </button>
        </nav>
        <div className="questions">
          {currentQuestions.map((q) => (
            <Question
              key={q.id}
              question={q}
              onSelect={handleSelect}
              selectedAnswer={answers[q.id]}
            />
          ))}
        </div>
        <button onClick={handleNext} className="button">
          {part === 4 ? "Finalizar test" : "Siguiente parte"}
        </button>
      </section>
    </>
  );
};

export default TestPart;
