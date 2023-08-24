import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const posturl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/tu60zHjKDxWyClBTCaRt/books';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.get(posturl);
    // Map the response data to the desired format
    // eslint-disable-next-line max-len
    const mappedData = Object.entries(response.data).flatMap(([id, booksArray]) => booksArray.map((book) => ({
      item_id: id, // Use the book ID as the item_id
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
    return response.data;
  } catch (error) {
    return error;
  }
});

export const deleteBookAsync = createAsyncThunk('books/deleteBookAsync', async (id) => {
  try {
    const response = await axios.delete(`${posturl}/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => state.books.filter((book) => book.id !== action.payload),
  },
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
        // eslint-disable-next-line no-console
        console.log(action.payload);
        state.books.push(action.payload);
      });
  },
});

export const selectAllBooks = (state) => state.books.books;
export const getBooksError = (state) => state.books.error;
export const getBooksStatus = (state) => state.books.status;
export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
