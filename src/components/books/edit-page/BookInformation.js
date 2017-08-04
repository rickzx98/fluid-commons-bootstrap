import { ImageUpload, SearchSelector, TextInput } from '../../common/';
import {
  LABEL_AUTHOR,
  LABEL_BOOK_COVER,
  LABEL_EDITION,
  LABEL_ISBN_10,
  LABEL_ISBN_13,
  LABEL_NUMBER_OF_PAGES,
  LABEL_PUBLISHED_DATE,
  LABEL_PUBLISHER,
  LABEL_SERIES_TITLE,
  LABEL_SUB_TITLE,
  LABEL_TITLE,
  MESSAGE_AUTHOR_REQUIRED,
  MESSAGE_ISBN_REQUIRED,
  MESSAGE_PUBLISHED_DATE_REQUIRED,
  MESSAGE_PUBLISHER_REQUIRED,
  MESSAGE_TITLE_REQUIRED
} from '../../../labels/';

import { Book } from '../../../api/books/Book';
import PropTypes from 'prop-types';
import React from 'react';

export const BookInformation = ({ onChange, managedBook }) => {
  return (<span>
    <div className="col-sm-12 col-md-3">
      <ImageUpload value={managedBook[Book.IMAGE_URL]} name={Book.IMAGE_URL} label={LABEL_BOOK_COVER} />
    </div>
    <div className={managedBook.update ? 'col-sm-5 col-md-9' : 'col-sm-12 col-md-9'}>
      <TextInput invalid={managedBook.invalidField === Book.TITLE} label={LABEL_TITLE} name={Book.TITLE}
        required={true} message={MESSAGE_TITLE_REQUIRED}
        value={managedBook[Book.TITLE]} />

      <TextInput invalid={managedBook.invalidField === Book.ISBN13}
        message={MESSAGE_ISBN_REQUIRED}
        label={LABEL_ISBN_13} name={Book.ISBN13}
        required={true}
        value={managedBook[Book.ISBN13]} />

      <TextInput invalid={managedBook.invalidField === Book.ISBN10}
        message={MESSAGE_ISBN_REQUIRED}
        label={LABEL_ISBN_10} name={Book.ISBN10}
        required={true}
        value={managedBook[Book.ISBN10]} />

      <TextInput invalid={managedBook.invalidField === Book.PUBLISHER}
        message={MESSAGE_PUBLISHER_REQUIRED}
        label={LABEL_PUBLISHER} name={Book.PUBLISHER}
        required={true}
        value={managedBook[Book.PUBLISHER]} />

      <SearchSelector required={true}
        invalid={managedBook.invalidField === Book.AUTHOR}
        message={MESSAGE_AUTHOR_REQUIRED}
        value={managedBook[Book.AUTHOR]}
        multiple={true} options={[]} label={LABEL_AUTHOR}
        name={Book.AUTHOR}
        labelKey="label"
        onChange={(name, value) => {
          onChange({
            name,
            value
          });
        }} />

      <TextInput
        invalid={managedBook.invalidField === Book.PUBLISHED_DATE}
        message={MESSAGE_PUBLISHED_DATE_REQUIRED}
        label={LABEL_PUBLISHED_DATE}
        name={Book.PUBLISHED_DATE}
        required={true}
        value={managedBook[Book.PUBLISHED_DATE]} />
    </div>
    {managedBook.update &&
      <div className="col-sm-5 col-md-12">
        <TextInput label={LABEL_SUB_TITLE} name={Book.SUB_TITLE}
          value={managedBook[Book.SUB_TITLE]} />
        <TextInput label={LABEL_SERIES_TITLE} name={Book.SERIES_TITLE}
          value={managedBook[Book.SERIES_TITLE]} />
        <TextInput type="number" label={LABEL_NUMBER_OF_PAGES} name={Book.NUMBER_OF_PAGES}
          value={managedBook[Book.NUMBER_OF_PAGES]} />
        <TextInput label={LABEL_EDITION} name={Book.EDITION}
          value={managedBook[Book.EDITION]} />
      </div>}
  </span>);
};

BookInformation.propTypes = {
  onChange: PropTypes.func.isRequired,
  managedBook: PropTypes.object.isRequired
};
