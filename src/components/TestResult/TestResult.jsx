import React from 'react';

const TestResult = (props) => {
  const {result} = props;

  return (
    <div className="test-result form-test__result">
      <p className="test-result__title">{result.title}</p>
        <p className="test-result__text">
          {result.text}
        </p>
    </div>
  );
};

export default TestResult;