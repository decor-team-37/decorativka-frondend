import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './PageNavigation.scss';

type PageLink = {
  [key: string]: string;
};

const pageLink: PageLink = {
  cooperation: 'Співпраця',
  home: 'Головна',
  product: 'Продукти',
};

export const PageNavigation: React.FC = () => {
  const { pathname } = useLocation();
  const data = pathname.split('/').slice(1);

  return (
    <div className="page-navigation">
      <Link to="/" className="page-navigation__link ">
        <div className="icon icon__arrow-navigation" />
        Головна
      </Link>

      {data.slice(0, -1).map(el => (
        <React.Fragment key={el}>
          <div className="icon icon__elipse" />
          <Link to=".." className="page-navigation__link">
            {pageLink[el]}
          </Link>
        </React.Fragment>
      ))}

      <div className="icon icon__elipse" />
      <p className="page-navigation__text">
        {pageLink[data[data.length - 1]] || data[data.length - 1]}
      </p>
    </div>
  );
};
