import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        to={'/'}
        className={({ isActive }) => (isActive ? s.Active : s.Link)}
      >
        Home
      </NavLink>
      <NavLink
        to={'/movies'}
        className={({ isActive }) => (isActive ? s.Active : s.Link)}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
