import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';
import './App.scss';

export const App = () => {
  const [isMenu, setIsMenuActive] = useState(false);

  return (
    <div className="App">
      <Header isMenu={isMenu} toggleMenu={setIsMenuActive} />
      {isMenu && <Menu />}
      <Outlet />
      <Footer />
    </div>
  );
};
