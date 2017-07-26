import { LOAD_SUBJECT_SUCCESS } from '../actions/';
import initialState from './initialState';

//import objectAssign from 'object-assign';

export default function subjectsReducer(state = initialState.subjects, action) {
    switch (action.type) {
        case LOAD_SUBJECT_SUCCESS: {
            return [...action.subjects];
        }
        default:
            return state;
    }
}
