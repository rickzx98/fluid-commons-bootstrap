import * as ajaxActions from './AjaxStatusActions';
import * as types from './';

import api from '../api/books';

export function loadSubjectSuccess(subjects) {
    return {
        type: types.LOAD_BOOKS_SUCCESS,
        subjects: subjects
    };
}
export function searchSubjects(text) {
    return dispatch => {
        dispatch(ajaxActions.beginAjaxCall());
        return api.searchSubjects(text).then(books => {
            dispatch(loadSubjectSuccess(books));
        }).catch(error => {
            dispatch(ajaxActions.ajaxCallError(error));
        });
    };
}
export function loadSubjects() {
    return dispatch => {
        dispatch(ajaxActions.beginAjaxCall());
        return api.getAllSubjects().then(books => {
            dispatch(loadSubjectSuccess(books));
        }).catch(error => {
            dispatch(ajaxActions.ajaxCallError(error));
        });
    };
}