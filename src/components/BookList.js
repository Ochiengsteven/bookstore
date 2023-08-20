// src/components/BookList.js
import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector } from 'react-redux'; // Import useSelector from react-redux
import Book from './Book';

const BookList = ({ onDelete }) => {
  const books = useSelector((state) => state.books); // Get the books array from Redux state

  return (
    <div className="book-list">
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

BookList.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
