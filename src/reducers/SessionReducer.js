import initialState from './initialState';

export default function SettingsReducer(state = initialState.security, action) {
    switch (action.type) {
        default:
            return state;
    }
}
