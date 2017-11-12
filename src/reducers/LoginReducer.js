import { LOGIN_REQUEST, SET_LOGIN } from '../actions/';

import initialState from './initialState';

//import objectAssign from 'object-assign';

export default function loginReducer(state = initialState.login, action) {
    switch (action.type) {
        case SET_LOGIN: {
            const loginState = Object.assign({}, { ...state });
            loginState[action.name] = action.value;
            return loginState;
        }
        default:
            return state;
    }
}
