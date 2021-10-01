import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeBook } from '../redux/books/books';
import '../pages/index.css';

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
  const { bookId, title, category } = props;
  const dispatch = useDispatch();
  const dispatchRemoveBook = bindActionCreators(removeBook, dispatch);

  const [Id, setId] = useState(bookId);

  const removeBookFromStore = (e) => {
    e.preventDefault();
    setId(e.target.id);
    dispatchRemoveBook(Id);
  };

  return (
    <>
      <div className="nav-bookheader">
        <div className="title">
          {title}
        </div>
        <div className="category">
          {category}
        </div>
        <div className="links-list">
          <ul className="book-menu">
            <li className="item-button">
              <button type="button">{links[0].text}</button>
            </li>
            <li className="item-button">
              <button id={bookId} type="button" onClick={removeBookFromStore}>{links[1].text}</button>
            </li>
            <li className="item-button">
              <button type="button">{links[2].text}</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

BookHeader.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  bookId: PropTypes.string.isRequired,
};

export default BookHeader;
