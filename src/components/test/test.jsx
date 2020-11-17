import React from "react";

const Test = () => {
  return (
    <section className="test">
      <div className="container">
        <h2 className="test__title">Пройди тест</h2>
        <p className="test__text">
          Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности позволяет оценить значение новых предложений.
        </p>
        <form className="form-test test__form" method="post">
          <p className="form-test__question">Список покупок – это…</p>
          <ul className="form-test__answers-list">
            <li className="form-test__answers-item">
              <input className="form-test__answer-input" type="checkbox" name="question-list-1" id="question-list-1" value="a"/>
              <label className="form-test__answer-text" htmlFor="question-list-1">Список чего? У меня все есть.</label>
            </li>
            <li className="form-test__answers-item">
              <input className="form-test__answer-input" type="checkbox" name="question-list-2" id="question-list-2" value="b"/>
              <label className="form-test__answer-text" htmlFor="question-list-2">Кандалы, которые сковывают порывы моей души. Надо покупать сердцем, а не списком.</label>
            </li>
            <li className="form-test__answers-item">
              <input className="form-test__answer-input" type="checkbox" name="question-list-3" id="question-list-3" value="c"/>
              <label className="form-test__answer-text" htmlFor="question-list-3">Огонёк маяка, который ведет меня сквозь гастрономический шторм.</label>
            </li>
          </ul>
          <button className="form-test__button" type="submit" aria-label="Далее">Далее</button>
          <div className="test-result form-test__result">
            <p className="test-result__title">Недовер Недоверыч</p>
            <p className="test-result__text">
              Ты знаешь марку самой натуральной колбасы, а также где максимально
              выгодно ее купить. Твой список покупок всегда наготове, и ты умело им
              распоряжаешься, не теряя голову при виде акционных товаров. Мудрость и
              рациональность в продуктовом шопинге – твоя отличительная черта, это очень
              ценные качества, береги их.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Test;