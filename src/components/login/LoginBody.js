import { FontAwesome, PageBody, PageHeader, ResponsiveButton, TextInput } from '../common/';
import { LABEL_FORGOT_PASSWORD, LABEL_NEW_USER, LABEL_PASSWORD, LABEL_SIGN_IN, LABEL_USERNAME, LABEL_WELCOME } from '../../labels/';

import PropTypes from 'prop-types';
import React from 'react';

export const LoginBody = ({ onChange, onSubmit, login, ajax }) => {
    return (<span>
        <PageHeader loading={ajax.started}
            spinIcon={false} iconName="book"
            label={`${LABEL_WELCOME}`} />
        <PageBody>
            <form onChange={onChange} onSubmit={onSubmit}>
                <div className="login-container">
                    <div>
                        <TextInput value={login.username} name="username" label={LABEL_USERNAME} />
                        <TextInput value={login.password} name="password" type="password" label={LABEL_PASSWORD} />
                    </div>
                    <div className="clearfix">
                        <ResponsiveButton disabled={ajax.started}
                            className="btn btn-primary btn-sm"
                            id="forgotPasswordButton"
                            icon={<FontAwesome name="question-circle" />}
                            label={LABEL_FORGOT_PASSWORD} />
                        <ResponsiveButton disabled={ajax.started} id="signinButton"
                            type="submit" className="btn btn-success btn-sm"
                            icon={<FontAwesome name="sign-in" />} label={LABEL_SIGN_IN} />
                        <ResponsiveButton disabled={ajax.started} id="newUserButton"
                            type="button"
                            className="btn btn-primary btn-sm"
                            icon={<FontAwesome name="users" />}
                            label={LABEL_NEW_USER} />
                    </div>
                </div>
            </form>
        </PageBody>
    </span>);
};

LoginBody.propTypes = {
    ajax: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    login: PropTypes.object.isRequired
};