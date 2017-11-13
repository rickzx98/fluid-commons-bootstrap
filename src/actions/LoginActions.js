import * as ajaxActions from './AjaxStatusActions';
import * as notificationActions from './NotificationActions';
import * as types from './';

import { getApi as securityApi } from '../api/security/';

export function requestLogin(credentials) {
    return (dispatch) => {
        dispatch(ajaxActions.beginAjaxCall());
        securityApi().requestLogin(credentials)
            .then(user => {
                dispatch(ajaxActions.ajaxCallSuccess());
                dispatch(receiveLogin(user));
            })
            .catch(error => {
                dispatch(ajaxActions.ajaxCallError(error));
                dispatch(notificationActions.alertDanger(error.message));
                dispatch(loginError(error.message));
            });
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
