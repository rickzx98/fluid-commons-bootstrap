import * as ajaxActions from './AjaxStatusActions';
import * as types from './';

import { getApi as booksApi, Validate} from '../api/books';
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
    type: types.OPEN_DIALOG_CONFIRM_BOOK_CANCEL,
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

