import { NavLink } from "react-router-dom";

import "./header.scss";

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header__logo">Header</h1>

      <nav className="header__nav">
        <NavLink to="/">
          Home
        </NavLink>

        <NavLink to="/cart">
          Cart
        </NavLink>

        <NavLink to="/product">
          Product
        </NavLink>
      </nav>
    </header>
  );
};
