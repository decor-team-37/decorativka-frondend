/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

import './ControlsButtons.scss';

type Props = {
  color: 'white' | 'black';
  handleBtnNext: () => void;
  handleBtnPrev: () => void;
};

export const ControlsButtons: React.FC<Props> = ({
  color,
  handleBtnNext,
  handleBtnPrev,
}) => {
  return (
    <div className="control">
      <button onClick={handleBtnPrev} className="control__btn" type="button">
        <div
          className={`
            icon
            icon__arrow-button
            icon__arrow-button--${color}
          `}
        />
      </button>

      <button onClick={handleBtnNext} className="control__btn" type="button">
        <div
          className={`
            icon
            icon__arrow-button
            icon__arrow-button--${color}
            icon__arrow-button--rigth
          `}
        />
      </button>
    </div>
  );
};
