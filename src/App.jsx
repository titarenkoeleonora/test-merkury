import React from "react";
import DiscoutCoupon from './components/discount-coupon.jsx';
import Test from './components/test.jsx';
import EmailNewsletter from './components/email-newsletter.jsx';
import Footer from './components/footer.jsx';

function App() {
  return (
    <>
    <main>
      <DiscoutCoupon />
      <Test />
      <EmailNewsletter />
    </main>
    <Footer />
    </>
  );
}

export default App;
