import React from 'react';
import PropTypes from 'prop-types';

const Book = (
  {
    itemId, title, author, onDelete,
  },
) => {
  const handleDelete = () => {
    onDelete(itemId);
  };

  return (
    <div className="book">
      <h2>{title}</h2>
      <div className="book-details">
        By:
        <p>
          {author}
        </p>
      </div>
      <button type="button" onClick={handleDelete}>Delete</button>
    </div>
  );
};

// prop validations
Book.propTypes = {
  itemId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
