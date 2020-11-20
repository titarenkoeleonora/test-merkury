import React, {useState} from "react";
import TestQuestion from "./test-question";
import TestResult from "./test-result";

const Test = (props) => {
  const {questions} = props;
  const [step, setStep] = useState(0);
  const question = questions[step];

  const [answers, setAnswers] = useState([]);

  console.log(answers);

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
      let counter = {};

      answers.forEach(val => {
        if (val in counter) {
          counter[val] += 1;
        } else {
          counter[val] = 1;
        }
      });

      // let max = Object.entries(counter).reduce((max, n) => n[1] > max[1] ? n : max);
      var max = Object.entries(counter).reduce((prev, cur) => {
        if (prev.b > cur.b) {
          return prev
        }
        return cur
      })
      console.log(max[0]);
      
      return (
        <TestResult />
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