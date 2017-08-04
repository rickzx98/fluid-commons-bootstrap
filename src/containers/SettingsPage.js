import '../images/settings-header.jpg';

import * as actions from '../actions/SettingsActions';

import { PageBody, PageHeader } from '../components/common/';

import { LABEL_SETTINGS } from '../labels/';
import PropTypes from 'prop-types';
import React from 'react';
import { SettingsForm } from '../components/settings/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class SettingsPage extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onFormSubmit.bind(this);
  }
  componentWillMount() {
    this.props.actions.loadSettings();
  }
  onFormSubmit(event) {
    event.preventDefault();
    this.props.actions.saveSettings(process.env.SCHOOL_ID, this.props.settings);
  }
  render() {
    return (<div className="settings page">
      <PageHeader iconName="gears" label={LABEL_SETTINGS} />
      <PageBody>
        <SettingsForm
          onSubmit={this.onSubmit}
          addFund={this.props.actions.addFund}
          removeFund={this.props.actions.removeFund}
          updateFund={this.props.actions.updateFund}
          addCurrency={this.props.actions.addCurrency}
          removeCurrency={this.props.actions.removeCurrency}
          updateCurrency={this.props.actions.updateCurrency}
          addResourceType={this.props.actions.addResourceType}
          removeResourceType={this.props.actions.removeResourceType}
          updateResourceType={this.props.actions.updateResourceType}
          loadSettings={this.props.actions.loadSettings}
          settings={this.props.settings} />
      </PageBody>
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
