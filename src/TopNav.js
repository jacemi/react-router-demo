import React from 'react';
import { NavLink } from 'react-router-dom';


const TopNav = props => (
  <nav>
    <NavLink exact to="/">Home</NavLink>
    <NavLink exact to="/planets">Planets</NavLink>
    <NavLink exact to="/jarjar">Binks</NavLink>
  </nav>
);

export default TopNav;