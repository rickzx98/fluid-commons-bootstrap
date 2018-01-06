import initialState from './initialState';

import {LOAD_LIBRARIES_SUCCESS} from '../actions/';
export default function libraryReducer(state = initialState.library, action) {
  switch (action.type) {
    case LOAD_LIBRARIES_SUCCESS :
    {
      return action.payload;
    }
    default:
      return state;
  }
}
