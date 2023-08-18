import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = ({ books, onDelete }) => (
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

// prop validations
BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
