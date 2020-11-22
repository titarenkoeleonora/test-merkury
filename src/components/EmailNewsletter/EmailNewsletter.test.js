import EmailNewsletter from './EmailNewsletter';
import renderer from 'react-test-renderer';

it(`Correctly EmailNewsletter render`, () => {
  const tree = renderer
    .create(
      <EmailNewsletter />
    );

  expect(tree).toMatchSnapshot();
});