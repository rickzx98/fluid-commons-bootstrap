import { LABEL_ADD_BOOK, LABEL_SEARCH_BOOKS } from '../../labels/';
import {ResponsiveButton}from '../common/';
import PropTypes from 'prop-types';
import React from 'react';
import FontAwesome from 'react-fontawesome';
export const BookSearch = ({ searchBooks, createBook }) => {
  return (<div className="book-search input-group">
    <div className="input-group-btn">
      <ResponsiveButton onClick={createBook} className="btn btn-success" label={LABEL_ADD_BOOK}
                        icon={<FontAwesome name="plus" size="lg" fixedWidth={true}/>}/>
    </div>
    <input type="text" className="form-control" placeholder={LABEL_SEARCH_BOOKS} onChange={event => {
            searchBooks(event.target.value);
        }}/>
  </div>);
};

BookSearch.propTypes = {
  searchBooks: PropTypes.func.isRequired,
  createBook: PropTypes.func.isRequired
};
