import { ADD_SUBJECT_TO_MANAGED_BOOK, CANCEL_MANAGED_SUBJECT, LOAD_MANAGED_SUBJECT_SUCCESS, SET_MANAGED_SUBJECT_FIELD_VALUE, UPDATE_MANAGED_SUBJECT } from '../actions/';

import Subject from '../api/subjects/Subject';
import initialState from './initialState';
import { subjectFormatter } from '../utils';

//import objectAssign from 'object-assign';

export default function managedSubjectReducer(state = initialState.subject, action) {
    switch (action.type) {
        case LOAD_MANAGED_SUBJECT_SUCCESS: {
            if (!action.subject) {
                state = Object.assign({}, initialState.subject);
            } else {
                state = Object.assign({}, { ...state, ...action.subject });
            }
            state[Subject.SUBJECT_FORMAT] = subjectFormatter(state);
            state.active = true;
            return state;
        }
        case SET_MANAGED_SUBJECT_FIELD_VALUE:
            if (Object.values(Subject).indexOf(action.field) > -1) {
                state = Object.assign({}, { ...state, touched: true, active: true });
                state[action.field] = action.value;
                state[Subject.SUBJECT_FORMAT] = subjectFormatter(state);
            }
            return state;
        case ADD_SUBJECT_TO_MANAGED_BOOK:
        case UPDATE_MANAGED_SUBJECT:
        case CANCEL_MANAGED_SUBJECT:
            return initialState.subject;
        default:
            return state;
    }
}
