import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink exact to={'/'} className="nav-link" activeClassName="active">
        Home
      </NavLink>
      <NavLink to={'/movies'} className="nav-link" activeClassName="active">
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
