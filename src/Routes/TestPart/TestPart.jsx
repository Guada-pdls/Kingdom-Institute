import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Question from '../../Components/Question/Question';
import { questions } from '../../data/questions';
import './TestPart.css'
import Swal from 'sweetalert2';
import Arrow from '../../Components/Arrow/Arrow';

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
      navigate(`/placement-test/test/${part + 1}`);
    } else {
      const finalLevel = englishLevel(scores);
      Swal.fire({
        title: "Good job!",
        text: `Tu nivel de inglés es: ${finalLevel}`,
        icon: "success"
      });
      localStorage.removeItem('currentPart');
      localStorage.removeItem('scores');
    }
  };

  const handlePrevious = () => {
    if (part > 1) {
      navigate(`/placement-test/test/${part - 1}`);
    }
  };

  const englishLevel = (scores) => {
    let totalScore = 0;
    let partsCount = 0;
  
    for (let part in scores) {
      totalScore += scores[part];
      partsCount++;
    }
  
    const averageScore = totalScore / partsCount;
  
    if (averageScore >= 85) return 'B2';
    if (averageScore >= 70) return 'B1';
    if (averageScore >= 50) return 'A2';
    return 'A1';
  };
  
  return (
    <section className='test container'>
      <nav className="navigation">
        <button
          onClick={handlePrevious}
          disabled={part === 1}
          className={part === 1 ? 'disabled prev' : 'prev'}
        >
          <Arrow color={part !== 1 ? '#bebebe' : '#2e2e2e'} direction='left' /> Anterior
        </button>

        <h3>Parte {part}</h3>

        <button
          onClick={handleNext}
          disabled={part === 4}
          className={part === 4 ? 'disabled next' : 'next'}
        >
          Siguiente <Arrow color={part !== 4 ? '#bebebe' : '#2e2e2e'}/>
        </button>
      </nav>
      {currentQuestions.map(q => (
        <Question key={q.id} question={q} onSelect={handleSelect} />
      ))}
      <button onClick={handleNext} className='button'>
        {part === 4 ? 'Finalizar test' : 'Siguiente parte'}
      </button>
    </section>
  );
};

export default TestPart;
