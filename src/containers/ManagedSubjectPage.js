import * as actions from '../actions/BookSubjectActions';

import { BookSubjectForm } from '../components/subjects/BookSubjectForm';
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
    }
    componentWillMount() {
        if (!this.props.managedSubject.active && this.props.subject) {
            this.props.actions.loadManagedSubjectSuccess(this.props.subject);
        }
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
    cancelSubject() {
        this.props.actions.cancelManagedSubject();
        this.goToPrevious();
    }
    goToPrevious() {
        browserHistory.goBack();
    }
    render() {
        return (<div className="page">
            <BookSubjectForm
                managedSubject={this.props.managedSubject}
                addSubjectToManagedBook={this.addSubjectToManagedBook}
                cancelManagedSubject={this.cancelManagedSubject}
                updateManagedSubject={this.updateManagedSubject}
                onChange={this.onChangeForm}
                subjects={this.props.subjects} />
        </div>);
    }
}

ManagedSubjectPage.propTypes = {
    actions: PropTypes.object.isRequired,
    subjects: PropTypes.array.isRequired,
    subject: PropTypes.object,
    managedSubject: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        subjects: state.subjects,
        managedSubject: state.managedSubject,
        subject: getSubjectByIndex(state.managedBook.subjects, ownProps.routeParams.index)
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
