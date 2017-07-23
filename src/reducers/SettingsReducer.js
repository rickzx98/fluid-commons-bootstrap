import { LOAD_SETTINGS_SUCCESS, SETTINGS_ADD_FUND, SETTINGS_REMOVE_FUND, SETTINGS_UPDATE_FUND } from '../actions/';

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
        case SETTINGS_REMOVE_FUND: {
            const funds = [...state.funds];
            funds.splice(action.index, 1);
            return Object.assign({}, { ...state, funds })
        }
        case SETTINGS_ADD_FUND: {
            if (action.fund && action.fund.length > 0) {
                const funds = [...state.funds];
                const found = funds.filter(fd => fd === action.fund);
                if (found.length === 0) {
                    funds.push(action.fund);
                }
                return Object.assign({}, { ...state, funds })
            }
            return state;
        }
        default:
            return state;
    }
}
