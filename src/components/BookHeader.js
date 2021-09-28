import React from 'react';
import PropTypes from 'prop-types';

const links = [
  {
    id: 1,
    text: 'Comments',
  },
  {
    id: 2,
    text: 'Remove',
  },
  {
    id: 3,
    text: 'Edit',
  },
];

const BookHeader = (props) => {
  const { category, title, author } = props;

  return (
    <>
      <div className="nav-bookheader">
        <div className="category">
          {category}
        </div>
        <div className="title">
          {title}
        </div>
        <div className="author">
          {author}
        </div>
        <div className="links-list">
          <ul className="book-menu">
            {links.map((link) => (
              <li key={link.id}>
                {link.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

BookHeader.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookHeader;
