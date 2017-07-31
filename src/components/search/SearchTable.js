import PropTypes from 'prop-types';
import React from 'react';
import {LABEL_TITLE, LABEL_AUTHOR, LABEL_PUBLISHER, LABEL_PUBLISHED_DATE} from '../../labels';
import {SearchRow} from './SearchRow';
export const SearchTable = ({googleBooks, createBook }) => {
  return (<table className="books table table-hover">
    <thead>
    <tr>
      <th title="preview"/>
      <th className="hidden-xs" title={LABEL_TITLE}>{LABEL_TITLE}</th>
      <th className="hidden-xs" title={LABEL_AUTHOR}>{LABEL_AUTHOR}</th>
      <th className="hidden-xs" title={LABEL_PUBLISHER}>{LABEL_PUBLISHER}</th>
      <th className="hidden-xs" title={LABEL_PUBLISHED_DATE}>{LABEL_PUBLISHED_DATE}</th>
      <th title="Action"/>
    </tr>
    </thead>
    <tbody>
    {googleBooks.result && googleBooks.result.items && googleBooks.result.items.map(item =>
      (<SearchRow key={item.id} id={item.id}
                  volumeInfo={item.volumeInfo}
                  createBook={createBook}
      />))}
    </tbody>
  </table>);
};
SearchTable.propTypes = {
  googleBooks: PropTypes.object.isRequired,
  createBook: PropTypes.func.isRequired
};
