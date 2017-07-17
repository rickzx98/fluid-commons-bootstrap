import Book from '../../api/books/Book';
import { ListItem } from 'material-ui/List';
import PropTypes from 'prop-types';
import React from 'react';
import { browserHistory } from 'react-router';

export const BookItem = ({ book }) => {
    return (<ListItem

        leftAvatar={<div className="book">
            <img className="book-image" src={book[Book.IMAGE_URL]} />
        </div>}
        primaryText={book[Book.TITLE]}
        secondaryTextLines={4}
        secondaryText={
            <p className="book-item">
                {book[Book.SUB_TITLE]}<br />
                {book[Book.AUTHOR]}<br />
                {book[Book.PUBLISHER]}<br />
            </p>
        }
    />);
};

BookItem.propTypes = {
    book: PropTypes.object.isRequired
};

//  onTouchTap={() => browserHistory.push(`books/${book[Book.BOOK_ID]}`)}