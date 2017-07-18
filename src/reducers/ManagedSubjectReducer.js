import { SAVE_SUBJECT_SUCCESS, SET_MANAGED_SUBJECT_FIELD_VALUE } from '../actions/';

import Subject from '../api/subjects/Subject';
import initialState from './initialState';
import { subjectFormatter } from '../utils/';

//import objectAssign from 'object-assign';

export default function managedSubjectReducer(state = initialState.subject, action) {
    switch (action.type) {
        case SAVE_SUBJECT_SUCCESS:
            return Object.assign({}, initialState.subject);
        case SET_MANAGED_SUBJECT_FIELD_VALUE:
            state = Object.assign({}, { ...state });
            state[action.field] = action.value;
            state[Subject.SUBJECT_FORMAT] = subjectFormatter(state);
            return state;
        default:
            return state;
    }
}
