import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

function Navigation() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {/* <li className="navbar-item">
          <Link to="/" className="navbar-link">HOME</Link>
        </li> */}
        <li className="navbar-item">
          <Link to="/display" className="navbar-link">PROPERTY LIST</Link>
        </li>
        {/* <li className="navbar-item">
          <Link to="/register" className="navbar-link">REGISTER</Link>
        </li> */}
        <li className="navbar-item">
          <Link to="/owner" className="navbar-link">PROPERTY OWNERS</Link>
        </li>

        
      </ul>
    </nav>
  );
}

export default Navigation;
