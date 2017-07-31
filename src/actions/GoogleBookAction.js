import * as ajaxActions from './AjaxStatusActions';
import * as types from './';
import {getApi as googleBooksApi} from '../api/google-books/';

export function setGoogleFilterValue(field, value) {
  return {
    type: types.SET_GOOGLE_FILTER_VALUE,
    field,
    value
  };
}

export function setGoogleFilterResult(result) {
  return {
    type: types.SET_GOOGLE_FILTER_RESULT,
    result
  };
}

export function createNewBookFromGoogle(bookId, book) {
  return {
    type: types.CREATE_NEW_BOOK_FROM_GOOGLE,
    bookId,
    book
  };
}

export function searchBooks(query) {
  return dispatch => {
    dispatch(ajaxActions.beginAjaxCall());
    return googleBooksApi().searchBooks(query)
      .then(result => {
        dispatch(setGoogleFilterResult(result));
        dispatch(ajaxActions.ajaxCallSuccess());
      })
      .catch(error => {
        dispatch(ajaxActions.ajaxCallError(error));
      });
  };
}
