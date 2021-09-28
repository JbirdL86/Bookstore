import React from 'react';
import BookItem from './BookItem';

const books = [
  {
    id: 1,
    title: 'Whenever you can',
    author: 'Michael Douglas',
    category: 'Hollywood movies',
  },
  {
    id: 2,
    title: 'Whenever you can',
    author: 'Michael Jackson',
    category: 'Thriller',
  },
  {
    id: 3,
    title: 'Whenever you can',
    author: 'Michael Chain',
    category: 'Fiction',
  },
];

const BookList = () => (
  <ul>
    {books.map((book) => (
      <BookItem
        key={book.id}
        id={book.id}
        category={book.category}
        title={book.title}
        author={book.author}
      />
    ))}
  </ul>
);

export default BookList;
