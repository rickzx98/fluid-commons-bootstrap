import '../images/library-header.jpg';

import * as actions from '../actions/LibraryActions';
import * as headerActions from '../actions/HeaderActions';

import { LABEL_SAVE } from '../labels/';
import { ManagedLibraryPageBody } from '../components/library/';
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

export class ManagedLibraryPage extends React.Component {
  constructor(props) {
    super(props);
    this.thisOnFormChange = this.onFormChange.bind(this);
    this.thisOnFormSubmit = this.onFormSubmit.bind(this);
  }

  componentWillMount() {
    this.state = {};
    this.setHeader();
  }

  componentDidUpdate() {
    this.setHeader();
  }
  
  setHeader() {
    const header = {};
    header[LABEL_SAVE] = {
      fontIcon: 'floppy-o',
      onClick: this.thisOnFormSubmit
    };
    this.props.headerActions.setHeaderControls(header);
  }
  onFormChange(event) {
    this.props.actions.setManagedLibraryFieldValue(event.target.name, event.target.value);
  }

  onFormSubmit() {
    if (!this.props.managedLibrary.update) {
      this.props.actions.createLibrary(this.props.managedLibrary)
        .then(() => {
          browserHistory.push('/library');
        });
    }
  }

  render() {
    const managedLibraryPageBodyProps = {
      ajaxGlobal: this.props.ajax,
      managedLibrary: this.props.managedLibrary,
      onFormChange: this.thisOnFormChange,
      onFormSubmit: this.thisOnFormSubmit
    };
    return <ManagedLibraryPageBody {...managedLibraryPageBodyProps} />;
  }
}

function mapStateToProps(state) {
  return {
    managedLibrary: state.managedLibrary,
    ajax: state.ajaxGlobal
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    headerActions: bindActionCreators(headerActions, dispatch)
  };
}

export const ConnectedManagedLibraryPage = connect(mapStateToProps, mapDispatchToProps)(ManagedLibraryPage);

ManagedLibraryPage.defaultProps = {
  access: ['admin', 'librarian']
};

ManagedLibraryPage.propTypes = {
  actions: PropTypes.object.isRequired,
  managedLibrary: PropTypes.object.isRequired,
  ajax: PropTypes.object.isRequired,
  headerActions: PropTypes.object.isRequired
};
