import React from 'react';
import { FiCircle } from 'react-icons/fi';

const BookStatus = () => {
  const completitionPercentage = '90%';
  const currentChapter = '10';

  return (
    <>
      <div className="nav-logo-status">
        <div className="completition">
          <div className="completition-circle">
            <FiCircle />
          </div>
          <div className="completiotion-number">
            {completitionPercentage}
          </div>
        </div>
        <div className="current-chapter">
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
