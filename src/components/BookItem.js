import { PropTypes } from 'prop-types';
import BookHeader from './BookHeader';
import BookStatus from './BookStatus';

const BookItem = (props) => {
  const { bookId, title, category } = props;

  return (
    <li className="book-item">
      <BookHeader
        bookId={bookId}
        title={title}
        category={category}
      />
      <BookStatus />
    </li>
  );
};

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  bookId: PropTypes.string.isRequired,
};

export default BookItem;
