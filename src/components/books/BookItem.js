import Avatar from 'material-ui/Avatar';
import Book from '../../api/books/Book';
import { ListItem } from 'material-ui/List';
import PropTypes from 'prop-types';
import React from 'react';

export const BookItem = ({ book }) => {
    return (<ListItem primaryText={book[Book.TITLE]}
        leftAvatar={<img height="65px" width="50px" src={book[Book.IMAGE_URL]} />}
        secondaryTextLines={2}
        secondaryText={
            <div>
                <div>{book[Book.SUB_TITLE]}</div>
                <div>{book[Book.AUTHOR]}</div>
            </div>} />);
};

BookItem.propTypes = {
    book: PropTypes.object.isRequired
};