import BookHeader from './BookHeader';
import BookStatus from './BookStatus';

const BookItem = () => (
  <li className="book-item">
    <BookHeader />
    <BookStatus />
  </li>
);

export default BookItem;
