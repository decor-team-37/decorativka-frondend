import './Introduction.scss';

export const Introduction = () => {
  return (
    <section className='introduction'>
      <div className="introduction__content content">
        <div className="introduction__poster" />
        
        <div className="introduction__info">
          <h1 className="introduction__title">
            Наші декоративні рішення зроблять ваш простір особливим
          </h1>

          <p className="introduction__description">
            Наш дизайн перетворить будь-який інтер'єр у вишуканий образ,
            втілюючи ваші мрії в реальність
          </p>

          <button className='introduction__btn'>
            Детальніше
          </button>
        </div>
      </div>
    </section>
  );
};
