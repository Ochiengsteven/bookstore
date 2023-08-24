import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './css/bookform.css';
import { addBookAsync } from '../redux/books/booksSlice';

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [authorError, setAuthorError] = useState(false);
  const [status, setStatus] = useState('idle');

  const dispatch = useDispatch();

  const canSave = [title, author].every(Boolean) && status === 'idle';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title) {
      setTitleError(false);
    } else {
      setTitleError(true);
    }
    if (author) {
      setAuthorError(false);
    } else {
      setAuthorError(true);
    }
    if (canSave) {
      setStatus('pending');
      try {
        await dispatch(addBookAsync({
          title,
          author,
          category: 'fiction', // Set category to 'fiction'
          item_id: new Date().getTime().toString(), // Generate a unique item_id
        }));
        setStatus('idle');
        setTitle('');
        setAuthor('');
      } catch (err) {
        setStatus('idle');
      }
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
        <button type="submit" disabled={!canSave}>
          {status === 'pending' ? 'Adding...' : 'Add Book'}
        </button>
      </form>
    </div>
  );
}

export default BookForm;
