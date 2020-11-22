import React from 'react';

const DiscountCoupon = () => {
  return (
    <section className="discount-coupon">
      <div className="container">
        <div className="discount-coupon__wrapper">
          <div className="discount-coupon__wrapper-title">
            <img className="logo discount-coupon__logo" src="../images/logo_dixy.png" alt="Логотип Дикси" width="198" height="55" />
            <p className="discount-coupon__title">
              Залепись <span className="discount-coupon__price">цена</span>
            </p>
            <p className="discount-coupon__dates">
              с 17 февраля по 8 марта 2020 г.
            </p>
          </div>
          <div className="discount-coupon__wrapper-give-coupon">
            <p className="discount-coupon__instruction-text discount-coupon__instruction-text--give-coupon">
              Получите на&nbsp;кассе купон со скидками<span className="discount-coupon__footnote-stars">**</span>
            </p>
            <p className="discount-coupon__footnote">
              При покупке от 700 руб.<span className="discount-coupon__footnote-stars">*</span>
            </p>
          </div>
          <div className="discount-coupon__wrapper-coupon-image">
            <img className="discount-coupon__coupon-image" src="../images/discount-coupon.png" alt="Купон со скидками" width="210" height="264" />
          </div>
          <div className="discount-coupon__wrapper-choose-product">
            <p className="discount-coupon__instruction-text discount-coupon__instruction-text--choose-product">
              Выберите товар<span className="discount-coupon__footnote-stars">***</span> и наклейте скидку
            </p>
          </div>
          <div className="discount-coupon__wrapper-sticker-instruction">
            <div className="discount-coupon__sticker discount-coupon__sticker--false">
              <p className="discount-coupon__sticker-text discount-coupon__sticker-text--false">Наклейка перекрывает штрих-код на упаковке</p>
              <img className="discount-coupon__sticker-image discount-coupon__sticker-image--false" src="../images/sticker-false.png" alt="Наклейка не должна перекрывать штрих-код" width="130" height="230" />
            </div>
            <div className="discount-coupon__sticker discount-coupon__sticker--true">
              <img className="discount-coupon__sticker-image discount-coupon__sticker-image--true" src="../images/sticker-true.png" alt="Наклейка не должна перекрывать штрих-код" width="130" height="230" />
              <p className="discount-coupon__sticker-text discount-coupon__sticker-text--true">Наклейка не перекрывает штрих-код на упаковке</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountCoupon;