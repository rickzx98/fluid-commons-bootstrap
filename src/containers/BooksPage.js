import * as actions from '../actions/BookActions';
import * as alertActions from '../actions/NotificationActions';
import * as dialogActions from '../actions/DialogActions';
import * as googleActions from '../actions/GoogleBookActions';

import { BookNewestHeader, BookSearch, BookTable } from '../components/books/';
import { CancelModalFooter, DeleteModalBody, FontAwesome, PageBody, PageHeader } from '../components/common';
import { LABEL_BOOKS, LABEL_LIBRARY_BOOKS } from '../labels';

import { Book } from '../api/books/';
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
    this.searchSubmit = this.onSearchSubmit.bind(this);
    this.searchInput = this.onSearchInput.bind(this);
    this.createGoogleBook = this.createBookFromGoogle.bind(this);
  }

  componentWillMount() {
    this.props.actions.loadBooks();
    this.props.googleActions.getNewestBookCarousel();
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

  onSearchSubmit(event) {
    event.preventDefault();
    this.props.googleActions.searchSubmit();
  }

  onSearchInput(event) {
    this.props.googleActions.searchInput(event.target.value);
  }

  createBookFromGoogle(bookId, selfLink) {
    this.props.googleActions.createNewBookFromGoogle(bookId, selfLink)
      .then(() => {
        browserHistory.push('/books/new?bookId=' + bookId);
        this.props.dialogActions.closeDialog();
      })
      .catch(err => {
        this.props.alertActions.alertDanger(err.message);
      });
  }


  render() {
    return (<div className="books page">
      <PageHeader loading={this.props.ajaxGlobal.started}
        spinIcon={false} label={LABEL_BOOKS} iconName="book" />
      <PageBody>
        <span>
          <BookNewestHeader
            addBook={this.createGoogleBook}
            closeDialog={this.props.dialogActions.closeDialog}
            openDialog={this.props.dialogActions.openDialog}
            googleBooks={this.props.googleBooks}
            searchInput={this.searchInput}
            searchSubmit={this.searchSubmit}
            newest={this.props.googleBooks.newest} />
          <h3 className="books-legend"><FontAwesome name="database" />&nbsp;{LABEL_LIBRARY_BOOKS}</h3>
          <BookSearch createBook={this.createBook} searchBooks={this.props.actions.searchBooks} />
          <BookTable onRemove={this.onRemove} books={this.props.books} />
        </span>
      </PageBody>
    </div>);
  }
}

BooksPage.propTypes = {
  actions: PropTypes.object.isRequired,
  googleActions: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  ajaxGlobal: PropTypes.object.isRequired,
  googleBooks: PropTypes.object.isRequired,
  dialogActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    ajaxGlobal: state.ajaxGlobal,
    books: state.books,
    googleBooks: state.googleBooks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    googleActions: bindActionCreators(googleActions, dispatch),
    dialogActions: bindActionCreators(dialogActions, dispatch),
    alertActions: bindActionCreators(alertActions, dispatch)
  };
}

export const ConnectBookPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksPage);
