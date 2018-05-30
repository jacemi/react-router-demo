import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = props => {
  return(
    <section className="page-sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Planets">Planets</Link></li>
        <li><Link to="/jarjar">Binks</Link></li>
      </ul>
    </section>
  );
}

export default Sidebar