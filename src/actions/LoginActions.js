import * as types from './';

export function requestLogin(credentials) {
    return {
        type: types.LOGIN_REQUEST,
        isAuthenticated: false,
        credentials
    };
}

export function receiveLogin(user) {
    return {
        type: types.LOGIN_SUCCESS,
        isAuthenticated: false,
        user
    };
}

export function loginError(message) {
    return {
        type: types.LOGIN_FAILURE,
        isAuthenticated: false,
        message
    };
}

export function setLogin(name, value) {
    return {
        type: types.SET_LOGIN,
        name, value
    };
}
