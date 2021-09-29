import { PropTypes } from 'prop-types';
import BookHeader from './BookHeader';
import BookStatus from './BookStatus';

const BookItem = (props) => {
  const { bookId, title, author } = props;

  return (
    <li className="book-item">
      <BookHeader
        bookId={bookId}
        title={title}
        author={author}
      />
      <p>{bookId}</p>
      <BookStatus />
    </li>
  );
};

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  bookId: PropTypes.string.isRequired,
};

export default BookItem;
