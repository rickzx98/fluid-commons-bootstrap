import PropTypes from 'prop-types';
import React from 'react';

export const BookItemView = ({ book }) => {
    console.log('BookItemView', book);
    return (<div></div>);
}

BookItemView.propTypes = {
    book: PropTypes.object.isRequired
};