import * as ajaxActions from './AjaxStatusActions';
import * as types from './';

import { getApi as booksApi } from '../api/books/';
import { getApi as googleBooksApi } from '../api/google-books/';

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
export function createBook(book, bookId) {
  return {
    type: types.CREATE_NEW_BOOK_FROM_GOOGLE,
    bookId,
    book
  };
}
export function createNewBookFromGoogle(bookId, selfLink) {
  return dispatch => {
    dispatch(ajaxActions.beginAjaxCall());
    return new Promise((resolve, reject) => {
      googleBooksApi().getBookInfo(selfLink)
        .then(result => {
          if (result.volumeInfo.industryIdentifiers) {
            booksApi().checkIfIdentifierExists(result.volumeInfo.industryIdentifiers[0])
              .then(exists => {
                if (exists.result) {
                  dispatch(ajaxActions.ajaxCallError(exists));
                  reject({
                    message: exists.message
                  });
                } else {
                  dispatch(createBook(result.volumeInfo, bookId));
                  dispatch(ajaxActions.ajaxCallSuccess());
                  resolve();
                }
              });
          } else {
            dispatch(createBook(result.volumeInfo, bookId));
            dispatch(ajaxActions.ajaxCallSuccess());
            resolve();
          }
        })
        .catch(error => {
          dispatch(ajaxActions.ajaxCallError(error));
          reject(error);
        });
    });
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

export function previewBook(dialog) {
  dialog.show = true;
  return {
    type: types.OPEN_DIALOG,
    dialog
  };
}

export function closeDialog() {
  return {
    type: types.CLOSE_DIALOG
  };
}
