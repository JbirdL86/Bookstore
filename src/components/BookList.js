import { useEffect, React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadBooks } from '../redux/books/books';
import BookItem from './BookItem';

const BookList = () => {
  const books = useSelector((state) => state.books);

  const dispatch = useDispatch();
  const loadAction = bindActionCreators(loadBooks, dispatch);

  useEffect(() => { loadAction(); return null; }, []);

  return (
    <>
      <ul className="book-list">
        {Object.keys(books).map((bookId) => (
          <BookItem
            key={bookId}
            bookId={bookId}
            title={books[bookId][0].title}
            category={books[bookId][0].category}
          />
        ))}
      </ul>
    </>
  );
};

export default BookList;
