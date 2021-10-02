import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { bindActionCreators } from 'redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const dispatchAddBook = bindActionCreators(addBook, dispatch);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const submitBookToStore = (e) => {
    e.preventDefault();

    const newBook = {
      item_id: uuidv4(),
      title,
      category,
    };

    dispatchAddBook(newBook);
    setTitle('');
    setCategory('');
  };

  return (
    <>
      <div className="add-book-container">
        <h3>ADD NEW BOOK</h3>
        <form>
          <input className="title-input" type="text" placeholder="Title" value={title} onChange={titleHandler} />
          <input className="category-input" type="text" placeholder="Category" onChange={categoryHandler} value={category} />
          <button className="submit-input" type="submit" onClick={submitBookToStore}>ADD BOOK</button>
        </form>
      </div>
    </>
  );
};

export default AddBook;
