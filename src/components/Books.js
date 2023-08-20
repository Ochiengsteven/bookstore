// src/components/Books.js
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch } from 'react-redux'; // Import useDispatch from react-redux
import BookList from './BookList';
import BookForm from './BookForm';
import { addBook, removeBook } from '../redux/books/booksSlice'; // Import the addBook and removeBook actions

const Books = () => {
  const dispatch = useDispatch(); // Get the dispatch function from Redux

  const handleAddBook = (newBook) => {
    dispatch(addBook(newBook)); // Dispatch the addBook action with the new book data
  };

  const handleDeleteBook = (id) => {
    dispatch(removeBook(id)); // Dispatch the removeBook action with the book's id
  };

  return (
    <div>
      <h2>Books</h2>
      <BookForm onAdd={handleAddBook} />
      <BookList onDelete={handleDeleteBook} />
    </div>
  );
};

export default Books;
