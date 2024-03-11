import { Link } from 'react-router-dom';
import { FormPage } from '../../components/FormPage';
import './cooperation.scss';

export const Cooperation = () => {
  return (
    <div className="cooperation">
      <div className="content">
        <div className="page-navigation">
          <div className="icon icon__arrow-navigation" />
          <Link to="/" className="page-navigation__link ">
            Головна
          </Link>
          <div className="icon icon__elipse" />
          <p className="page-navigation__actual-link"> Співпраця </p>
        </div>

        <div className="cooperation__title">
          <h2 className="title title--h2">
            {`Приєднуйтеся до нас сьогодні, щоб разом створювати неповторні і вражаючі інтер'єри для наших клієнтів!`}
          </h2>

          <p>
            {/*  {`Запрошуємо талановитих дизайнерів і майстрів приєднатися до нашої команди для спільного розвитку та успішних проєктів! Ми пропонуємо широкий вибір декоративної штукатурки, шпалер, фарб та фотошпалер від провідних виробників. Ми цінуємо вашу креативність і професіоналізм, тому пропонуємо вам взаємовигідні умови співпраці, що включають конкурентну винагороду, підтримку та можливості для особистого зростання.`} */}
          </p>
        </div>

        <section className="cooperetion__section">
          <div className="cooperetion__section-info">
            <h2 className="title title--h2">
              Для більш детальних умов співпраці зв’яжіться з нами:
            </h2>
            <p> Телефон </p>
            <p> +38(050)542-81-93 </p>
          </div>

          <div className="cooperetion__section-img">
            <img src="" alt="" />
          </div>
        </section>

        <FormPage formVersion="consultation" />
      </div>
    </div>
  );
};
