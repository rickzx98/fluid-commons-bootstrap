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
    } else if (this.props.book) {
      this.props.actions.setBookPreview(this.props.book);
    }
  }
  render() {
    return (<BookPreviewBody
      ajaxGlobal={this.props.ajaxGlobal}
      bookPreview={this.props.bookPreview} />);
  }
}
function mapStateToProps(state) {
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
  bookLink: PropTypes.string,
  book: PropTypes.object,
  ajaxGlobal: PropTypes.object.isRequired,
  bookPreview: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

BookPreviewPage.defaultProps = {
  access: ['admin', 'librarian', 'student']
};
