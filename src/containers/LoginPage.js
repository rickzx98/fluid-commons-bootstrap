import * as actions from '../actions/LoginActions';

import { LoginBody } from '../components/login/';
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class LoginPage extends React.Component {
    componentWillMount() {
        this.state = {};
        this.thisOnFormChange = this.onFormChange.bind(this);
        this.thisOnFormSubmit = this.onFormSubmit.bind(this);
    }
    onFormChange(event) {
        this.props.actions.setLogin(event.target.name, event.target.value);
    }
    onFormSubmit(event) {
        event.preventDefault();
    }
    render() {
        const loginProps = {
            onChange: this.thisOnFormChange,
            onSubmit: this.thisOnFormSubmit,
            login: this.props.login
        };
        return <div className="login page"><LoginBody {...loginProps} /></div>;
    }
}

function mapStateToProps(state) {
    return { login: state.login };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) };
}

export const ConnectLoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage);


LoginPage.propTypes = {
    actions: PropTypes.object.isRequired,
    login: PropTypes.object.isRequired
};