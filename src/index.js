import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';
import questions from './mocks/questions';
import testResults from './mocks/test-results';

import './scss/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <App
      questions={questions}
      testResults={testResults}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
