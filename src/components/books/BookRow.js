import {
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

import Book from '../../api/books/Book';
import PropTypes from 'prop-types';
import React from 'react';
import { browserHistory } from 'react-router';

export const BookRow = ({ book }) => {
    return (<TableRow className="book-item">
        <TableRowColumn>
            <div className="book">
                <img className="book-image" src={book[Book.IMAGE_URL]} />
            </div>
        </TableRowColumn>
        <TableRowColumn>
            <span className="book-title">{book[Book.TITLE]}</span> <br />
            {book[Book.SUB_TITLE]}
        </TableRowColumn>
        <TableRowColumn>
            {book[Book.EDITION]}
        </TableRowColumn>
        <TableRowColumn>
            {book[Book.AUTHOR]}
        </TableRowColumn>
        <TableRowColumn>
            {book[Book.PUBLISHER]}
        </TableRowColumn>
    </TableRow>);
};

BookRow.propTypes = {
    book: PropTypes.object.isRequired
};

//  onTouchTap={() => browserHistory.push(`books/${book[Book.BOOK_ID]}`)}