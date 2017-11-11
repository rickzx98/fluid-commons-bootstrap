import { LABEL_PASSWORD, LABEL_PLEASE_SIGN_IN, LABEL_USERNAME, LABEL_WELCOME } from '../../labels/';
import { PageBody, PageHeader, TextInput } from '../common/';

import React from 'react';

export const LoginBody = ({ onUsernameChange, username }) => {
    console.log('loginBody.username', username);
    return (<span>
        <PageHeader iconName="lock" label={`${LABEL_WELCOME}, ${LABEL_PLEASE_SIGN_IN}`} />
        <PageBody>
            <form>
                <div className="login-container">
                    <TextInput name="username" value={username} onChange={onUsernameChange} label={LABEL_USERNAME} />
                </div>
            </form>
        </PageBody>
    </span>);
}