import { useState } from 'react';
import { advantages } from '../../../../constants/advantages';
import { AdvantageItem } from './Advantage';

import './Advantages.scss';

export const Advantages = () => {
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
    <section className='advantages'>
      <div className="advantages__content content">
        <h2 className="advantages__title">
          Наші переваги
        </h2>

        <ul className="advantages__list">
          {advantages.map(advantage => (
            <li
              className='advantages__item'
              key={advantage.id}
              style={{
                translate: `${-100 * imageIndex}%`,
              }}
            >
              <AdvantageItem
                advantage={advantage}
                handleBtnNext={nextSlide}
                handleBtnPrev={prevSlide}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
