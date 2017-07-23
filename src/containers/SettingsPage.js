import * as actions from '../actions/BookActions';

import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class SettingsPage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
        return (<div className="settings page"/>);
    }
}

SettingsPage.propTypes = {
    actions: PropTypes.object.isRequired,
    settings: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        settings: state.settings
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export const ConnectSettingsPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectSettingsPage);
