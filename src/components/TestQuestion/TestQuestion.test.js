import TestQuestion from './TestQuestion';
import renderer from 'react-test-renderer';

const testQuestion = {
  id: '01',
  title: 'СПИСОК ПОКУПОК – ЭТО…',
  answers: [{
    answer: 'Список чего? У меня все есть.',
    variant: 'a',
  }], 
};

it(`Correctly TestQuestion render`, () => {
  const tree = renderer
    .create(
      <TestQuestion
        question={testQuestion}
      />
    );

  expect(tree).toMatchSnapshot();
});
