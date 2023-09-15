import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/header.css';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Hero</Link>
          </li>
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/cta">CTA</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
