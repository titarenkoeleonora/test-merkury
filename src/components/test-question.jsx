import React from "react";

const TestQuestion = (props) => {
  const {question} = props;
  const {title, answers} = question;

  return (
    <div>
      <p className="form-test__question">{title}</p>
      <ul className="form-test__answers-list">
        {answers.map((answer, i) => (
          <li className="form-test__answers-item" key={`${i}-${answer.answer}`}>
            <input className="form-test__answer-input checkbox" type="radio" name="question-list" id={`question-list-${i}`} value={answer.variant}/>
            <label className="form-test__answer-text" htmlFor={`question-list-${i}`}>{answer.answer}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestQuestion;