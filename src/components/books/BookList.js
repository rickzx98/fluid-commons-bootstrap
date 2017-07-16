import React, { PropTypes } from 'react';

import Book from '../../api/books/Book';
import { BookItem } from './BookItem';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { LABEL_SEARCH_BOOKS } from '../../labels/';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';

export const BookList = ({ books }) => {
    const booksElement = [];
    books.forEach(book => {
        booksElement.push(<BookItem key={book[Book.BOOK_ID]} book={book} />);
    });
    return (<List>
        <Subheader>
            <TextField hintText={LABEL_SEARCH_BOOKS} />
            <FloatingActionButton secondary={true}>
                <ContentAdd />
            </FloatingActionButton>
        </Subheader>
        {booksElement}
    </List>);
};
BookList.propTypes = {
    books: PropTypes.array.isRequired
};