import { advantages } from '../../../../constants/advantages';
import { AdvantageItem } from './Advantage';

import './Advantages.scss';

export const Advantages = () => {
  return (
    <section className='advantages'>
      <div className="advantages__content content">
        <h2 className="advantages__title">
          Наші переваги
        </h2>

        <ul className="advantages__list">
          {advantages.map(advantage => (
            <li className='advantages__item' key={advantage.id}>
              <AdvantageItem advantage={advantage} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
