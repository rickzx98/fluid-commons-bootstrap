import * as actions from '../actions/SecurityActions';

import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

export class SecurityCheckerPage extends React.Component {
    constructor(props) {
        super(props);
        this.thisIsRoleAllowed = this.isRoleAllowed.bind(this);
    }
    componentDidMount() {
        if (!this.props.security.isAuthenticated) {
            browserHistory.replace('/login');
        } else if (!this.isRoleAllowed()) {
            this.props.actions.notAuthorizedAccess(this.props.router.getCurrentLocation().pathname);
            this.props.router.goBack();
        }
    }
    componentDidUpdate() {
        if (!this.isRoleAllowed()) {
            this.props.actions.notAuthorizedAccess(this.props.router.getCurrentLocation().pathname);
            this.props.router.goBack();
        }
    }

    isRoleAllowed() {
        const Component = this.props.children.type.WrappedComponent;
        const { access } = Component.defaultProps;
        return access.indexOf(this.props.security.role) > -1;
    }

    render() {
        if (this.props.security.isAuthenticated) {
            if (this.thisIsRoleAllowed()) {
                return this.props.children;
            }
            else {
                return null;
            }
        } else {
            return null;
        }
    }
}

SecurityCheckerPage.propTypes = {
    security: PropTypes.object.isRequired,
    children: PropTypes.element,
    router: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return { security: state.security };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) };
}

export const ConnectSecurityCheckerPage = connect(mapStateToProps, mapDispatchToProps)(SecurityCheckerPage);

