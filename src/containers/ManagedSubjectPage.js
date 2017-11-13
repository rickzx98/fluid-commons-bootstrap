import '../images/subject-header.jpg';

import * as actions from '../actions/BookSubjectActions';

import { CancelSubjectModalBody, ManagedSubjectIndex } from '../components/subjects/';
import {
  LABEL_CONFIRM_CANCEL_SUBJECT_TITLE,
  LABEL_CONFIRM_PAGE_LEAVE_UNSAVED_CHANGES
} from '../labels/';
import { Subject, SubjectFields, SubjectHeadingsByType } from '../api/subjects/';

import { CancelModalFooter } from '../components/common/';
import { ItemType } from '../api/item/';
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { marcToSubject } from '../utils/';

export class ManagedSubjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeForm = this.onChange.bind(this);
    this.cancelManagedSubject = this.cancelSubject.bind(this);
    this.onPageLeave = this.routerWillLeave.bind(this);
    this.modalConfirmCancel = this.confirmCancel.bind(this);
    this.onSubmit = this.onFormSubmit.bind(this);
  }

  componentWillMount() {
    if (!this.props.managedSubject.active && this.props.subject) {
      this.props.actions.loadManagedSubjectSuccess(Object.assign({}, {
        ...this.props.subject
      }));
    } else {
      this.props.actions.setManagedSubjectState({
        resourceType: this.props.resourceType
      });
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
    } else {
      this.props.actions.cancelManagedSubject();
    }
  }

  onFormSubmit(event) {
    event.preventDefault();
    if (this.props.managedSubject.update) {
      this.updateSubject(this.props.managedSubject[Subject.SUBJECT_FORMAT]);
    } else {
      this.addSubject(this.props.managedSubject[Subject.SUBJECT_FORMAT]);
    }
  }

  render() {
    return (<ManagedSubjectIndex
      onSubmit={this.onSubmit}
      cancelManagedSubject={this.cancelManagedSubject}
      subjects={this.props.subjects}
      onChange={this.onChangeForm}
      managedSubject={this.props.managedSubject}
      subjectFields={this.props.subjectFields}
      subjectHeadings={this.props.subjectHeadings} />);
  }
}

function mapStateToProps(state, ownProps) {
  const resourceType = getResourceType(ownProps);
  return {
    subjects: state.subjects,
    managedSubject: state.managedSubject,
    subject: getSubjectByIndex(state.managedBook.subjects, ownProps.routeParams.index, resourceType),
    subjectHeadings: SubjectHeadingsByType[resourceType],
    subjectFields: SubjectFields[resourceType],
    resourceType
  };
}

function getResourceType(ownProps) {
  if (ownProps.routeParams.resourceType) {
    switch (ownProps.routeParams.resourceType) {
      case 'books':
        return ItemType.BOOK;
      case 'videos':
        return ItemType.VIDEO;
      case 'kits':
        return ItemType.KIT;
      case 'sounds':
        return ItemType.SOUND;
    }
  }
}

function getSubjectByIndex(subjects, index, resourceType) {
  if (subjects && index && index !== 'new') {
    const subject = marcToSubject(subjects[index], resourceType);
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



ManagedSubjectPage.propTypes = {
  actions: PropTypes.object.isRequired,
  subjects: PropTypes.array.isRequired,
  subject: PropTypes.object,
  managedSubject: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
  routeParams: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
  subjectHeadings: PropTypes.array.isRequired,
  subjectFields: PropTypes.object.isRequired,
  resourceType: PropTypes.string.isRequired
};

ManagedSubjectPage.defaultProps = {
  access: ['admin', 'librarian']
};
