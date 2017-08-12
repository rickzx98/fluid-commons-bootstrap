import { CREATE_NEW_BOOK_FROM_GOOGLE, GOOGLE_SEARCH_INPUT, SET_GOOGLE_FILTER_NEWEST, SET_GOOGLE_FILTER_RESULT, SET_GOOGLE_FILTER_VALUE } from '../actions/';

import initialState from './initialState';

export default function googleBooksReducer(state = initialState.googleBooks, action) {
  switch (action.type) {
    case SET_GOOGLE_FILTER_VALUE:
      {
        const query = Object.assign({}, { ...state.query });
        query[action.field] = action.value;
        return Object.assign({}, { ...state, active: true, touched: true, query });
      }
    case SET_GOOGLE_FILTER_RESULT:
      {
        return Object.assign({}, { ...state, touched: false, result: action.result });
      }
    case CREATE_NEW_BOOK_FROM_GOOGLE:
      {
        return initialState.googleBooks;
      }
    case SET_GOOGLE_FILTER_NEWEST: {
      return Object.assign({}, { ...state, touched: false, newest: action.result, search: '' });
    }
    case GOOGLE_SEARCH_INPUT: {
      return Object.assign({}, { ...state, touched: true, search: action.search });
    }
    default:
      return state;
  }
}
