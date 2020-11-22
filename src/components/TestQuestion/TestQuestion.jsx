import React from 'react';
import {nanoid} from 'nanoid'

const TestQuestion = (props) => {
  const {question} = props;
  const {title, answers} = question;

  return (
    <div>
      <p className="form-test__question">{title}</p>
      <ul className="form-test__answers-list">
        {answers.map((answer, index) => (
          <li className="form-test__answers-item" key={`${index}-${answer.answer}`}>
            <input className="form-test__answer-input checkbox visually-hidden" type="radio" name="question-list" id={`question-list-${index}`} value={answer.variant}/>
            <label className="form-test__answer-text" htmlFor={`question-list-${index}`}>{answer.answer}</label>
          </li>
        ))}
      </ul>
      <button className="form-test__button" type="submit" aria-label="Далее">Далее</button>
    </div>
  );
};

export default TestQuestion;