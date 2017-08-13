import { LABEL_AUTHOR, LABEL_EDITION, LABEL_PUBLISHER, LABEL_TITLE } from '../../labels';

import { Book } from '../../api/books/Book';
import { BookRow } from './BookRow';
import PropTypes from 'prop-types';
import React from 'react';

export const BookTable = ({ books, onRemove, onPreview }) => {
  return (<table className="table table-hover">
    <thead>
      <tr>
        <th title="preview" />
        <th className="hidden-xs" title={LABEL_TITLE}>{LABEL_TITLE}</th>
        <th className="hidden-xs" title={LABEL_EDITION}>{LABEL_EDITION}</th>
        <th className="hidden-xs" title={LABEL_AUTHOR}>{LABEL_AUTHOR}</th>
        <th className="hidden-xs" title={LABEL_PUBLISHER}>{LABEL_PUBLISHER}</th>
        <th title="Action" />
      </tr>
    </thead>
    <tbody>
      {books.map(book => (<BookRow
        onPreview={onPreview}
        onRemove={onRemove}
        key={book[Book.BOOK_ID]}
        book={book} />))}
    </tbody>
  </table>);
};
BookTable.propTypes = {
  books: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
  onPreview: PropTypes.func.isRequired
};
