import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Chapter from './chapter';

const Book = (
  {
    itemId, category, title, author, onDelete,
  },
) => {
  const handleDelete = () => {
    onDelete(itemId);
  };

  const percentage = 76;

  const progressStyles = {
    root: { width: '130px', height: '130px' },
    path: {
      strokeLinecap: 'butt',
      transition: 'stroke-dashoffset 0.5s ease 0s',
      transformOrigin: 'center center',
      height: '130px',
    },
    trail: {
      strokeLinecap: 'butt',
      transformOrigin: 'center center',
      height: '130px',
    },
    text: {
      fill: '#419bf9',
      fontSize: '20px',
    },
  };

  return (
    <div className="book">
      <div className="action">
        <div className="book-details">
          <span className="book-category">{category}</span>
          <h2>{title}</h2>
          <p className="author-name">
            {author}
          </p>
        </div>
        <div className="book-actions">
          <button type="button">Comments</button>
          <button type="button" onClick={handleDelete}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="book-details">
        <div className="book-progress">
          <div className="bar">
            <CircularProgressbar
              value={percentage}
              styles={progressStyles} // Apply the custom styles
            />
            <div className="progress-text">
              <span>{`${percentage}%`}</span>
              <span>Completed</span>
            </div>
          </div>
          <Chapter />
        </div>
      </div>
    </div>
  );
};

// prop validations
Book.propTypes = {
  itemId: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
