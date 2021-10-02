import React from 'react';
import { FiCircle } from 'react-icons/fi';

const BookStatus = () => {
  const completitionPercentage = '90%';
  const currentChapter = 'Chapter 10';

  return (
    <>
      <div className="nav-logo-status">
        <div className="completition">
          <div className="completition-circle">
            <FiCircle />
          </div>
          <div className="completition-number">
            <h3>{completitionPercentage}</h3>
            <p>Completed</p>
          </div>
        </div>
        <div className="completition-sep" />
        <div className="current-chapter">
          <p>CURRENT CHAPTER</p>
          <div className="chapter">
            {currentChapter}
          </div>
          <button type="button" className="update-progress">UPDATE PROGRESS</button>
        </div>
      </div>
    </>
  );
};

export default BookStatus;
