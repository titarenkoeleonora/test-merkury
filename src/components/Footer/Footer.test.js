import Footer from './Footer';
import renderer from 'react-test-renderer';

it(`Correctly Footer render`, () => {
  const tree = renderer
    .create(
      <Footer />
    );

  expect(tree).toMatchSnapshot();
});
