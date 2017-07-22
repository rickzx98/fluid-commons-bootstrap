import { ADD_SUBJECT_TO_MANAGED_BOOK, LOAD_MANAGED_BOOK_SUCCESS, REMOVE_MANAGED_BOOK_SUBJECT, SET_TAB_EVENT_KEY, UPDATE_MANAGED_SUBJECT } from '../actions/';

import initialState from './initialState';

export default function managedBookReducer(state = initialState.book, action) {
    switch (action.type) {
        case REMOVE_MANAGED_BOOK_SUBJECT: {
            const subjects = [...state.subjects];
            subjects.splice(action.index, 1);
            return Object.assign({}, { ...state, subjects });
        }
        case LOAD_MANAGED_BOOK_SUCCESS: {
            if (!action.book) {
                state = Object.assign({}, initialState.book);
            } else {
                state = Object.assign({}, { ...state, ...action.book });
            }
            state.active = true;
            return state;
        }
        case ADD_SUBJECT_TO_MANAGED_BOOK: {
            const subjects = [...state.subjects, action.subject];
            return Object.assign({}, { ...state, subjects });
        }
        case UPDATE_MANAGED_SUBJECT: {
            const subjects = [...state.subjects];
            subjects[action.index] = action.subject;
            return Object.assign({}, { ...state, subjects });
        }
        case SET_TAB_EVENT_KEY: { return Object.assign({}, { ...state, tabEventKey: action.eventKey }); }
        default:
            return state;
    }
}
