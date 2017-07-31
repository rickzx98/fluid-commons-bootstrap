import * as actions from '../actions/GoogleBookAction';
import PropTypes from 'prop-types';
import React from 'react';
import {SearchList} from '../components/search/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {browserHistory} from 'react-router';

export class GoogleBooksPage extends React.Component {

  constructor(props) {
    super(props);
    this.onSearchFilterChange = this.onFormFilterChange.bind(this);
    this.onSearchFilterSubmit = this.onFormFilterSubmit.bind(this);
    this.createBook = this.createFormBook.bind(this);
  }

  onFormFilterChange(event) {
    this.props.actions.setGoogleFilterValue(event.target.name, event.target.value);
  }

  onFormFilterSubmit(event) {
    event.preventDefault();
    if (this.props.googleBooks.touched && this.props.googleBooks.active) {
      this.props.actions.searchBooks(this.props.googleBooks.query);
    }
  }

  createFormBook(bookId, book) {
    this.props.actions.createNewBookFromGoogle(bookId, book);
    browserHistory.push('/books/new?bookId=' + bookId);
  }

  render() {
    return (<div className="google-books page">
      <SearchList ajaxGlobal={this.props.ajaxGlobal}
                  createBook={this.createBook}
                  googleBooks={this.props.googleBooks}
                  onSearchFilterSubmit={this.onSearchFilterSubmit}
                  onSearchFilterChange={this.onSearchFilterChange}/></div>);
  }
}

GoogleBooksPage.propTypes = {
  actions: PropTypes.object.isRequired,
  googleBooks: PropTypes.object.isRequired,
  ajaxGlobal: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    ajaxGlobal: state.ajaxGlobal,
    googleBooks: state.googleBooks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export const ConnectedGoogleBooksPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleBooksPage);
