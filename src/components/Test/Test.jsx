import React, {useState} from 'react';
import TestQuestion from '../TestQuestion/TestQuestion';
import TestResult from '../TestResult/TestResult';

const Test = (props) => {
  const {questions, testResults} = props;
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const question = questions[step];
  let result = null;

  const getAnswers = () => {
    const formTest = document.querySelector('.form-test');
    const radioButtons = formTest.querySelectorAll('input[type=radio]');
    
    radioButtons.forEach((input) => {
      if (input.checked) {
        setAnswers([...answers, input.value]);
      }
    });
  };

  const getMaxAnswer = () => {
    const counter = answers.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1 ;
      return acc;
    }, {});
    
    const max = Object.entries(counter).reduce((prev, cur) => {
      if (prev.b > cur.b) {
        return cur;
      }
      return prev;
    });

    result = testResults.find(item => item.id === max[0]);
  };

  const renderTestScreen = () => {
    if (step >= questions.length) {
      getMaxAnswer();
      
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
    };
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    setStep(step + 1);
    getAnswers();
  }

  return (
    <section className="test">
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
            onSubmit={submitHandler}
          >
            {renderTestScreen()}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Test;