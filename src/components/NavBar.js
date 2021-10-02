import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import UserInfo from './UserInfo';

const links = [
  {
    id: 1,
    path: '/',
    text: 'BOOKS',
  },
  {
    id: 2,
    path: '/categories',
    text: 'CATEGORIES',
  },
];

const Navbar = () => (
  <nav className="navbar-container">
    <div className="navbar-left">
      <Header />
      <ul className="menu">
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.path} className="item">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <div>
      <UserInfo />
    </div>
  </nav>
);

export default Navbar;
