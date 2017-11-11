import * as types from './';

export function loginUser(credential) {
    return {
        type: types.LOGIN_USER,
        credential
    };
}