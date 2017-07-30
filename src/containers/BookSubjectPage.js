import * as actions from '../actions/BookSubjectActions';

import { BookSubjectList } from '../components/subjects/BookSubjectList';
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class SubjectsPage extends React.Component {
  componentWillMount() {
    this.props.actions.loadSubjects();
  }

  render() {
    return (<div className="subjects">
      <BookSubjectList removeSubject={this.props.actions.removeManagedBookSubject} subjects={this.props.subjects}
                       managedBook={this.props.managedBook}/>
    </div>);
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
