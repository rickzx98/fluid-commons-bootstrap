import * as actions from '../actions/BookSubjectActions';

import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

export class SubjectsPage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.actions.loadBooks();
    }
    render() {
        return (<div className="subjects">
        </div>);
    }
}

BooksPage.propTypes = {
    actions: PropTypes.object.isRequired,
    subjects: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        subjects: state.subjects
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
