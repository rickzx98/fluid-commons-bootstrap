import * as types from '../actions/';

import initialState from './initialState';

//import objectAssign from 'object-assign';

export default function securityReducer(state = initialState.security, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS: {
            return Object.assign({}, { ...state, isAuthenticated: true, ...action.user });
        }
        default:
            return state;
    }
}
