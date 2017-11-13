import * as notificationActions from './NotificationActions';

export function notAuthorizedAccess(path) {
    return (dispatch, state) => {
        dispatch(notificationActions.alertDanger(`User with role ${state().security.role} is not allowed for ${path}.`));
    };
}