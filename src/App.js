import React from "react";
import './App.css';
import DiscoutCoupon from './components/discount-coupon/discount-coupon.jsx';
import Test from './components/test/test.jsx';
import EmailNewsletter from './components/email-newsletter/email-newsletter.jsx';
import Footer from './components/footer/footer.jsx';

function App() {
  return (
    <>
      <DiscoutCoupon />
      <Test />
      <EmailNewsletter />
      <Footer />
    </>
  );
}

export default App;
