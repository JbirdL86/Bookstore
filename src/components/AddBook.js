import React from 'react';

const AddBook = () => (
  <>
    <div className="add-book-container">
      <h3>ADD NEW BOOK</h3>
      <form>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Category" />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  </>
);

export default AddBook;
