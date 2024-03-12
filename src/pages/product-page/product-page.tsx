/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';

import './product-page.scss';

export const ProductPage = () => {
  const product = {
    title: 'MARBURG City Glam',
    imges: [
      './img/product/01.png',
      './img/product/01.png',
      './img/product/01.png',
      './img/product/01.png',
      './img/product/01.png',
    ],
  };

  const [indexImg, setIndexImg] = useState(0);

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

            <ul className="product-page__controls">
              {product.imges.map(img => (
                <li key={img}>
                  <img
                    src={img}
                    alt={`${product.title} img ${indexImg + 1}`}
                    className="product-page__img-label"
                  />
                </li>
              ))}
            </ul>

                
          </div>
        </section>
      </div>
    </main>
  );
};
