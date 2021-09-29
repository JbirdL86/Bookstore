import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import UserInfo from './UserInfo';

const links = [
  {
    id: 1,
    path: '/',
    text: 'Books',
  },
  {
    id: 2,
    path: '/categories',
    text: 'Categories',
  },
];

const Navbar = () => (
  <nav className="navBar-container">
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
