import { LABEL_ADD_BOOK, LABEL_SEARCH_BOOKS } from '../../labels/'

import PropTypes from 'prop-types';
import React from 'react';

export const BookSearch = ({ searchBooks }) => {
    return (<div className="book-search input-group">
        <div className="input-group-btn">
            <button type="button" className="btn btn-primary">{LABEL_ADD_BOOK}</button>
        </div>
        <input type="text" className="form-control" ariaLabel={LABEL_SEARCH_BOOKS} placeholder={LABEL_SEARCH_BOOKS} onChange={event => {
            searchBooks(event.target.value);
        }} />
    </div>);
}

BookSearch.propTypes = {
    searchBooks: PropTypes.func.isRequired
};