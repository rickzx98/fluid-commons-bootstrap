import '../images/library-header.jpg';

import * as actions from '../actions/LibraryActions';
import * as dialogActions from '../actions/DialogActions';
import * as headerActions from '../actions/HeaderActions';

import { CancelModalFooter, DeleteModalBody } from '../components/common';

import { LABEL_NEW_LIBRARY } from '../labels/';
import { Library } from '../api/library/Library';
import { LibraryPageBody } from '../components/library/';
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

export class LibraryPage extends React.Component {
  constructor(props) {
    super(props);
    this.thisOnRemoveLibrary = this.onRemoveLibrary.bind(this);
    this.thisNewLibrary = this.newLibrary.bind(this);
  }
  componentWillMount() {
    this.state = {};
    this.props.actions.loadLibrary();
    this.setHeaders();
  }

  newLibrary() {
    browserHistory.push('/library/new');
  }

  onRemoveLibrary(library) {
    return new Promise((resolve, reject) => {
      try {
        this.props.dialogActions.openDialog({
          body: <DeleteModalBody itemName={`${library[Library.NAME]} - ${library[Library.DEPARTMENT]}`} />,
          footer: <CancelModalFooter
            resolve={resolve}
            confirmCancel={() => {
              this.props.actions.removeLibrary(library[Library.LIBRARY_ID])
                .then(() => {
                  this.props.dialogActions.closeDialog();
                  this.props.actions.loadLibrary();
                });
            }}
            closeDialog={this.props.dialogActions.closeDialog} />
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  setHeaders() {
    const header = {};
    header[LABEL_NEW_LIBRARY] = {
      fontIcon: 'plus',
      onClick: this.thisNewLibrary
    };
    this.props.headerActions.setHeaderControls(header);
  }

  render() {
    return <LibraryPageBody removeLibrary={this.thisOnRemoveLibrary} ajaxGlobal={this.props.ajax} library={this.props.library} />;
  }
}

function mapStateToProps(state) {
  return {
    library: state.library,
    ajax: state.ajaxGlobal
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    headerActions: bindActionCreators(headerActions, dispatch),
    dialogActions: bindActionCreators(dialogActions, dispatch)
  };
}

export const ConnectedLibraryPage = connect(mapStateToProps, mapDispatchToProps)(LibraryPage);

LibraryPage.defaultProps = {
  access: ['admin', 'librarian']
};

LibraryPage.propTypes = {
  actions: PropTypes.object.isRequired,
  library: PropTypes.array.isRequired,
  ajax: PropTypes.object.isRequired,
  headerActions: PropTypes.object.isRequired,
  dialogActions: PropTypes.object.isRequired
};
