import * as actions from '../actions/GoogleBookActions';

import { BookPreviewBody } from '../components/books';
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class BookPreviewPage extends React.Component {
    componentWillMount() {
        if (this.props.bookLink) {
            this.props.actions.getBooksVolumeInfo(this.props.bookLink);
        }
    }
    render() {
        return <BookPreviewBody
            ajaxGlobal={this.props.ajaxGlobal}
            bookPreview={this.props.bookPreview} />
    }
}
function mapStateToProps(state, ownProps) {
    return {
        ajaxGlobal: state.ajaxGlobal,
        bookPreview: state.bookPreview
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export const ConnectedBookPreviewPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(BookPreviewPage);


BookPreviewPage.propTypes = {
    bookLink: PropTypes.string.isRequired
}