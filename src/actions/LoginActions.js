import * as types from './';

export function requestLogin(credentials) {
    return {
        type: types.LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        credentials
    };
}

export function receiveLogin(user) {
    return {
        type: types.LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: false,
        id_token: user.id.token
    }
}

export function loginError(message) {
    return {
        type: types.LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    }
}
