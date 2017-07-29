import { CLOSE_DIALOG, OPEN_DIALOG_CONFIRM_BOOK_CANCEL, OPEN_DIALOG_CONFIRM_SUBJECT_CANCEL } from '../actions/';

import initialState from './initialState';

export default function appModalReducer(state = initialState.dialog, action) {
    switch (action.type) {
        case OPEN_DIALOG_CONFIRM_SUBJECT_CANCEL:
        case OPEN_DIALOG_CONFIRM_BOOK_CANCEL:
            return action.dialog;
        case CLOSE_DIALOG:
            return initialState.dialog;
        default:
            return state;
    }
}
