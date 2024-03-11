import React from 'react';
import { Link } from 'react-router-dom';
import { FormPage } from '../../components/FormPage';
import './cooperation.scss';

enum NameLinks {
  HomePage = 'Головна',
  Cooperation = 'Співпраця',
  /*   Cooperation = 'Шпалери',
    Cooperation = 'Фарби',
    Cooperation = 'Контакти',
    Cooperation = 'Про нас',
    Cooperation = 'Нанесення декоративного покриття',
    Cooperation = 'Оформити замовлення', */
}

type Props = {
  children: React.ReactNode;
  previousLink?: NameLinks;
};

const PageNavigation: React.FC<Props> = ({ children, previousLink }) => {
  return (
    <div className="page-navigation">
      <Link to="/" className="page-navigation__link ">
        <div className="icon icon__arrow-navigation" />
        Головна
      </Link>

      {previousLink && (
        <>
          <div className="icon icon__elipse" />
          <Link to="/" className="page-navigation__link ">
            {previousLink}
          </Link>
        </>
      )}
      <div className="icon icon__elipse" />

      <p className="page-navigation__actual-link"> {children} </p>
    </div>
  );
};

export const Cooperation = () => {
  return (
    <div className="cooperation">
      <div className="content">
        <PageNavigation previousLink={NameLinks.Cooperation}>
          {NameLinks.Cooperation}
        </PageNavigation>

        <div className="cooperation__title">
          <h2 className="title title--h2">
            {`Приєднуйтеся до нас сьогодні, щоб разом створювати неповторні і вражаючі інтер'єри для наших клієнтів!`}
          </h2>

          <p>
            Приглашаем талантливых дизайнеров и мастеров присоединиться к нашей
            команде для совместного развития и успешных проектов! Мы предлагаем
            широкий выбор декоративной штукатурки, обоев, красок и фотообоев от
            ведущих производителей. Мы ценим вашу креативность и
            профессионализм, поэтому предлагаем вам взаимовыгодные условия
            сотрудничества, включая конкурентное вознаграждение, поддержку и
            возможности для
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
