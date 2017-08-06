import '../images/subject-header.jpg';

import * as actions from '../actions/BookSubjectActions';

import { CancelSubjectModalBody, ManagedSubjectIndex } from '../components/subjects/';
import {
  LABEL_CONFIRM_CANCEL_SUBJECT_TITLE,
  LABEL_CONFIRM_PAGE_LEAVE_UNSAVED_CHANGES
} from '../labels/';
import { SubjectFields, SubjectHeadingsByType } from '../api/subjects/';

import { CancelModalFooter } from '../components/common/';
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { convertToSubject } from '../utils/';

export class ManagedSubjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeForm = this.onChange.bind(this);
    this.cancelManagedSubject = this.cancelSubject.bind(this);
    this.addSubjectToManagedBook = this.addSubject.bind(this);
    this.updateManagedSubject = this.updateSubject.bind(this);
    this.onPageLeave = this.routerWillLeave.bind(this);
    this.modalConfirmCancel = this.confirmCancel.bind(this);
  }

  componentWillMount() {
    if (!this.props.managedSubject.active && this.props.subject) {
      this.props.actions.loadManagedSubjectSuccess(this.props.subject);
    }
  }

  componentDidMount() {
    this.props.router.setRouteLeaveHook(this.props.route, this.onPageLeave);
  }

  onChange(field, value) {
    this.props.actions.setManagedSubjectFieldValue(field, value);
  }

  addSubject(subject) {
    this.props.actions.addSubjectToManagedBook(subject);
    this.goToPrevious();
  }

  updateSubject(subject) {
    this.props.actions.updateManagedSubject(subject, this.props.routeParams.index);
    this.goToPrevious();
  }

  confirmCancel() {
    this.props.actions.cancelManagedSubject();
    this.props.actions.closeDialog();
    this.goToPrevious();
  }

  cancelSubject() {
    return new Promise((resolve, reject) => {
      if (this.props.managedSubject.active && this.props.managedSubject.touched) {
        this.props.actions.openDialogConfirmSubjectCancel({
          title: LABEL_CONFIRM_CANCEL_SUBJECT_TITLE,
          body: <CancelSubjectModalBody />,
          footer: <CancelModalFooter
            reject={reject}
            resolve={resolve}
            confirmCancel={this.modalConfirmCancel}
            closeDialog={this.props.actions.closeDialog} />
        });
      } else {
        this.props.actions.cancelManagedSubject();
        resolve();
      }
    });
  }

  goToPrevious() {
    browserHistory.goBack();
  }

  routerWillLeave() {
    if (this.props.managedSubject.active && this.props.managedSubject.touched) {
      return LABEL_CONFIRM_PAGE_LEAVE_UNSAVED_CHANGES;
    }
  }

  render() {
    return (<ManagedSubjectIndex
      cancelManagedSubject={this.cancelManagedSubject}
      subjects={this.props.subjects}
      onChange={this.onChangeForm}
      managedSubject={this.props.managedSubject}
      subjectFields={this.props.subjectFields}
      subjectHeadings={this.props.subjectHeadings} />);
  }
}

ManagedSubjectPage.propTypes = {
  actions: PropTypes.object.isRequired,
  subjects: PropTypes.array.isRequired,
  subject: PropTypes.object,
  managedSubject: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
  routeParams: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
  subjectHeadings: PropTypes.array.isRequired,
  subjectFields: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    subjects: state.subjects,
    managedSubject: state.managedSubject,
    subject: getSubjectByIndex(state.managedBook.subjects, ownProps.routeParams.index),
    subjectHeadings: SubjectHeadingsByType[ownProps.routeParams.resourceType],
    subjectFields: SubjectFields[ownProps.routeParams.resourceType]
  };
}
function getSubjectByIndex(subjects, index) {
  if (subjects && index && index !== 'new') {
    const subject = convertToSubject(subjects[index]);
    subject.update = true;
    return subject;
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export const ConnectedManagedSubjectPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagedSubjectPage);
