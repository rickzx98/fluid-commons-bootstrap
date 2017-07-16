import * as actions from '../actions/BookActions';

import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class BookViewPage extends React.Component {
    render() {
        console.log('BookViewPage', this);
        return (<div className="page" />);
    }
}

BookViewPage.propTypes = {
    actions: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export const ConnectBookViewPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(BookViewPage);
