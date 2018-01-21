import '../images/library-header.jpg';
import * as headerActions from '../actions/HeaderActions';
import * as actions from '../actions/LibraryActions';
import {LABEL_NEW_LIBRARY} from '../labels/';
import { LibraryPageBody } from '../components/library/';
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {browserHistory} from 'react-router';
export class LibraryPage extends React.Component {
  constructor(props){
    super(props);
    this.thisNewLibrary = this.newLibrary.bind(this);
  }
  componentWillMount() {
    this.state = {};
    this.props.actions.loadLibrary();
    this.setHeaders();
  }

  componentDidUpdate() {
    this.setHeaders();
  }

  newLibrary() {
    browserHistory.push('/library/new');
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
    return <LibraryPageBody ajaxGlobal={this.props.ajax} library={this.props.library}/>;
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
    headerActions: bindActionCreators(headerActions, dispatch)
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
  headerActions: PropTypes.object.isRequired
};
