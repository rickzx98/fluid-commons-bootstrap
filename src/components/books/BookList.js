import { LABEL_ADD_BOOK, LABEL_SEARCH_BOOKS } from '../../labels/'
import { blue700, lightBlueA700 } from 'material-ui/styles/colors'

import Book from '../../api/books/Book';
import { BookItem } from './BookItem';
import FlatButton from 'material-ui/FlatButton';
import { List } from 'material-ui/List';
import PropTypes from 'prop-types';
import React from 'react';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';

const listStyle = {
    width: '90%'
};
export const BookList = ({ books, searchBooks }) => {
    const booksElement = [];
    books.forEach(book => {
        booksElement.push(<BookItem key={book[Book.BOOK_ID]} book={book} />);
    });
    return (<List style={listStyle}>
        <Subheader>
            <TextField style={{ width: '80%' }} onChange={(event, text) => {
                searchBooks(text);
            }} hintText={LABEL_SEARCH_BOOKS} />
            <FlatButton hoverColor={lightBlueA700} label={LABEL_ADD_BOOK} backgroundColor={blue700} />
        </Subheader>
        {booksElement}
    </List>);
};
BookList.propTypes = {
    searchBooks: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
};