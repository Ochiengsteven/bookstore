import React from 'react';
import PropTypes from 'prop-types';

const Book = (
  {
    itemId, category, title, author, onDelete,
  },
) => {
  const handleDelete = () => {
    onDelete(itemId);
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
