import './DecorIntroduction.scss';

export const DecorIntroduction = () => {
  return (
    <section className='decor-introduction'>


      <div className="decor-introduction__content content">
        <div className="decor-introduction__poster" />
        
        <div className="decor-introduction__info">
          <h1 className="decor-introduction__title">
            Наші декоративні рішення зроблять ваш простір особливим
          </h1>

          <p className="decor-introduction__description">
            Наш дизайн перетворить будь-який інтер'єр у вишуканий образ,
            втілюючи ваші мрії в реальність
          </p>

          <button className='decor-introduction__btn'>
            Детальніше
          </button>
        </div>
      </div>
    </section>
  );
};
