import { ADD_SUBJECT_TO_MANAGED_BOOK, LOAD_MANAGED_BOOK_SUCCESS, REMOVE_MANAGED_BOOK_SUBJECT, SET_TAB_EVENT_KEY, UPDATE_MANAGED_SUBJECT } from '../actions/';

import initialState from './initialState';

export default function SettingsReducer(state = initialState.book, action) {
    switch (action.type) {
        default:
            return state;
    }
}
