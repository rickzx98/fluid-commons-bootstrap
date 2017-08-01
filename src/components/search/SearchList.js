import PropTypes from 'prop-types';
import React from 'react';
import { SearchFilter } from './SearchFilter';
import { SearchTable } from './SearchTable';

export const SearchList = ({ onSearchFilterChange, onSearchFilterSubmit, googleBooks, createBook, ajaxGlobal, preview }) => {
  return (<div className="search-list">
    <SearchFilter ajaxGlobal={ajaxGlobal}
      googleBooks={googleBooks} onSearchFilterSubmit={onSearchFilterSubmit}
      onSearchFilterChange={onSearchFilterChange} />
    <SearchTable preview={preview} googleBooks={googleBooks} createBook={createBook} />
  </div>);
};

SearchList.propTypes = {
  googleBooks: PropTypes.object.isRequired,
  onSearchFilterChange: PropTypes.func.isRequired,
  onSearchFilterSubmit: PropTypes.func.isRequired,
  createBook: PropTypes.func.isRequired,
  ajaxGlobal: PropTypes.object.isRequired,
  preview: PropTypes.func.isRequired
};
