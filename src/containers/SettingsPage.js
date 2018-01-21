import '../images/settings-header.jpg';
import * as headerActions from '../actions/HeaderActions';
import * as actions from '../actions/SettingsActions';

import { PageBody, PageHeader } from '../components/common/';

import { LABEL_SETTINGS, LABEL_SAVE, LABEL_REFRESH } from '../labels/';
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
    this.setHeader();
  }

  componentDidUpdate() {
    this.setHeader();
  }

  setHeader() {
    const header = {};
    header[LABEL_SAVE] = {
      fontIcon: 'floppy-o',
      onClick: this.onSubmit
    };
    header[LABEL_REFRESH] = {
      fontIcon: 'refresh',
      onClick: this.props.actions.loadSettings
    };
    this.props.headerActions.setHeaderControls(header);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.actions.saveSettings(process.env.SCHOOL_ID, this.props.settings);
  }

  render() {
    return (<div className="settings page">
      <PageHeader loading={this.props.ajaxGlobal.started}
                  iconName="gear" label={LABEL_SETTINGS}/>
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
          settings={this.props.settings}/>
      </PageBody>
    </div>);
  }
}

SettingsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  ajaxGlobal: PropTypes.object.isRequired,
  headerActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    settings: state.settings,
    ajaxGlobal: state.ajaxGlobal
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    headerActions: bindActionCreators(headerActions, dispatch)
  };
}

export const ConnectSettingsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsPage);

SettingsPage.defaultProps = {
  access: ['admin', 'librarian']
};
