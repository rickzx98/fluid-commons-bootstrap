import {Book} from '../../api/books/Book';
import { BookRow } from './BookRow';
import PropTypes from 'prop-types';
import React from 'react';

export const BookTable = ({ books }) => {
  const booksElement = [];
  books.forEach(book => {
    booksElement.push(<BookRow key={book[Book.BOOK_ID]} book={book}/>);
  });
  return (<table className="table table-hover">
    <thead>
    <tr>
      <th title="preview"/>
      <th className="hidden-xs" title="Title">Title</th>
      <th className="hidden-xs" title="Editon">Editon</th>
      <th className="hidden-xs" title="Author">Author</th>
      <th className="hidden-xs" title="Publisher">Publisher</th>
      <th title="Action"/>
    </tr>
    </thead>
    <tbody>
    {booksElement}
    </tbody>
  </table>);
};
BookTable.propTypes = {

  books: PropTypes.array.isRequired
};

/*
 <Subheader>
 <FlatButton style={{ color: 'white' }} hoverColor={lightBlueA700} label={LABEL_ADD_BOOK} backgroundColor={blue700} />
 <TextField style={{ width: '90%', marginLeft: '5px' }} onChange={(event, text) => {
 searchBooks(text);
 }} hintText={LABEL_SEARCH_BOOKS} />
 </Subheader>
 {booksElement}
 */
