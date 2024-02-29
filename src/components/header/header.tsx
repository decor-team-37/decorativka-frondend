import React, { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import './Header.scss';

type Props = {
  isMenu: boolean,
  toggleMenu: React.Dispatch<React.SetStateAction<boolean>>,
};

export const Header: React.FC<Props> = ({ isMenu, toggleMenu }) => {
  const [isOpenServices, setIsOpenServices] = useState(false);
  const [isOpenProducts, setIsOpenProducts] = useState(false);

  return (
    <header className='header'>
      <div className='header__content'>
        <nav className='header__nav'>
          <Link to='/'>
            <img src='../../../icons/logo.svg' alt='logo' className='logo' />
          </Link>

          <ul className='header__categorys'>
            <li className='header__category-item'>
              <button className='header__category-btn' onClick={() => setIsOpenServices(!isOpenServices)}>
                <div className='header__category-title'>
                  <h4 className='header__category-name'>
                    Послуги
                  </h4>

                  <div className="header__icon-arrow">
                    <div className={classNames(
                      'icon',
                      'icon__arrow-white',
                      { 'icon__arrow-white--up': isOpenServices }
                    )} />
                  </div>
                </div>
              </button>

              {isOpenServices && (
                <ul className='header__subcategorys'>
                  <li className='header__subcategory-item'>
                    <Link to='/'>
                      <p className='header__subcategory-name'>
                        Нанесення декоративного покриття
                      </p>
                    </Link>
                  </li>

                  <li className='header__subcategory-item'>
                    <Link to='/'>
                      <p className='header__subcategory-name'>
                        Поклейка шпалер
                      </p>
                    </Link>
                  </li>

                  <li className='header__subcategory-item'>
                    <Link to='/'>
                      <p className='header__subcategory-name'>
                        Тонування фарб
                      </p>
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className='header__category-item'>
              <button className='header__category-btn' onClick={() => setIsOpenProducts(!isOpenProducts)}>
                <div className='header__category-title'>
                  <h4 className='header__category-name'>
                    Продукція
                  </h4>

                  <div className="header__icon-arrow">
                    <div className={classNames(
                      'icon',
                      'icon__arrow-white',
                      { 'icon__arrow-white--up': isOpenProducts }
                    )} />
                  </div>
                </div>
              </button>

              {isOpenProducts && (
                <ul className='header__subcategorys'>
                  <li className='header__subcategory-item'>
                    <Link to='/'>
                      <p className='header__subcategory-name'>
                        Шпалери
                      </p>
                    </Link>
                  </li>

                  <li className='header__subcategory-item'>
                    <Link to='/'>
                      <p className='header__subcategory-name'>
                        Фарба
                      </p>
                    </Link>
                  </li>
                </ul>
              )}

            </li>

            <li className='header__category-item'>
              <div className='header__category-title'>
                <Link to='/'>
                  <h4 className='header__category-name header__category-name--color-black'>
                    Про нас
                  </h4>
                </Link>
              </div>
            </li>

            <li className='header__category-item'>
              <div className='header__category-title'>
                <Link to='/'>
                  <h4 className='header__category-name header__category-name--color-black'>
                    Контакти
                  </h4>
                </Link>
              </div>
            </li>
          </ul>

          <ul className='header__main-nav'>
            <li className='header__main-nav-item'>
              <Link to='/favorite'>
                <div className='icon icon--hover icon__favorite' />
              </Link>
            </li>

            <li className='header__main-nav-item'>
              <Link to='/cart'>
                <div className='icon icon--hover icon__cart' />
              </Link>
            </li>

            <li className='header__main-nav-item header__menu'>
              <button
                className='header__menu-btn'
                onClick={() => toggleMenu(!isMenu)}
              >
                <div className={classNames(
                  'icon',
                  'icon--hover',
                  'icon__menu',
                  { 'icon__menu--close': isMenu },
                )} />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
