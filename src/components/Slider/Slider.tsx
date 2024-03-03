import React, { useState } from 'react';
import { advantages } from '../../constants/advantages';
import { Advantage } from '../../types/Advantage';

import './Slider.scss';

type SlideProps = {
  slide: Advantage,
  handleBtnNext: () => void,
  handleBtnPrev: () => void,
}

type Props = {
  Slide: React.FC<SlideProps>,
  slides: Advantage[],
  classParent: string,
};

export const Slider: React.FC<Props> = ({ Slide, slides, classParent }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const nextSlide = () => {
    setImageIndex(currentIndex => (
      currentIndex === advantages.length - 1 ? 0 : currentIndex + 1
    ))
  };

  const prevSlide = () => {
    setImageIndex(currentIndex => (
      currentIndex === 0 ? advantages.length - 1 : currentIndex - 1
    ))
  };

  return (
    <ul className={`${classParent}__slider slider`}>
      {slides.map(slideCurrent => (
        <li
          className='slider__item'
          key={slideCurrent.id}
          style={{
            translate: `${-100 * imageIndex}%`,
          }}
        >
          <Slide
            slide={slideCurrent}
            handleBtnNext={nextSlide}
            handleBtnPrev={prevSlide}
          />
        </li>
      ))}
    </ul>
  );
};