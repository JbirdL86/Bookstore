import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <>
      <ul>
        {books.map((book) => (
          <BookItem
            key={book.id}
            bookId={book.bookId}
            title={book.title}
            author={book.author}
          />
        ))}
      </ul>
    </>
  );
};

export default BookList;
