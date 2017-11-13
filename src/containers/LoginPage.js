import '../images/login-panel.png';
import '../images/login-body.jpg';

import * as actions from '../actions/LoginActions';

import { LoginBody } from '../components/login/';
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

export class LoginPage extends React.Component {
    componentWillMount() {
        this.state = {};
        this.thisOnFormChange = this.onFormChange.bind(this);
        this.thisOnFormSubmit = this.onFormSubmit.bind(this);
    }
    componentDidMount() {
        if (this.props.security.isAuthenticated) {
            browserHistory.replace("/");
        }
    }
    onFormChange(event) {
        this.props.actions.setLogin(event.target.name, event.target.value);
    }
    onFormSubmit(event) {
        event.preventDefault();
        this.props.actions.requestLogin(this.props.login);
    }
    render() {
        const loginProps = {
            onChange: this.thisOnFormChange,
            onSubmit: this.thisOnFormSubmit,
            login: this.props.login,
            ajax: this.props.ajax
        };
        return <div className="login page"><LoginBody {...loginProps} /></div>;
    }
}

function mapStateToProps(state) {
    return {
        security: state.security,
        login: state.login,
        ajax: state.ajaxGlobal
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export const ConnectLoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage);


LoginPage.propTypes = {
    actions: PropTypes.object.isRequired,
    login: PropTypes.object.isRequired,
    security: PropTypes.object.isRequired,
    ajax: PropTypes.object.isRequired
};