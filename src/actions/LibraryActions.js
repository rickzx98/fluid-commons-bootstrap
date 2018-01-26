import * as ajaxActions from './AjaxStatusActions';
import * as notificationActions from './NotificationActions';
import * as types from './';

import { Library } from '../api/library/Library';
import { getApi as LibraryApi } from '../api/library/';

export function setManagedLibraryFieldValue(field, value) {
  return {
    type: types.SET_MANAGED_LIBRARY_FIELD_VALUE,
    field, value
  };
}
export function loadLibrary() {
  return dispatch => {
    dispatch(ajaxActions.beginAjaxCall());
    LibraryApi().getLibraries()
      .then((libraries) => {
        dispatch(loadLibrarySuccess(libraries));
        dispatch(ajaxActions.ajaxCallSuccess());
      })
      .catch(err => {
        dispatch(ajaxActions.ajaxCallError(err));
      });
  };
}

export function loadLibrarySuccess(libraries) {
  return {
    type: types.LOAD_LIBRARIES_SUCCESS,
    payload: libraries
  };
}


export function createLibrary(library) {
  return dispatch => {
    dispatch(ajaxActions.beginAjaxCall());
    new LibraryApi().createLibrary(library)
      .then(createdLib => {
        dispatch(notificationActions.alertSuccess(`${createdLib[Library.NAME]} is created.`));
        dispatch(ajaxActions.ajaxCallSuccess());
      })
      .catch(err => {
        dispatch(ajaxActions.ajaxCallError(err));
      });
  };
}