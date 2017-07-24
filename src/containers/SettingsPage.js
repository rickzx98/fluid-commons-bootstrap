import * as actions from '../actions/SettingsActions';

import { SettingsForm, SettingsPageHeader } from '../components/settings/';

import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class SettingsPage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.actions.loadSettings();
    }
    render() {
        return (<div className="settings page">
            <SettingsPageHeader />
            <SettingsForm
                addFund={this.props.actions.addFund}
                removeFund={this.props.actions.removeFund}
                updateFund={this.props.actions.updateFund}
                addCurrency={this.props.actions.addCurrency}
                removeCurrency={this.props.actions.removeCurrency}
                updateCurrency={this.props.actions.updateCurrency}
                addResourceType={this.props.actions.addResourceType}
                removeResourceType={this.props.actions.removeResourceType}
                updateResourceType={this.props.actions.updateResourceType}
                settings={this.props.settings} />
        </div>);
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
)(SettingsPage);
