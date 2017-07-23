import { LOAD_SUBJECT_SUCCESS } from '../actions/';
import initialState from './initialState';

//import objectAssign from 'object-assign';

export default function subjectsReducer(state = initialState.settings, action) {
    switch (action.type) {
        default:
            return state;
    }
}
