import Book from '../../api/books/Book';
import PropTypes from 'prop-types';
import React from 'react';
import { browserHistory } from 'react-router';

export const BookRow = ({ book }) => {
    return (<tr className="book-item">
        <td>
            <div className="book">
                <img className="book-image" src={book[Book.IMAGE_URL]} />
            </div>
        </td>
        <td>
            <span className="book-title">{book[Book.TITLE]}</span> <br />
            {book[Book.SUB_TITLE]}
        </td>
        <td>
            {book[Book.EDITION]}
        </td>
        <td>
            {book[Book.AUTHOR]}
        </td>
        <td>
            {book[Book.PUBLISHER]}
        </td>
    </tr>);
};

BookRow.propTypes = {
    book: PropTypes.object.isRequired
};

//  onTouchTap={() => browserHistory.push(`books/${book[Book.BOOK_ID]}`)}