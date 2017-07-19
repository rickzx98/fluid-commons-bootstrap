import * as ajaxActions from './AjaxStatusActions';
import * as types from './';

import { getApi as subjectsApi } from '../api/subjects/';

export function loadSubjectSuccess(subjects) {
    return {
        type: types.LOAD_SUBJECT_SUCCESS,
        subjects: subjects
    };
}
export function loadManagedSubjectSuccess(subject) {
    return {
        type: types.LOAD_MANAGED_SUBJECT_SUCCESS,
        subject: subject
    };
}
export function setManagedSubjectFieldValue(field, value) {
    return {
        type: types.SET_MANAGED_SUBJECT_FIELD_VALUE,
        field: field,
        value: value
    };
}
export function addSubjectToManagedBook(subject) {
    return {
        type: types.ADD_SUBJECT_TO_MANAGED_BOOK,
        subject: subject
    };
}

export function removeManagedBookSubject(index) {
    return {
        type: types.REMOVE_MANAGED_BOOK_SUBJECT,
        index: index
    };
}

export function searchSubjects(text) {
    return dispatch => {
        dispatch(ajaxActions.beginAjaxCall());
        return subjectsApi().searchSubjects(text).then(books => {
            dispatch(loadSubjectSuccess(books));
        }).catch(error => {
            dispatch(ajaxActions.ajaxCallError(error));
        });
    };
}
export function loadSubjects() {
    return dispatch => {
        dispatch(ajaxActions.beginAjaxCall());
        return subjectsApi().getAllSubjects().then(books => {
            dispatch(loadSubjectSuccess(books));
        }).catch(error => {
            dispatch(ajaxActions.ajaxCallError(error));
        });
    };
}