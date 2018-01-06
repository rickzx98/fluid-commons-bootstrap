import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions/LibraryActions';
import '../images/library-header.jpg';
import {LibraryPageBody} from '../components/library/';
export class LibraryPage extends React.Component {

  componentWillMount() {
    this.state = {};
    this.props.actions.loadLibrary();
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
    actions: bindActionCreators(actions, dispatch)
  };
}

export const ConnectedLibraryPage = connect(mapStateToProps, mapDispatchToProps)(LibraryPage);

LibraryPage.defaultProps = {
  access: ['admin', 'librarian']
};

LibraryPage.propTypes = {
  actions: PropTypes.object.isRequired,
  library: PropTypes.array.isRequired,
  ajax: PropTypes.object.isRequired
};
