import React from 'react';
import DiscoutCoupon from '../DiscountCoupon/DiscountCoupon.jsx';
import Test from '../Test/Test.jsx';
import EmailNewsletter from '../EmailNewsletter/EmailNewsletter.jsx';
import Footer from '../Footer/Footer.jsx';


function App(props) {
  const {questions, testResults} = props;
  
  return (
    <>
    <main>
      <DiscoutCoupon />
      <Test
        questions={questions}
        testResults={testResults}
      />
      <EmailNewsletter />
    </main>
    <Footer />
    </>
  );
}

export default App;
