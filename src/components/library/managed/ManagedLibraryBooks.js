import React from 'react';
import PropTypes from 'prop-types';
import * as bookActions from '../../../actions/BookActions';
import { connect } from 'react-redux';
import { LABEL_LIBRARY_BOOKS} from '../../../labels/';
import {DatabaseBooks} from './books/DatabaseBooks';
import {LibraryBooks} from './books/LibraryBooks';
import {Book} from '../../../api/books/';

import { bindActionCreators } from 'redux';

export class ManagedLibraryBooks extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {};
    this.thisOnAddBook = this.onAddBook.bind(this);
    this.thisOnRemoveBook = this.onRemoveBook.bind(this);
  }

  componentWillMount() {
    bookActions.loadBooks();
    this.state.libraryBooks = [];
  }

  onRemoveBook(book, index) {
    const libraryBooks = [...this.state.libraryBooks];
    libraryBooks.splice(index, 1);
    this.setState({libraryBooks});
  }

  onAddBook(book) {
    if (!this.state.libraryBooks.filter(curBook=>curBook[Book.BOOK_ID] === book[Book.BOOK_ID]).length) {
      const libraryBooks = [...this.state.libraryBooks, book];
      this.setState({libraryBooks});
    }
  }

  render() {
    return (<div className="container-fluid col-lg-12">
      <LibraryBooks books={this.state.libraryBooks} onRemove={this.thisOnRemoveBook}/>
      <DatabaseBooks bookActions={this.props.bookActions} onAdd={this.thisOnAddBook} books={this.props.books}/>
    </div>)
  }
}
function mapDispatchToProps(dispatch) {
  return {
    bookActions: bindActionCreators(bookActions, dispatch)
  };
}
function mapStateToProps(state) {
  return {
    books: state.books,
    ajax: state.ajaxGlobal
  };
}

export const ConnectedManagedLibraryBooks = connect(mapStateToProps, mapDispatchToProps)(ManagedLibraryBooks);
