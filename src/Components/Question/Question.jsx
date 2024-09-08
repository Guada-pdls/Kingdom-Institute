/* eslint-disable react/prop-types */
import './Question.css'

const Question = ({ question, onSelect, selectedAnswer }) => (
  <div className="question">
    <h5>{question.id}&#41; {question.question}</h5>
    <ul>
      {question.options.map(option => (
        <li key={option.letter}>
          <label>
            <input
              type="radio"
              name={`question-${question.id}`}
              value={option.letter}
              checked={selectedAnswer === option.letter}
              onChange={() => onSelect(question.id, option.letter)}
            />
            {option.text}
          </label>
        </li>
      ))}
    </ul>
  </div>
);

export default Question;