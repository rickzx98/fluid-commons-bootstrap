import { ADD_SUBJECT_TO_MANAGED_BOOK, LOAD_MANAGED_BOOK_SUCCESS, SET_TAB_EVENT_KEY } from '../actions/';

import initialState from './initialState';

//import objectAssign from 'object-assign';

export default function managedBookReducer(state = initialState.book, action) {
    switch (action.type) {
        case LOAD_MANAGED_BOOK_SUCCESS:
            if (!action.book) {
                return Object.assign({}, initialState.book);
            } else {
                return Object.assign({}, { ...state, ...action.book });
            }
        case ADD_SUBJECT_TO_MANAGED_BOOK:
            const subjects = [...action.subjects, action.subject];
            return Object.assign({}, { ...state, subjects });
        case SET_TAB_EVENT_KEY: return Object.assign({}, { ...state, tabEventKey: action.eventKey });
        default:
            return state;
    }
}
