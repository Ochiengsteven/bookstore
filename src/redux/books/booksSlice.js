import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const posturl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/tu60zHjKDxWyClBTCaRt/books';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(posturl);
    const mappedData = Object.entries(response.data).flatMap(([id, booksArray]) => booksArray.map((book) => ({
      item_id: id,
      title: book.title,
      author: book.author,
      category: book.category,
    })));
    return mappedData;
  } catch (error) {
    throw error;
  }
});

export const addBookAsync = createAsyncThunk('books/addBookAsync', async (book) => {
  try {
    const response = await axios.post(posturl, book);
    return response.data; // The response should contain the added book details
  } catch (error) {
    throw error;
  }
});

export const deleteBookAsync = createAsyncThunk('books/deleteBookAsync', async (id) => {
  try {
    await axios.delete(`${posturl}/${id}`);
    return id; // Return the deleted book's id
  } catch (error) {
    throw error;
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addBookAsync.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(deleteBookAsync.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.item_id !== action.payload);
      });
  },
});

export const selectAllBooks = (state) => state.books.books;
export const getBooksError = (state) => state.books.error;
export const getBooksStatus = (state) => state.books.status;

export default booksSlice.reducer;
