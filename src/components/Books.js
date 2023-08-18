import React, { useState } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';

export default function Books() {
  // Sample books
  const [books, setBooks] = useState([
    { id: 1, title: 'Sample Book 1', author: 'Author 1' },
    { id: 2, title: 'Sample Book 2', author: 'Author 2' },
    { id: 3, title: 'Sample Book 3', author: 'Author 3' },
  ]);

  const handleDelete = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };
  return (
    <>
      <BookForm />
      <BookList books={books} onDelete={handleDelete} />
    </>
  );
}
