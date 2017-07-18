import books from './BookReducer';
import { combineReducers } from 'redux';
import managedBook from './ManagedBookReducer';
import managedSubject from './ManagedSubjectReducer';
import { routerReducer } from 'react-router-redux';
import subjects from './SubjectReducer';

const rootReducer = combineReducers({
  books,
  subjects,
  managedBook,
  managedSubject,
  routing: routerReducer
});

export default rootReducer;
