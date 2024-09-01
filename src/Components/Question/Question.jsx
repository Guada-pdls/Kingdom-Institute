/* eslint-disable react/prop-types */
const Question = ({ question, onSelect }) => (
  <div className="question">
    <h3>{question.question}</h3>
    <ul>
      {question.options.map(option => (
        <li key={option.letter}>
          <label>
            <input
              type="radio"
              name={`question-${question.id}`}
              value={option.letter}
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