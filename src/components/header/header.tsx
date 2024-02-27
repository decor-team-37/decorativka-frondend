import { Link } from 'react-router-dom';

import './header.scss';

export const Header = () => {
  return (
    <header className='header'>
      <h1 className='header__logo'>Header</h1>

      <nav className='header__nav'>
        <Link to='/'>
          Home
        </Link>

        <Link to='/cart'>
          Cart
        </Link>

        <Link to='/product'>
          Product
        </Link>
      </nav>
    </header>
  );
};
