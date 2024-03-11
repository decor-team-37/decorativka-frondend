/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

import './SlideFirst.scss';
import { SlideData } from '../../types/SlideData';
import { Button } from '../Button';

type Props = {
  slide: SlideData;
  handleBtnNext: () => void;
  handleBtnPrev: () => void;
};

export const SlideFirst: React.FC<Props> = ({
  slide,
  handleBtnNext,
  handleBtnPrev,
}) => {
  return (
    <article className="slide-first">
      <img className="slide-first__img" src={slide.img} alt={slide.title} />

      <div className="slide-first__info">
        <h4 className="slide-first__label">{slide.label}</h4>

        <div className="slide-first__control">
          <button
            type="button"
            onClick={handleBtnPrev}
            className="slide-first__btn"
          >
            <div
              className="
                icon
                icon__arrow-button
                icon__arrow-button--white"
            />
          </button>

          <button
            type="button"
            onClick={handleBtnNext}
            className="slide-first__btn"
          >
            <div
              className="
                icon
                icon__arrow-button
                icon__arrow-button--white
                icon__arrow-button--rigth"
            />
          </button>
        </div>

        <h2 className="slide-first__title">{slide.title}</h2>

        <Button type="button" $secondary $primary isValid>
          Детальніше
        </Button>
      </div>
    </article>
  );
};
