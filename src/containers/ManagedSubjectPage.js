import * as actions from '../actions/BookSubjectActions';

import { BookSubjectForm } from '../components/subjects/BookSubjectForm';
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

export class ManagedSubjectPage extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeForm = this.onChange.bind(this);
        this.goToPreviousPage = this.goToPrevious.bind(this);
        this.addSubjectToManagedBook = this.addSubject.bind(this);
    }
    onChange(field, value) {
        this.props.actions.setManagedSubjectFieldValue(field, value);
    }
    addSubject(subject) {
        this.props.actions.addSubjectToManagedBook(subject);
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
                onChange={this.onChangeForm}
                goToPrevious={this.goToPreviousPage}
                subjects={this.props.subjects} />
        </div>);
    }
}

ManagedSubjectPage.propTypes = {
    actions: PropTypes.object.isRequired,
    subjects: PropTypes.array.isRequired,
    managedSubject: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        subjects: state.subjects,
        managedSubject: state.managedSubject
    };
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
