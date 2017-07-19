import { ADD_SUBJECT_TO_MANAGED_BOOK, LOAD_MANAGED_SUBJECT_SUCCESS, SET_MANAGED_SUBJECT_FIELD_VALUE } from '../actions/';

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
            state.active = true;
            return state;
        }
        case SET_MANAGED_SUBJECT_FIELD_VALUE:
            state = Object.assign({}, { ...state });
            state[action.field] = action.value;
            state[Subject.SUBJECT_FORMAT] = subjectFormatter(state);
            return state;
        case ADD_SUBJECT_TO_MANAGED_BOOK:
            return initialState.subject;
        default:
            return state;
    }
}
