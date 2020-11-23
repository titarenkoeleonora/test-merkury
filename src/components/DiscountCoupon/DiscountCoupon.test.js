import DiscountCoupon from './DiscountCoupon';
import renderer from 'react-test-renderer';

it(`Correctly DiscountCoupon render`, () => {
  const tree = renderer
    .create(
      <DiscountCoupon />
    );

  expect(tree).toMatchSnapshot();
});
