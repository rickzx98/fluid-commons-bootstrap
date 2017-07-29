import * as ajaxActions from './AjaxStatusActions';
import * as types from './';

import { getApi as booksApi } from '../api/books';

export function loadBooksSuccess(books) {
    return {
        type: types.LOAD_BOOKS_SUCCESS,
        books: books
    };
}
export function loadManagedBookSuccess(book) {
    return {
        type: types.LOAD_MANAGED_BOOK_SUCCESS,
        book: book
    };
}
export function setManagedBookFieldValue(field, value) {
    return {
        type: types.SET_MANAGED_BOOK_FIELD_VALUE,
        field, value
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