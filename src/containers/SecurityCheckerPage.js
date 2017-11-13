import * as actions from '../actions/SecurityActions';

import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

export class SecurityCheckerPage extends React.Component {
    componentDidMount() {
        if (!this.props.security.isAuthenticated) {
            browserHistory.replace('/login');
        }
    }
    render() {
        if (this.props.security.isAuthenticated) {
            console.log(this.props);
            return this.props.children;
        } else {
            return null;
        }
    }
}

SecurityCheckerPage.propTypes = {
    security: PropTypes.object.isRequired,
    children: PropTypes.element
};

function mapStateToProps(state) {
    return { security: state.security };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) };
}

export const ConnectSecurityCheckerPage = connect(mapStateToProps, mapDispatchToProps)(SecurityCheckerPage);

