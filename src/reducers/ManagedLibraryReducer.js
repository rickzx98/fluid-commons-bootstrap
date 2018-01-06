import initialState from './initialState';
import {SET_MANAGED_LIBRARY_FIELD_VALUE} from '../actions/';
export default function managedLibraryReducer(state = initialState.managedLibrary, action) {
  switch (action.type) {
    case SET_MANAGED_LIBRARY_FIELD_VALUE:
    {
      const newState = Object.assign({}, { ...state, touched: true, active: true });
      newState[action.field] = action.value;
      return newState;
    }
    default:
      return state;
  }
}
