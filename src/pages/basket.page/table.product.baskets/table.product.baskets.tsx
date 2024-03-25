import React from 'react';
import { Product } from '../../../types/Products';
import { CustomInputNumber } from '../../../components/CustomInputNumber';
import './table.product.baskets.scss';

type Props = {
  cartItemsOrder: Product[];
  handleChooseCart: (product: Product, action: string) => void;
};

export const TableProductsBasket: React.FC<Props> = ({
  cartItemsOrder,
  handleChooseCart,
}) => {
  const totalPrice = cartItemsOrder.reduce(
    (acc, el) => acc + el.price * el.quantity,
    0,
  );

  return (
    <div className="TableProductsBasket">
      <table className="table-basket">
        <thead className="table-basket__thead">
          <tr className="table-basket__tr">
            <th> Інформація про товар </th>
            <th>Ціна</th>
            <th>Кількість</th>
            <th>Сума</th>
            <th>{` `}</th>
          </tr>
        </thead>

        <div className="table-basket__line" />

        <tbody>
          {cartItemsOrder.map(product => (
            <tr key={product.id} className="table-basket__tr">
              <td>
                <div className="mainInfo">
                  <img
                    src={product.img || '../../../img/products/01.png'}
                    alt={product.name}
                    className="mainInfo__img"
                  />

                  <div className="mainInfo__info">
                    <p className="mainInfo__categories">{product.name}</p>
                    <p className="mainInfo__name">{product.name}</p>
                    <p className="mainInfo__id">
                      Код товару
                      <span className="mainInfo__id-code">{`   ${product.id}`}</span>
                    </p>
                  </div>
                </div>
              </td>

              <td aria-label="price">
                <span>{product.price} грн.</span>
              </td>

              <td aria-label="control items">
                <CustomInputNumber
                  changeQuantity={action => {
                    handleChooseCart(product, action);
                  }}
                  quantity={product.quantity}
                />
              </td>

              <td aria-label="price">
                <span>{product.price * product.quantity} грн.</span>
              </td>

              <td
                aria-label="you can control quantity"
                className="table-basket__td table-basket__td--right"
              >
                <button
                  aria-label="delete items from basket"
                  type="button"
                  onClick={() => handleChooseCart(product, 'delete')}
                >
                  <div className="icon icon--close-black" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="totalAmount">
        Сума:
        <span className="totalAmount__price">{totalPrice}</span>
        <span className="totalAmount__currency">грн.</span>
      </div>
    </div>
  );
};
