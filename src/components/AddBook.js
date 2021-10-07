import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { bindActionCreators } from 'redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const dispatchAddBook = bindActionCreators(addBook, dispatch);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const authorHandler = (e) => {
    setAuthor(e.target.value);
  };

  const submitBookToStore = (e) => {
    e.preventDefault();

    const newBook = {
      bookId: uuidv4(),
      title,
      author,
    };

    dispatchAddBook(newBook);
    setTitle('');
    setAuthor('');
  };

  return (
    <>
      <div className="add-book-container">
        <h3>ADD NEW BOOK</h3>
        <form>
          <input type="text" placeholder="Title" value={title} onChange={titleHandler} />
          <input type="text" placeholder="Author" onChange={authorHandler} value={author} />
          <button type="submit" onClick={submitBookToStore}>ADD BOOK</button>
        </form>
      </div>
    </>
  );
};

export default AddBook;
