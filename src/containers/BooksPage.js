import * as actions from '../actions/BookActions';

import { BookSearch, BookTable } from '../components/books/';
import { CancelModalFooter, DeleteModalBody, PageBody, PageHeader } from '../components/common';

import { Book } from '../api/books/';
import { LABEL_BOOKS } from '../labels';
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

export class BooksPage extends React.Component {
  constructor(props) {
    super(props);
    this.createBook = this.createNewBook.bind(this);
    this.onRemove = this.onRemoveBook.bind(this);
  }

  componentWillMount() {
    this.props.actions.loadBooks();
  }

  createNewBook() {
    browserHistory.push('books/new');
  }

  onRemoveBook(book) {
    return new Promise((resolve, reject) => {
      try {
        this.props.actions.openDialogConfirmBookCancel({
          body: <DeleteModalBody itemName={book[Book.TITLE]} />,
          footer: <CancelModalFooter
            reject={reject}
            resolve={resolve}
            confirmCancel={() => {
              this.props.actions.deleteBook(book[Book.BOOK_ID]);
              this.props.actions.closeDialog();
            }}
            closeDialog={this.props.actions.closeDialog} />
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  render() {
    return (<div className="books page">
      <PageHeader label={LABEL_BOOKS} iconName="book" />
      <PageBody>
        <BookSearch createBook={this.createBook} searchBooks={this.props.actions.searchBooks} />
        <BookTable onRemove={this.onRemove} books={this.props.books} />
      </PageBody>
    </div>);
  }
}

BooksPage.propTypes = {
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

export const ConnectBookPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksPage);
