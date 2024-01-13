import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

function Navigation() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/display" className="navbar-link">Display Properties</Link>
        </li>
        <li className="navbar-item">
          <Link to="/register" className="navbar-link">Register Property</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
