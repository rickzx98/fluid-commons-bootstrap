import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions/LibraryActions';
import '../images/library-header.jpg';
import {ManagedLibraryPageBody} from '../components/library/';
export class ManagedLibraryPage extends React.Component {
  constructor(props) {
    super(props);
    this.thisOnFormChange = this.onFormChange.bind(this);
    this.thisOnFormSubmit = this.onFormSubmit.bind(this);
  }

  componentWillMount() {
    this.state = {};
  }

  onFormChange(event) {
    this.props.actions.setManagedLibraryFieldValue(event.target.name, event.target.value);
  }
  onFormSubmit(event){

  }

  render() {
    const managedLibraryPageBodyProps = {
      ajaxGlobal: this.props.ajax,
      managedLibrary: this.props.managedLibrary,
      onFormChange: this.thisOnFormChange,
      onFormSubmit: this.thisOnFormSubmit
    };
    return <ManagedLibraryPageBody {...managedLibraryPageBodyProps}/>;
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
    actions: bindActionCreators(actions, dispatch)
  };
}

export const ConnectedManagedLibraryPage = connect(mapStateToProps, mapDispatchToProps)(ManagedLibraryPage);

ManagedLibraryPage.defaultProps = {
  access: ['admin', 'librarian']
};

ManagedLibraryPage.propTypes = {
  actions: PropTypes.object.isRequired,
  managedLibrary: PropTypes.object.isRequired,
  ajax: PropTypes.object.isRequired
};
