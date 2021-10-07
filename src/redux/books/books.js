import { v4 as uuidv4 } from 'uuid';

const LOAD = 'bookstore/books/LOAD';
const CREATE = 'bookstore/books/CREATE';
const UPDATE = 'bookstore/books/UPDATE';
const REMOVE = 'bookstore/books/REMOVE';

export default function reducer(state = [], action) {
  let newBook;

  switch (action.type) {
    case (LOAD):
      return state;
    case (CREATE):
      newBook = {
        ...action.book,
        id: uuidv4(),
      };
      return (
        [
          ...state,
          newBook,
        ]
      );
    case (UPDATE):
      return state.map((book) => {
        if (book.id === action.book.id) {
          return action.book;
        }
        return book;
      });
    case (REMOVE):
      return state.filter((book) => book.bookId !== action.bookId);
    default: return state;
  }
}

export const loadBooks = () => ({
  type: LOAD,
});

export const addBook = (book) => ({
  type: CREATE,
  book,
});

export const updateBook = (book) => ({
  type: UPDATE,
  book,
});

export const removeBook = (bookId) => ({
  type: REMOVE,
  bookId,
});
