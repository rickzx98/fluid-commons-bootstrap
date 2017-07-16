import books from './BookReducer';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  books,
  routing: routerReducer
});

export default rootReducer;
