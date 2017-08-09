import { FormGroup, Img } from '../../common/';
import {
  LABEL_AUTHOR,
  LABEL_BOOK_COVER,
  LABEL_BOOK_INFORMATION,
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

import { Book } from '../../../api/books/';
import PropTypes from 'prop-types';
import React from 'react';

export const BookSummary = ({ managedBook }) => {
  return (<div className="books-summary">
    <fieldset>
      <legend>{LABEL_BOOK_INFORMATION}</legend>
      <div className="col-sm-12">
        <div className="col-sm-2 books">
          <div className="book">
            <Img src={managedBook[Book.IMAGE_URL]} />
          </div>
        </div>
        <div className="col-sm-10">
          <FormGroup label={LABEL_TITLE}>
            <span>{managedBook[Book.TITLE]}</span>
          </FormGroup>
        </div>
      </div>
    </fieldset>
  </div>);
};

BookSummary.propTypes = {
  managedBook: PropTypes.object.isRequired
}
