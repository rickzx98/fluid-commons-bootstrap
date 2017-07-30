import {Book} from '../../api/books/Book';
import { BookRow } from './BookRow';
import PropTypes from 'prop-types';
import React from 'react';

export const BookTable = ({ books, onRemove }) => {
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
    {books.map(book => <BookRow onRemove={onRemove} key={book[Book.BOOK_ID]} book={book}/>)}
    </tbody>
  </table>);
};
BookTable.propTypes = {
  books: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired
};
