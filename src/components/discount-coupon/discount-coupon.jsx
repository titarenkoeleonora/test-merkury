import React from "react";

const DiscountCoupon = () => {
  return (
    <section className="discount-coupon">
      <div className="container">
        <div className="discount-coupon__wrapper-title">
        <img className="logo discount-coupon__logo" src="./images/logo-dixy.png" alt="Дикси" width="198" height="55" />
          <p className="discount-coupon__title">Залепись цена</p>
          <p className="discount-coupon__dates">с 17 февраля по 8 марта 2020 г.</p>
        </div>
        <div className="discount-coupon__wrapper-give-coupon">
          <p className="discount-coupon__instruction-text">Получите на кассе купон со скидками**</p>
          <p className="discount-coupon__footnote">При покупке от 700 руб.*</p>
        </div>
        <div className="discount-coupon__wrapper-coupon-image">
          <img className="discount-coupon__coupon-image" src="./images/discount-coupon.png" alt="Купон со скидками" width="243" height="304" />
        </div>
        <div className="discount-coupon__wrapper-choose-product">
          <p className="discount-coupon__instruction-text">Выберите товар*** и наклейте скидку</p>
        </div>
        <div className="discount-coupon__wrapper-sticker-instruction">
          <div className="discount-coupon__sticker-false">
            <p className="discount-coupon__sticker-false-text">Наклейка перекрывает штрих-код на упаковке</p>
            <img className="discount-coupon__sticker-false-image" src="./images/sticker-false.png" alt="Наклейка не должна перекрывать штрих-код" width="114" height="239" />
          </div>
          <div className="discount-coupon__sticker-true">
            <p className="discount-coupon__sticker-true-text">Наклейка не перекрывает штрих-код на упаковке</p>
            <img className="discount-coupon__sticker-true-image" src="./images/sticker-true.png" alt="Наклейка не должна перекрывать штрих-код" width="142" height="239" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountCoupon;