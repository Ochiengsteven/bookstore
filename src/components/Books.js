// src/components/Books.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookList from './BookList';
import BookForm from './BookForm';
import { addBookAsync, deleteBookAsync } from '../redux/books/booksSlice';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books); // Get the books from the state

  const handleAddBook = async (newBook) => {
    try {
      await dispatch(addBookAsync(newBook));
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await dispatch(deleteBookAsync(id)); // Dispatch the deleteBookAsync action with the book's id
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div>
      <h2>Books</h2>
      <BookForm onAdd={handleAddBook} />
      <BookList books={books} onDelete={handleDeleteBook} />
    </div>
  );
};

export default Books;
