import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './css/Nav.css';

function Nav() {
  const location = useLocation();

  return (
    <nav>
      <h1>Bookstore CMS</h1>
      <ul>
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Books
          </Link>
        </li>
        <li>
          <Link
            to="/categories"
            className={location.pathname === '/categories' ? 'active' : ''}
          >
            Categories
          </Link>
        </li>
      </ul>
      <div className="icon-container">
        <FontAwesomeIcon icon={faUser} className="user-icon" />
      </div>
    </nav>
  );
}

export default Nav;
