import {
    LOAD_SETTINGS_SUCCESS,
    SETTINGS_ADD_CURRENCY,
    SETTINGS_ADD_FUND,
    SETTINGS_ADD_RESOURCE_TYPE,
    SETTINGS_REMOVE_CURRENCY,
    SETTINGS_REMOVE_FUND,
    SETTINGS_REMOVE_RESOURCE_TYPE,
    SETTINGS_UPDATE_CURRENCY,
    SETTINGS_UPDATE_FUND,
    SETTINGS_UPDATE_RESOURCE_TYPE
} from '../actions/';

import initialState from './initialState';

export default function SettingsReducer(state = initialState.settings, action) {
    switch (action.type) {
        case LOAD_SETTINGS_SUCCESS: {
            if (action.settings) {
                state = Object.assign({}, { ...action.settings });
            } else {
                state = initialState.settings;
            }
            return state;
        }
        case SETTINGS_UPDATE_FUND: {
            const funds = [...state.funds];
            funds[action.index] = action.fund;
            return Object.assign({}, { ...state, funds });
        }
        case SETTINGS_REMOVE_FUND: {
            const funds = [...state.funds];
            funds.splice(action.index, 1);
            return Object.assign({}, { ...state, funds });
        }
        case SETTINGS_ADD_FUND: {
            if (action.fund && action.fund.length > 0) {
                const funds = [...state.funds];
                const found = funds.filter(fd => fd === action.fund);
                if (found.length === 0) {
                    funds.push(action.fund);
                }
                return Object.assign({}, { ...state, funds });
            }
            return state;
        }
        case SETTINGS_UPDATE_CURRENCY: {
            const currencies = [...state.currencies];
            currencies[action.index] = action.currency;
            return Object.assign({}, { ...state, currencies });
        }
        case SETTINGS_REMOVE_CURRENCY: {
            const currencies = [...state.currencies];
            currencies.splice(action.index, 1);
            return Object.assign({}, { ...state, currencies });
        }
        case SETTINGS_ADD_CURRENCY: {
            if (action.currency && action.currency.length > 0) {
                const currencies = [...state.currencies];
                const found = currencies.filter(cur => cur === action.currency);
                if (found.length === 0) {
                    currencies.push(action.currency);
                }
                return Object.assign({}, { ...state, currencies });
            }
            return state;
        }
        case SETTINGS_UPDATE_RESOURCE_TYPE: {
            const resourceTypes = [...state.resourceTypes];
            resourceTypes[action.index] = action.resourceType;
            return Object.assign({}, { ...state, resourceTypes });
        }
        case SETTINGS_REMOVE_RESOURCE_TYPE: {
            const resourceTypes = [...state.resourceTypes];
            resourceTypes.splice(action.index, 1);
            return Object.assign({}, { ...state, resourceTypes });
        }
        case SETTINGS_ADD_RESOURCE_TYPE: {
            if (action.resourceType && action.resourceType.label && action.resourceType.label.length > 0
                && action.resourceType.value && action.resourceType.value.length > 0) {
                const resourceTypes = [...state.resourceTypes];
                const found = resourceTypes.filter(cur => cur === action.resourceType);
                if (found.length === 0) {
                    resourceTypes.push(action.resourceType);
                }
                return Object.assign({}, { ...state, resourceTypes });
            }
            return state;
        }
        default:
            return state;
    }
}
