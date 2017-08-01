import { LABEL_AUTHOR, LABEL_PUBLISHED_DATE, LABEL_PUBLISHER, LABEL_TITLE } from '../../labels';

import PropTypes from 'prop-types';
import React from 'react';
import { SearchRow } from './SearchRow';

export const SearchTable = ({ googleBooks, createBook, preview }) => {
  return (<table className="books table table-hover">
    <thead>
      <tr>
        <th title="preview" />
        <th className="hidden-xs" title={LABEL_TITLE}>{LABEL_TITLE}</th>
        <th className="hidden-xs" title={LABEL_AUTHOR}>{LABEL_AUTHOR}</th>
        <th className="hidden-xs" title={LABEL_PUBLISHER}>{LABEL_PUBLISHER}</th>
        <th className="hidden-xs" title={LABEL_PUBLISHED_DATE}>{LABEL_PUBLISHED_DATE}</th>
        <th title="Action" />
      </tr>
    </thead>
    <tbody>
      {googleBooks.result && googleBooks.result.items && googleBooks.result.items.map(item =>
        (<SearchRow key={item.id} id={item.id}
          volumeInfo={item.volumeInfo}
          createBook={createBook}
          preview={preview}
          selfLink={item.selfLink}
        />))}
    </tbody>
  </table>);
};
SearchTable.propTypes = {
  googleBooks: PropTypes.object.isRequired,
  createBook: PropTypes.func.isRequired,
  preview: PropTypes.func.isRequired
};
