import * as actions from '../actions/BookActions';

import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class ManageBookPage extends React.Component {
    render() {
        return (<div className="page" />);
    }
}

ManageBookPage.propTypes = {
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

export const ConnectedManageBookPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(ManageBookPage);
