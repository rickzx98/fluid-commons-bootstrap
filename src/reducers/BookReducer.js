import { ADD_MANAGED_BOOK, LOAD_BOOKS_SUCCESS, UPDATE_MANAGED_BOOK } from '../actions/';

import {Book} from '../api/books/';
import initialState from './initialState';

//import objectAssign from 'object-assign';

export default function booksReducer(state = initialState.books, action) {
  switch (action.type) {
    case UPDATE_MANAGED_BOOK:
    {
      const newState = [...state];
      state.forEach((book, index)=> {
        if (book[Book.BOOK_ID] === action.bookId) {
          newState[index] = action.book;
        }
      });
      return newState;
    }
    case ADD_MANAGED_BOOK:
    {
      return [...state, action.book];
    }
    case LOAD_BOOKS_SUCCESS:
      return action.books;
    default:
      return state;
  }
}
