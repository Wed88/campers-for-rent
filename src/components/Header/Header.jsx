import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import css from './Header.module.css';

export const Header = () => {
  const setActive = ({ isActive }) => (isActive ? css.active : '');

  return (
    <div className={css.container}>
      <nav className={css.navpanel}>
        <NavLink className={setActive} to="/">
          Home
        </NavLink>
        <NavLink className={setActive} to="/catalog">
          Catalog
        </NavLink>
        <NavLink className={setActive} to="/favorites">
          Favorites
        </NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
