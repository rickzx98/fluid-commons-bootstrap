import books from './BookReducer';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import subjects from './SubjectReducer';

const rootReducer = combineReducers({
  books,
  subjects,
  routing: routerReducer
});

export default rootReducer;
