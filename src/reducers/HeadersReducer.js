import { HEADER_SET_CONTROLS } from '../actions/';

import initialState from './initialState';
export default function booksReducer(state = initialState.headers, action) {
  switch (action.type) {
    case HEADER_SET_CONTROLS: {
       return action.headerControls;
    }
    default:
      return state;
  }
}
