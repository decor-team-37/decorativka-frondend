import React from 'react';

import { Advantage } from '../../../../../types/Advantage';
import './Advantage.scss';

type Props = {
  advantage: Advantage,
};

export const AdvantageItem: React.FC<Props> = ({ advantage }) => {

  return (
    <article className='advantage'>
      <img
        className='advantage__img'
        src={advantage.img}
        alt={advantage.title}
      />

      <div className="advantage__info">
        <h3 className="advantage__title">
          {advantage.title}
        </h3>

        <p className="advantage__text">
          {advantage.text}
        </p>

        <div className="advantage__control">
          <button className="advantage__btn">
            <div className="icon icon__cart" />
          </button>

          <button className="advantage__btn">
            <div className="icon icon__cart" />
          </button>
        </div>
      </div>
    </article>
  );
};
