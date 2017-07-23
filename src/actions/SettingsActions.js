import * as ajaxActions from './AjaxStatusActions';
import * as types from './';

import { getApi as settingsApi } from '../api/settings';

export function loadSettingsSuccess(settings) {
    return {
        type: types.LOAD_SETTINGS_SUCCESS,
        settings
    };
}

export function loadSettings() {
    return dispatch => {
        dispatch(ajaxActions.beginAjaxCall());
        return settingsApi().loadSettings().then(settings => {
            dispatch(loadSettingsSuccess(settings));
        }).catch(error => {
            dispatch(ajaxActions.ajaxCallError(error));
        });
    };
}

export function addFund(fund) {
    return {
        type: types.SETTINGS_ADD_FUND,
        fund
    };
}

export function removeFund(index) {
    return {
        type: types.SETTINGS_REMOVE_FUND,
        index
    };
}


export function updateFund(fund, index) {
    return dispatch => {
        dispatch(ajaxActions.beginAjaxCall());
        return settingsApi().updateFund(fund, index).then(settings => {
            dispatch(loadSettingsSuccess(settings));
        }).catch(error => {
            dispatch(ajaxActions.ajaxCallError(error));
        });
    };
}
