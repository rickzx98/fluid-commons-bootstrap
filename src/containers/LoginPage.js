import * as actions from '../actions/LoginActions';

import { LoginBody } from '../components/login/';
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class LoginPage extends React.Component {
    componentWillMount() {
        this.state = {};
        this.thisOnUsernameChange = this.onUsernameChange.bind(this);
    }
    onUsernameChange(event) {
        this.setState({
            username: event.target.value
        });
    }
    render() {
        const loginProps = {
            userame: this.state.username,
            onUsernameChange: this.thisOnUsernameChange
        };
        return <div className="login page"><LoginBody {...loginProps} /></div>;
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) };
}

export const ConnectLoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage);