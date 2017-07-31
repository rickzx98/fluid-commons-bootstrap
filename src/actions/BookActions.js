import * as ajaxActions from './AjaxStatusActions';
import * as types from './';

import { Book, Validate, getApi as booksApi } from '../api/books';

import { getApi as fileApi } from '../api/file/';

export function loadBooksSuccess(books) {
  return {
    type: types.LOAD_BOOKS_SUCCESS,
    books
  };
}

export function loadManagedBookSuccess(book) {
  return {
    type: types.LOAD_MANAGED_BOOK_SUCCESS,
    book
  };
}

export function setManagedBookFieldValue(field, value) {
  return {
    type: types.SET_MANAGED_BOOK_FIELD_VALUE,
    field, value
  };
}

export function cancelManagedBook() {
  return {
    type: types.CANCEL_MANAGED_BOOK
  };
}

export function addManagedBook(book) {
  return {
    type: types.ADD_MANAGED_BOOK,
    book
  };
}

export function updatedBook(bookId, book) {
  return {
    type: types.UPDATE_MANAGED_BOOK,
    bookId,
    book
  };
}

export function setTabEventKey(eventKey) {
  return {
    type: types.SET_TAB_EVENT_KEY,
    eventKey: eventKey
  };
}

export function searchBooks(text) {
  return dispatch => {
    dispatch(ajaxActions.beginAjaxCall());
    return booksApi().searchBooks(text).then(books => {
      dispatch(loadBooksSuccess(books));
      dispatch(ajaxActions.ajaxCallSuccess());
    }).catch(error => {
      dispatch(ajaxActions.ajaxCallError(error));
    });
  };
}

export function loadBooks() {
  return dispatch => {
    dispatch(ajaxActions.beginAjaxCall());
    return booksApi().getAllBooks().then(books => {
      dispatch(loadBooksSuccess(books));
      dispatch(ajaxActions.ajaxCallSuccess());
    }).catch(error => {
      dispatch(ajaxActions.ajaxCallError(error));
    });
  };
}

export function createManagedBook(managedBook) {
  const invalid = Validate(managedBook);
  return dispatch => {
    if (invalid) {
      dispatch(invalidManagedBook(invalid));
    } else {
      dispatch(ajaxActions.beginAjaxCall());
      return booksApi()
        .createBook(managedBook)
        .then(book => {
          dispatch(addManagedBook(book));
          dispatch(loadManagedBookSuccess(Object.assign({}, {
            ...book, update: true, touched: false,
            tabEventKey: 'bookInfo', active: true
          })));
          dispatch(ajaxActions.ajaxCallSuccess());
        })
        .catch(error => {
          dispatch(ajaxActions.ajaxCallError(error));
        });
    }
  };
}

export function updateManagedBook(bookId, managedBook) {
  const invalid = Validate(managedBook);
  return dispatch => {
    if (invalid) {
      dispatch(invalidManagedBook(invalid));
    } else {
      dispatch(ajaxActions.beginAjaxCall());
      return booksApi()
        .updateBook(bookId, managedBook)
        .then(book => {
          dispatch(updatedBook(bookId, book));
          dispatch(ajaxActions.ajaxCallSuccess());
        })
        .catch(error => {
          dispatch(ajaxActions.ajaxCallError(error));
        });
    }
  };
}

export function openDialogConfirmBookCancel(dialog) {
  dialog.show = true;
  return {
    type: types.OPEN_DIALOG,
    dialog
  };
}

export function openDialogConfirmDelete(dialog) {
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

export function invalidManagedBook(invalid) {
  return {
    type: types.INVALID_MANAGED_BOOK,
    invalidMessage: invalid.message,
    invalidField: invalid.field
  };
}

export function deleteBook(bookId) {
  return dispatch => {
    dispatch(ajaxActions.beginAjaxCall());
    return booksApi().deleteBook(bookId).then(() => {
      dispatch(loadBooks());
      dispatch(ajaxActions.ajaxCallSuccess());
    }).catch(error => {
      dispatch(ajaxActions.ajaxCallError(error));
    });
  };
}

export function uploadBookCover(file) {
  return dispatch => {
    dispatch(ajaxActions.beginAjaxCall());
    return fileApi().uploadFile(file)
      .then(uploadedFile => {
        dispatch(ajaxActions.ajaxCallSuccess());
        dispatch(setManagedBookFieldValue(Book.IMAGE_ID, uploadedFile._id));
      })
      .catch(error => {
        dispatch(ajaxActions.ajaxCallError(error));
      });
  };
}