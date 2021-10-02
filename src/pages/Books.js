import React from 'react';
import BookList from '../components/BookList';
import AddBook from '../components/AddBook';

const Books = () => (
  <>
    <div className="container">
      <div className="inner-container">
        <BookList />
      </div>
      <div className="main-sep" />
      <AddBook />
    </div>
  </>
);

export default Books;
