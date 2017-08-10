import { FormGroup, Img } from '../../common/';
import {
  LABEL_AUTHOR,
  LABEL_BARCODE,
  LABEL_BOOK_ADDITIONAL_INFO,
  LABEL_BOOK_COPIES,
  LABEL_BOOK_INFORMATION,
  LABEL_CALL_NUMBER,
  LABEL_COST,
  LABEL_CURRENCY,
  LABEL_DATE_OF_PURCHASED,
  LABEL_EDITION,
  LABEL_FUND,
  LABEL_GENERAL_NOTE,
  LABEL_INTERNET_RESOURCE,
  LABEL_ISBN_10,
  LABEL_ISBN_13,
  LABEL_LOCATION,
  LABEL_NA,
  LABEL_NUMBER_OF_PAGES,
  LABEL_PUBLISHED_DATE,
  LABEL_PUBLISHER,
  LABEL_READING_LEVEL,
  LABEL_RESOURCE_TYPE,
  LABEL_SERIES_TITLE,
  LABEL_STUDY_PROGRAM,
  LABEL_SUBJECTS,
  LABEL_SUB_TITLE,
  LABEL_SUMMARY,
  LABEL_TITLE,
  LABEL_TITLE_POINTS,
  LABEL_VENDOR
} from '../../../labels/';
import { currenciesForLabel, fundsForLabel, resourceTypesForLabel } from '../../../selectors/settingsSelectors';
import { formatDateMedium, toReadableSubject } from '../../../utils/';

import { Book } from '../../../api/books/';
import { ItemType } from '../../../api/item/';
import PropTypes from 'prop-types';
import React from 'react';
import { getReadingLevelLabel } from '../../../selectors/bookSelectors';

export const BookSummary = ({ managedBook, settings }) => {
  return (<div className="books-summary">
    <fieldset>
      <legend>{LABEL_BOOK_INFORMATION}</legend>
      <div className="col-sm-12 books">
        <div className="book">
          <Img src={managedBook[Book.IMAGE_URL]} />
        </div>
      </div>
      <div className="col-sm-12">
        <div className="col-sm-6">
          <FormGroup label={LABEL_TITLE}>
            <span>{managedBook[Book.TITLE] || LABEL_NA}</span>
          </FormGroup>
          <FormGroup label={LABEL_ISBN_13}>
            <span>{managedBook[Book.ISBN13] || LABEL_NA}</span>
          </FormGroup>
          <FormGroup label={LABEL_ISBN_10}>
            <span>{managedBook[Book.ISBN10] || LABEL_NA}</span>
          </FormGroup>
          <FormGroup label={LABEL_PUBLISHER}>
            <span>{managedBook[Book.PUBLISHER] || LABEL_NA}</span>
          </FormGroup>
          <FormGroup label={LABEL_AUTHOR}>
            <span>{managedBook[Book.AUTHOR] || LABEL_NA}</span>
          </FormGroup>
        </div>
        <div className="col-sm-6">
          <FormGroup label={LABEL_PUBLISHED_DATE}>
            <span>{managedBook[Book.PUBLISHED_DATE] || LABEL_NA}</span>
          </FormGroup>
          <FormGroup label={LABEL_SUB_TITLE}>
            <span>{managedBook[Book.SUB_TITLE] || LABEL_NA}</span>
          </FormGroup>
          <FormGroup label={LABEL_SERIES_TITLE}>
            <span>{managedBook[Book.SERIES_TITLE] || LABEL_NA}</span>
          </FormGroup>
          <FormGroup label={LABEL_NUMBER_OF_PAGES}>
            <span>{managedBook[Book.NUMBER_OF_PAGES] || LABEL_NA}</span>
          </FormGroup>
          <FormGroup label={LABEL_EDITION}>
            <span>{managedBook[Book.EDITION] || LABEL_NA}</span>
          </FormGroup>
        </div>
      </div>
    </fieldset>
    <fieldset>
      <legend>{LABEL_SUBJECTS}</legend>
      <ul>
        {managedBook[Book.SUBJECTS] && managedBook[Book.SUBJECTS].map((subject, index) => (
          <li key={index + '_' + subject}>{toReadableSubject(subject)}</li>
        ))}
      </ul>
    </fieldset>
    {managedBook.update &&
      <fieldset>
        <legend>{LABEL_BOOK_ADDITIONAL_INFO}</legend>
        <div className="col-sm-6">
          <FormGroup label={LABEL_SUMMARY}>
            <p>{managedBook[Book.SUMMARY] || LABEL_NA}</p>
          </FormGroup>
          <FormGroup label={LABEL_STUDY_PROGRAM}>
            <span>{managedBook[Book.STUDY_PROGRAM] || LABEL_NA}</span>
          </FormGroup>
          <FormGroup label={LABEL_TITLE_POINTS}>
            <span>{managedBook[Book.TITLE_POINTS] || LABEL_NA}</span>
          </FormGroup>
          <FormGroup label={LABEL_INTERNET_RESOURCE}>
            <span>{managedBook[Book.INTERNET_RESOURCE] || LABEL_NA}</span>
          </FormGroup>
        </div>
        <div className="col-sm-6">
          <FormGroup label={LABEL_GENERAL_NOTE}>
            <p>{managedBook[Book.GENERAL_NOTE] || LABEL_NA}</p>
          </FormGroup>
          <FormGroup label={LABEL_READING_LEVEL}>
            <span>{(managedBook[Book.READING_LEVEL] && getReadingLevelLabel(managedBook[Book.READING_LEVEL])) || LABEL_NA}</span>
          </FormGroup>
          <FormGroup label={LABEL_RESOURCE_TYPE}>
            <span>{managedBook[Book.RESOURCE_TYPE] && resourceTypesForLabel(settings, ItemType.BOOK, managedBook[Book.RESOURCE_TYPE]) || LABEL_NA}</span>
          </FormGroup>
        </div>
      </fieldset>}
    {managedBook.update && <fieldset>
      <legend>{LABEL_BOOK_COPIES}</legend>
      <div className="col-sm-6">
        <FormGroup label={LABEL_BARCODE}>
          <span>{managedBook[Book.BARCODE] || LABEL_NA}</span>
        </FormGroup>
        <FormGroup label={LABEL_LOCATION}>
          <span>{managedBook[Book.LOCATION] || LABEL_NA}</span>
        </FormGroup>
        <FormGroup label={LABEL_COST}>
          <span>{managedBook[Book.COST] || LABEL_NA}</span>
        </FormGroup>
        <FormGroup label={LABEL_VENDOR}>
          <span>{managedBook[Book.VENDOR] || LABEL_NA}</span>
        </FormGroup>
      </div>
      <div className="col-sm-6">
        <FormGroup label={LABEL_DATE_OF_PURCHASED}>
          <span>{(managedBook[Book.DATE] && formatDateMedium(managedBook[Book.DATE])) || LABEL_NA}</span>
        </FormGroup>
        <FormGroup label={LABEL_CALL_NUMBER}>
          <span>{managedBook[Book.CALL_NUMBER] || LABEL_NA}</span>
        </FormGroup>
        <FormGroup label={LABEL_CURRENCY}>
          <span>{(managedBook[Book.CURRENCY] && currenciesForLabel(settings, managedBook[Book.CURRENCY])) || LABEL_NA}</span>
        </FormGroup>
        <FormGroup label={LABEL_FUND}>
          <span>{(managedBook[Book.FUND] && fundsForLabel(settings, managedBook[Book.FUND])) || LABEL_NA}</span>
        </FormGroup>
      </div>
    </fieldset>}
  </div>);
};

BookSummary.propTypes = {
  managedBook: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired
};
