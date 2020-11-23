import TestResult from './TestResult';
import renderer from 'react-test-renderer';

const testResults = {
  id: 'a',
  title: 'НЕДОВЕР НЕДОВЕРЫЧ',
  text: 'Ты знаешь марку самой натуральной колбасы, а также где максимально выгодно ее купить. Твой список покупок всегда наготове, и ты умело им распоряжаешься, не теряя голову при виде акционных товаров. Мудрость и рациональность в продуктовом шопинге – твоя отличительная черта, это очень ценные качества, береги их.',
};


it(`Correctly TestResult render`, () => {
  const tree = renderer
    .create(
      <TestResult
        result={testResults}
      />
    );

  expect(tree).toMatchSnapshot();
});
