import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './css/bookform.css';

function BookForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [authorError, setAuthorError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!title) {
      setTitleError(true);
    } else {
      setTitleError(false);
    }

    if (!author) {
      setAuthorError(true);
    } else {
      setAuthorError(false);
    }

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
        {titleError && <div className="error">Please input the title</div>}
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {authorError && <div className="error">Please input the author</div>}
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

BookForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default BookForm;
