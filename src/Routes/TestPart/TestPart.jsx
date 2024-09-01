import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Question from '../../Components/Question/Question';
import { questions } from '../../data/questions';

const TestPart = () => {
  const navigate = useNavigate();
  const { part } = useParams();

  const questionsPerPart = Math.ceil(questions.length / 4);
  const startIndex = (part - 1) * questionsPerPart;
  const currentQuestions = questions.slice(startIndex, startIndex + questionsPerPart);

  const [answers, setAnswers] = useState({});

  const average = () => {
    console.log(answers)
  }

  const handleSelect = (id, letter) => {
    setAnswers(prev => ({ ...prev, [id]: letter }));
    console.log(average)
  };

  const handleNext = () => {
    if (part < 4) {
      navigate(`/?part=${part + 1}`);
    } else {
      alert('Test completado');
    }
  };

  const handlePrevious = () => {
    if (part > 1) {
      navigate(`/?part=${part - 1}`);
    }
  };

  return (
    <div>
      <h2>Parte {part} del Test</h2>
      {currentQuestions.map(q => (
        <Question key={q.id} question={q} onSelect={handleSelect} />
      ))}
      <div className="navigation">
        {part > 1 && <button onClick={handlePrevious}>Anterior</button>}
        <button onClick={handleNext}>Siguiente</button>
      </div>
    </div>
  );
};

export default TestPart;
