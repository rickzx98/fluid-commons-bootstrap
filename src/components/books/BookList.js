import React, { PropTypes } from 'react';

import Book from '../../api/books/Book';
import { BookItem } from './BookItem';
import { List } from 'material-ui/List';

export const BookList = ({ books }) => {
    const booksElement = [];
    books.forEach(book => {
        booksElement.push(<BookItem key={book[Book.BOOK_ID]} book={book} />);
    });
    return (<List>
        {booksElement}
    </List>);
};
BookList.propTypes = {
    books: PropTypes.array.isRequired
};