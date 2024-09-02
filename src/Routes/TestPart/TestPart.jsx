// src/Routes/TestPart/TestPart.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Question from '../../Components/Question/Question';
import { questions } from '../../data/questions';
import './TestPart.css'

const TestPart = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const part = parseInt(page) || 1;

  const questionsPerPart = 25;
  const startIndex = (part - 1) * questionsPerPart;
  const currentQuestions = questions.slice(startIndex, startIndex + questionsPerPart);

  const [answers, setAnswers] = useState({});

  useEffect(() => {
    localStorage.setItem('currentPart', part);
  }, [part]);

  const handleSelect = (id, letter) => {
    setAnswers(prev => ({ ...prev, [id]: letter }));
  };

  const handleNext = () => {
    const correctAnswers = currentQuestions.filter(
      q => answers[q.id] === q.correct_answer
    ).length;

    const score = (correctAnswers / currentQuestions.length) * 100;

    // Store score of this part in ls
    const scores = JSON.parse(localStorage.getItem('scores')) || {};
    scores[part] = score;
    localStorage.setItem('scores', JSON.stringify(scores));

    if (part < 4) {
      navigate(`/page/${part + 1}`);
    } else {
      alert('Test completado');
      localStorage.removeItem('currentPart');
    }
  };

  const handlePrevious = () => {
    if (part > 1) {
      navigate(`/page/${part - 1}`);
    }
  };

  return (
    <section className='test container'>
      <nav className="navigation">
        <button
          onClick={handlePrevious}
          disabled={part === 1}
          className={part === 1 ? 'disabled' : ''}
        >
          &#8592; Anterior
        </button>

        <h3>Parte {part}</h3>

        <button
          onClick={handleNext}
          disabled={part === 4}
          className={part === 4 ? 'disabled' : ''}
        >
          Siguiente &#8594;
        </button>
      </nav>
      {currentQuestions.map(q => (
        <Question key={q.id} question={q} onSelect={handleSelect} />
      ))}
      <button className='button'>{part === 4 ? 'Finalizar test' : 'Siguiente parte'} </button>
    </section>
  );
};

export default TestPart;
