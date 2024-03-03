import React from 'react';

import { Advantage } from '../../../../../types/Advantage';
import './Advantage.scss';

type Props = {
  advantage: Advantage,
  handleBtnNext: () => void,
  handleBtnPrev: () => void
};

export const AdvantageItem: React.FC<Props> = (
  { advantage,
    handleBtnNext,
    handleBtnPrev,
  }) => {

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

        <div className="advantage__separator" />

        <div className="advantage__control">
          <button onClick={handleBtnPrev} className="advantage__btn">
            <div className="icon icon__arrow-button-black" />
          </button>

          <button onClick={handleBtnNext} className="advantage__btn">
            <div className="icon icon__arrow-button-black icon__arrow-button-black--rigth" />
          </button>
        </div>
      </div>
    </article>
  );
};
