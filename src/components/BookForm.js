import React, { useState } from 'react';
import PropTypes from 'prop-types';

function BookForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const newBook = { title, author, id: new Date().getTime().toString() };
      onAdd(newBook);
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div className="book-form">
      <h3>Add New Book</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

// Add prop validations
BookForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default BookForm;
