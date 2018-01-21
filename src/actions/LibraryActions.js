import * as ajaxActions from './AjaxStatusActions';
import * as types from './';

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
      .then((libraries)=> {
        dispatch(loadLibrarySuccess(libraries));
        dispatch(ajaxActions.ajaxCallSuccess());
      })
      .catch(err=> {
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
