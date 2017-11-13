import * as actions from '../actions/BookSubjectActions';

import { BookSubjectIndex } from '../components/subjects/';
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class SubjectsPage extends React.Component {
  componentWillMount() {
    this.props.actions.loadSubjects();
  }

  render() {
    return (<BookSubjectIndex
      removeSubject={this.props.actions.removeManagedBookSubject}
      subjects={this.props.subjects}
      managedBook={this.props.managedBook} />);
  }
}

SubjectsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  subjects: PropTypes.array.isRequired,
  managedBook: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    subjects: state.subjects,
    managedBook: state.managedBook
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export const ConnectSubjectsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectsPage);

SubjectsPage.defaultProps = {
  access: ['admin', 'librarian']
};
