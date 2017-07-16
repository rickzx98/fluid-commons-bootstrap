import Book from '../../api/books/Book';
import { ListItem } from 'material-ui/List';
import PropTypes from 'prop-types';
import React from 'react';
import { browserHistory } from 'react-router';

export const BookItem = ({ book }) => {
    return (<ListItem primaryText={book[Book.TITLE]}
        onTouchTap={() => browserHistory.push(`books/${book[Book.BOOK_ID]}`)}
        leftAvatar={<img height="65px" width="50px" src={book[Book.IMAGE_URL]} />}
        secondaryTextLines={2}
        secondaryText={
            <p className="book-item">
                <span className="book-subtitle">{book[Book.SUB_TITLE]}</span><br />
                <span className="book-author">{book[Book.AUTHOR]}</span>
            </p>} />);
};

BookItem.propTypes = {
    book: PropTypes.object.isRequired
};