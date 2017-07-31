import React from 'react';
import PropTypes from 'prop-types';
import {SearchFilter} from './SearchFilter';
import {SearchTable} from './SearchTable';
export const SearchList = ({onSearchFilterChange, onSearchFilterSubmit, googleBooks, createBook})=> {
  return (<div className="search-list">
    <SearchFilter googleBooks={googleBooks} onSearchFilterSubmit={onSearchFilterSubmit}
                  onSearchFilterChange={onSearchFilterChange}/>
    <SearchTable googleBooks={googleBooks} createBook={createBook}/>
  </div>);
};

SearchList.propTypes = {
  googleBooks: PropTypes.object.isRequired,
  onSearchFilterChange: PropTypes.func.isRequired,
  onSearchFilterSubmit: PropTypes.func.isRequired,
  createBook: PropTypes.func.isRequired
};
