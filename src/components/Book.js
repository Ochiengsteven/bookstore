import React from 'react';
import PropTypes from 'prop-types';

const Book = (
  {
    id, title, author, onDelete,
  },
) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="book">
      <h2>{title}</h2>
      <p>
        By
        {author}
      </p>
      <button type="button" onClick={handleDelete}>Delete</button>
    </div>
  );
};

// prop validations
Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
