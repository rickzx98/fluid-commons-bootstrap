import * as actions from '../actions/BookActions';

import { BookPageHeader, BookSearch, BookTable } from '../components/books/';

import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

export class BooksPage extends React.Component {
    constructor(props) {
        super(props);
        this.createBook = this.createNewBook.bind(this);
    }
    componentDidMount() {
        this.props.actions.loadBooks();
    }
    createNewBook() {
        browserHistory.push('books/new');
    }
    render() {
        return (<div className="books page">
            <BookPageHeader />
            <BookSearch createBook={this.createBook} searchBooks={this.props.actions.searchBooks} />
            <BookTable books={this.props.books} />
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
