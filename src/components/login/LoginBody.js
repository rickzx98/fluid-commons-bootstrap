import { LABEL_PASSWORD, LABEL_PLEASE_SIGN_IN, LABEL_SIGN_IN, LABEL_USERNAME, LABEL_WELCOME } from '../../labels/';
import { PageBody, PageHeader, TextInput } from '../common/';

import PropTypes from 'prop-types';
import React from 'react';

export const LoginBody = ({ onChange, onSubmit, login }) => {
    return (<span>
        <PageHeader iconName="lock" label={`${LABEL_WELCOME}, ${LABEL_PLEASE_SIGN_IN}`} />
        <PageBody>
            <form onChange={onChange} onSubmit={onSubmit}>
                <div className="login-container">
                    <TextInput value={login.username} name="username" label={LABEL_USERNAME} />
                    <TextInput value={login.password} name="password" type="password" label={LABEL_PASSWORD} />
                </div>
                <div className="login-container">
                    <button id="signinButton" type="submit" className="btn btn-info">{LABEL_SIGN_IN}</button>
                </div>
            </form>
        </PageBody>
    </span>);
};

LoginBody.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    login: PropTypes.object.isRequired
};