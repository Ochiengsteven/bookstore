import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector from react-redux
import Book from './Book';
import {
  selectAllBooks, getBooksStatus, getBooksError, fetchBooks,
} from '../redux/books/booksSlice';

// eslint-disable-next-line no-unused-vars
const BookList = ({ onDelete }) => {
  const dispatch = useDispatch(); // Get the dispatch function from Redux
  const books = useSelector(selectAllBooks); // Get the books array from Redux state
  const error = useSelector(getBooksError); // Get the error from Redux state
  const booksStatus = useSelector(getBooksStatus); // Get the status from Redux state

  useEffect(() => {
    if (booksStatus === 'idle') {
      dispatch(fetchBooks()); // Dispatch the fetchBooks action
    }
  }, [booksStatus, dispatch]);

  let content;
  if (booksStatus === 'loading') {
    content = <div className="loader">Loading...</div>;
  } else if (booksStatus === 'succeeded') {
    content = books.map((book) => (
      <Book
        key={book.item_id}
        itemId={book.item_id}
        title={book.title}
        author={book.author}
        onDelete={onDelete}
      />
    ));
  } else if (booksStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <div className="book-list">
      <h2>Books</h2>
      {content}
    </div>
  );
};

BookList.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
