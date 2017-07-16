import * as ajaxActions from './AjaxStatusActions';
import * as types from './';

import api from '../api/books';

export function loadBooksSuccess(books) {
    return {
        type: types.LOAD_BOOKS_SUCCESS,
        books: books
    };
}
export function loadBooks() {
    return dispatch => {
        dispatch(ajaxActions.beginAjaxCall());
        return api.getAllBooks().then(books => {
            dispatch(loadBooksSuccess(books));
        }).catch(error => {
            dispatch(ajaxActions.ajaxCallError(error));
        });
    };
}