import React, {useState} from "react";
import TestQuestion from "./test-question";
import TestResult from "./test-result";

const Test = (props) => {
  const {questions, testResults} = props;
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const question = questions[step];

  const getAnswers = () => {
    const inputs = document.querySelectorAll("input[type=radio]");
    
    inputs.forEach((input) => {
      if (input.checked) {
        setAnswers([...answers, input.value]);
      }
    });
  };

  const renderTestScreen = () => {
    if (step >= questions.length) {

      let counter = answers.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1 ;
        return acc;
      }, {});
      
      var max = Object.entries(counter).reduce((prev, cur) => {
        if (prev.b > cur.b) {
          return cur
        }
        return prev
      })

      const result = testResults.find(item => item.id === max[0]);
      
      return (
        <TestResult
          result={result}
        />
      );
    }

    if (question) {
      return (
        <TestQuestion
          question={question}
        />
      );
    }
  };

  return (
    <section className="test page-content__test">
      <div className="container">
        <div className="test__wrapper">
          <div className="test__text-wrapper">
            <h2 className="test__title">Пройди тест</h2>
            <p className="test__text">
              Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности позволяет оценить значение новых предложений.
            </p>
          </div>
          <form
            className="form-test test__form"
            method="post"
            onSubmit={(evt) => {
              evt.preventDefault();
              setStep(step + 1);
              getAnswers();
            }}
          >
            {renderTestScreen()}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Test;