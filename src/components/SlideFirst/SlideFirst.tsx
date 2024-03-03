import React from 'react';

import './SlideFirst.scss';
import { SlideData } from '../../types/SlideData';

type Props = {
  slide: SlideData,
  handleBtnNext: () => void,
  handleBtnPrev: () => void,
};


export const SlideFirst: React.FC<Props> = (
  { slide,
    handleBtnNext,
    handleBtnPrev,
  }) => {
  return (
    <article className='slide-first'>
      <img
        className='slide-first__img'
        src={slide.img}
        alt={slide.title}
      />

      <div className="slide-first__info">
        <h4 className="slide-first__label">Послуги</h4>

        <div className="slide-first__control">
          <button onClick={handleBtnPrev} className="slide-first__btn">
            <div
              className="
                icon 
                icon__arrow-button
                icon__arrow-button--white"
            />
          </button>

          <button onClick={handleBtnNext} className="slide-first__btn">
            <div
              className="
                icon 
                icon__arrow-button 
                icon__arrow-button--white
                icon__arrow-button--rigth"
            />
          </button>
        </div>

        <h2 className="slide-first__title">
          {slide.title}
        </h2>

        <button className='slide-first__btn-more'>
          Детальніше
        </button>
      </div>
    </article>
  );
};