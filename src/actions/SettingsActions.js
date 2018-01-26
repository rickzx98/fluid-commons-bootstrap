import * as ajaxActions from './AjaxStatusActions';
import * as notificationActions from './NotificationActions';
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
      dispatch(ajaxActions.ajaxCallSuccess());
    }).catch(error => {
      dispatch(ajaxActions.ajaxCallError(error));
    });
  };
}

export function saveSettings(schoolId, settings) {
  return dispatch => {
    dispatch(ajaxActions.beginAjaxCall());
    return settingsApi().saveSettings(schoolId, settings).then(newSettings => {
      dispatch(loadSettingsSuccess(newSettings));
      dispatch(ajaxActions.ajaxCallSuccess());
      dispatch(notificationActions.alertSuccess('Settings have been saved.'));
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
  return {
    type: types.SETTINGS_UPDATE_FUND,
    fund, index
  };
}


export function addCurrency(currency) {
  return {
    type: types.SETTINGS_ADD_CURRENCY,
    currency
  };
}

export function removeCurrency(index) {
  return {
    type: types.SETTINGS_REMOVE_CURRENCY,
    index
  };
}


export function updateCurrency(currency, index) {
  return {
    type: types.SETTINGS_UPDATE_CURRENCY,
    currency, index
  };
}

export function addResourceType(resourceType) {
  return {
    type: types.SETTINGS_ADD_RESOURCE_TYPE,
    resourceType
  };
}

export function removeResourceType(index) {
  return {
    type: types.SETTINGS_REMOVE_RESOURCE_TYPE,
    index
  };
}


export function updateResourceType(resourceType, index) {
  return {
    type: types.SETTINGS_UPDATE_RESOURCE_TYPE,
    resourceType, index
  };
}
