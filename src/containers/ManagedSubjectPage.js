import * as actions from '../actions/BookSubjectActions';

import { BookSubjectForm } from '../components/subjects/BookSubjectForm';
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class ManagedSubjectPage extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeForm = this.onChange.bind(this);
    }
    onChange(field, value) {
        this.props.actions.setManagedSubjectFieldValue(field, value);
    }
    render() {
        return (<div className="page">
            <BookSubjectForm
                managedSubject={this.props.managedSubject}
                onChange={this.onChangeForm}
                subjects={this.props.subjects} />
        </div>);
    }
}

ManagedSubjectPage.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
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
