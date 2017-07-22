import * as actions from '../actions/BookActions';

import Modal from 'reac-bootstrap/lib/Modal';
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class AppModalPage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }
    render() {
        return (<div className="app-modal page">
        </div>);
    }
}

BooksPage.propTypes = {
    actions: PropTypes.object.isRequired,
    dialog: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        dialog: state.dialog
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export const ConnectAppModelPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppModalPage);
