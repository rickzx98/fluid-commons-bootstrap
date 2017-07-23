import appModal from './AppModalReducer';
import books from './BookReducer';
import { combineReducers } from 'redux';
import managedBook from './ManagedBookReducer';
import managedSubject from './ManagedSubjectReducer';
import { routerReducer } from 'react-router-redux';
import settings from './SettingsReducer';
import subjects from './SubjectReducer';

const rootReducer = combineReducers({
  books,
  subjects,
  managedBook,
  managedSubject,
  settings,
  dialog: appModal,
  routing: routerReducer
});

export default rootReducer;
