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

    // Trim and validate inputs
    const trimmedTitle = title.trim();
    const trimmedAuthor = author.trim();

    if (!trimmedTitle) {
      setTitleError(true);
    } else {
      setTitleError(false);
    }

    if (!trimmedAuthor) {
      setAuthorError(true);
    } else {
      setAuthorError(false);
    }

    if (trimmedTitle && trimmedAuthor) {
      const newBook = {
        title: trimmedTitle,
        author: trimmedAuthor,
        id: new Date().getTime().toString(),
      };
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
          className={titleError ? 'input-error' : ''}
        />
        {titleError && <div className="error">Please input the title</div>}
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className={authorError ? 'input-error' : ''}
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
