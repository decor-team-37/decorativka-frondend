/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';

import './product-page.scss';
import { ControlsButtons } from '../../components/ControlsButtons';

export const ProductPage = () => {
  const product = {
    title: 'MARBURG City Glam',
    imges: [
      './img/product/01.png',
      './img/product/02.png',
      './img/product/03.png',
      './img/product/04.png',
      './img/product/05.png',
    ],
    desription: `Понад 170 років Marburger Tapetenfabrik
      виробляє в Німеччині шпалери з флізеліну, сатину та вінілу.
      Шпалери Marburg елегантні, незвичайні та обіцяють багато
      різноманітних дизайнерських можливостей для приємної атмосфери
      у вашому домі.`,
    care: 'Сухе чищення',
    size: '10м * 1.06м',
    code: '565443',
    price: 1100,
  };

  const [indexImg, setIndexImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleBtnNext = () => {
    if (indexImg !== product.imges.length - 1) {
      setIndexImg(indexImg + 1);
    } else {
      setIndexImg(0);
    }
  };

  const handleBtnPrev = () => {
    if (indexImg !== 0) {
      setIndexImg(indexImg - 1);
    } else {
      setIndexImg(product.imges.length - 1);
    }
  };

  return (
    <main className="product-page">
      <div className="product-page__content content">
        <section className="product-page__product">
          <h3 className="product-page__title">{product.title}</h3>
          <div className="product-page__media-content">
            <img
              src={product.imges[indexImg]}
              alt={`${product.title} img ${indexImg + 1}`}
              className="product-page__selected-img"
            />

            <ul className="product-page__list-imgs">
              <li
                className="product-page__item"
                style={{ opacity: product.imges[indexImg - 1] ? 1 : 0 }}
              >
                <img
                  src={product.imges[indexImg - 1]}
                  alt={`${product.title} img ${indexImg + 1}`}
                  className="product-page__item-img"
                />
              </li>

              <li className="product-page__item product-page__item--selected">
                <img
                  src={product.imges[indexImg]}
                  alt={`${product.title} img ${indexImg + 1}`}
                  className="product-page__item-img"
                />
              </li>

              <li
                className="product-page__item"
                style={{ opacity: product.imges[indexImg + 1] ? 1 : 0 }}
              >
                <img
                  src={product.imges[indexImg + 1]}
                  alt={`${product.title} img ${indexImg + 2}`}
                  className="product-page__item-img"
                />
              </li>
            </ul>

            <div className="product-page__control">
              <ControlsButtons
                color="black"
                handleBtnNext={handleBtnNext}
                handleBtnPrev={handleBtnPrev}
              />
            </div>
          </div>
          <div className="product-page__text-content">
            <p className="product-page__description">{product.desription}</p>

            <div className="product-page__care">
              <h4 className="product-page__subtitle">Догляд</h4>
              <p className="product-page__value">{product.care}</p>
            </div>

            <div className="product-page__size-and-code">
              <div className="product-page__size">
                <h4 className="product-page__subtitle">Розмір рулона</h4>
                <p className="product-page__value">{product.size}</p>
              </div>

              <div className="product-page__code">
                <h4 className="product-page__subtitle">Код товару</h4>
                <p className="product-page__value">{product.code}</p>
              </div>
            </div>

            <div className="product-page__separator" />
          </div>

          <div className="product-page__active-content">
            <div className="product-page__quantity-and-price">
              <div className="product-page__quantity">
                <p className="product-page__value">{quantity}</p>

                <div className="product-page__quantity-wrapper-btns">
                  <button
                    className="product-page__quantity-btn"
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <div className="icon icon__arrow-small" />
                  </button>
                  <button
                    className="product-page__quantity-btn"
                    type="button"
                    onClick={() => setQuantity(quantity - 1)}
                    disabled={quantity === 1}
                  >
                    <div
                      className="
                      icon
                      icon__arrow-small
                      icon__arrow-small--down"
                    />
                  </button>
                </div>
              </div>

              <p className="product-page__price">
                {`${product.price * quantity}.00`}
                <strong className="product-page__currency"> грн</strong>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
