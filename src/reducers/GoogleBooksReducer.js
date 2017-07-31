import initialState from './initialState';
import {SET_GOOGLE_FILTER_RESULT, SET_GOOGLE_FILTER_VALUE, CREATE_NEW_BOOK_FROM_GOOGLE} from '../actions/';
export default function googleBooksReducer(state = initialState.googleBooks, action) {
  switch (action.type) {
    case SET_GOOGLE_FILTER_VALUE:
    {
      const query = Object.assign({}, {...state.query});
      query[action.field] = action.value;
      return Object.assign({}, {...state, active: true, touched: true, query});
    }
    case SET_GOOGLE_FILTER_RESULT:
    {
      return Object.assign({}, {...state, touched: false, result: action.result});
    }
    case CREATE_NEW_BOOK_FROM_GOOGLE:
    {
      return initialState.googleBooks;
    }
    default:
      return state;
  }
}
