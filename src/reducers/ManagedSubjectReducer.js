import {
  ADD_SUBJECT_TO_MANAGED_BOOK,
  CANCEL_MANAGED_SUBJECT,
  LOAD_MANAGED_SUBJECT_SUCCESS,
  SET_MANAGED_SUBJECT_FIELD_VALUE,
  SET_MANAGED_SUBJECT_STATE,
  UPDATE_MANAGED_SUBJECT
} from '../actions/';

import { Subject } from '../api/subjects/Subject';
import { convertSubjectToMarc } from '../utils';
import initialState from './initialState';

//import objectAssign from 'object-assign';

export default function managedSubjectReducer(state = initialState.subject, action) {
  switch (action.type) {
    case LOAD_MANAGED_SUBJECT_SUCCESS: {
      if (!action.subject) {
        state = Object.assign({}, initialState.subject);
      } else {
        const data = Object.assign({}, { ...state.data, ...action.subject });
        state = Object.assign({}, { ...state, data });
      }
      state[Subject.SUBJECT_FORMAT] = convertSubjectToMarc(state.data, state.resourceType, state.subjectCode);
      state.active = true;
      return state;
    }
    case SET_MANAGED_SUBJECT_FIELD_VALUE: {
      const newState = { ...state, touched: true, active: true };
      if (action.field === Subject.TYPE_OF_HEADINGS) {
        const data = Object.assign({}, { ...state.data });
        data[Subject.FIRST_INDICATOR] = '';
        newState[action.field] = action.value;
        state = Object.assign({}, { ...newState, data });
      } else if (Object.values(Subject).indexOf(action.field) > -1) {
        const data = Object.assign({}, { ...state.data });
        data[action.field] = action.value;
        newState[Subject.SUBJECT_FORMAT] = convertSubjectToMarc(state.data, state.resourceType, state.subjectCode);
        state = Object.assign({}, { ...newState, data });
      }
      return state;
    }
    case ADD_SUBJECT_TO_MANAGED_BOOK:
    case UPDATE_MANAGED_SUBJECT:
    case CANCEL_MANAGED_SUBJECT:
      return initialState.subject;
    case SET_MANAGED_SUBJECT_STATE:
      return Object.assign({}, { ...state, ...action.state });
    default:
      return state;
  }
}
