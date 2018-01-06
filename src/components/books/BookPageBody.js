import React from 'react';
import PropTypes from 'prop-types';
import  {BookNewestHeader} from './BookNewestHeader';
import  {BookSearch} from './BookSearch';
import {BookTable} from './BookTable';
import {  FontAwesome, PageBody, PageHeader } from '../common';
import { LABEL_BOOKS, LABEL_LIBRARY_BOOKS } from '../../labels';


export const BooksPageBody = ({createGoogleBook, ajaxGlobal,  dialogActions,
  googleBooks, searchInput, searchSubmit, createBook, searchBooks,
  onPreview, onRemove, books})=> {
  return (<div className="books page">
    <PageHeader loading={ajaxGlobal.started}
                spinIcon={false} label={LABEL_BOOKS} iconName="book"/>
    <PageBody>
        <span>
          <BookNewestHeader
            addBook={createGoogleBook}
            closeDialog={dialogActions.closeDialog}
            openDialog={dialogActions.openDialog}
            googleBooks={googleBooks}
            searchInput={searchInput}
            searchSubmit={searchSubmit}
            newest={googleBooks.newest}/>
          <h3 className="books-legend"><FontAwesome name="database"/>&nbsp;{LABEL_LIBRARY_BOOKS}</h3>
          <BookSearch createBook={createBook} searchBooks={searchBooks}/>
          <BookTable
            onPreview={onPreview}
            onRemove={onRemove}
            books={books}/>
        </span>
    </PageBody>
  </div>);
};


BooksPageBody.propTypes = {
  createGoogleBook: PropTypes.func.isRequired,
  ajaxGlobal:  PropTypes.object.isRequired,
  dialogActions: PropTypes.object.isRequired,
  googleBooks: PropTypes.object.isRequired,
  searchInput: PropTypes.func.isRequired,
  searchSubmit: PropTypes.func.isRequired,
  createBook: PropTypes.func.isRequired,
  searchBooks: PropTypes.func.isRequired,
  onPreview: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
};
