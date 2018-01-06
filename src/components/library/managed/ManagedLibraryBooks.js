import React from 'react';
import PropTypes from 'prop-types';
import * as bookActions from '../../../actions/BookActions';
import { connect } from 'react-redux';
import {LABEL_BOOKS, LABEL_LIBRARY_BOOKS} from '../../../labels/';

export class ManagedLibraryBooks extends React.Component {
  componentWillMount() {
    bookActions.loadBooks();
  }

  render() {
    return (<div className="container-fluid col-lg-12">
      <div className="col-lg-6">
        <fieldset>
          <legend>{LABEL_LIBRARY_BOOKS}</legend>
        </fieldset>
      </div>
      <div className="col-lg-6">
        <fieldset>
          <legend>{LABEL_BOOKS}</legend>
        </fieldset>
      </div>
    </div>)
  }
}

function mapStateToProps(state) {
  return {
    books: state.books,
    ajax: state.ajaxGlobal
  };
}

export const ConnectedManagedLibraryBooks = connect(mapStateToProps)(ManagedLibraryBooks);
