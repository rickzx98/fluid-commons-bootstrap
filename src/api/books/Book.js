import {
  MESSAGE_AUTHOR_REQUIRED,
  MESSAGE_ISBN_REQUIRED,
  MESSAGE_PUBLISHED_DATE_REQUIRED,
  MESSAGE_PUBLISHER_REQUIRED,
  MESSAGE_TITLE_REQUIRED
} from '../../labels/';

export const Book = {
  BOOK_ID: '_id',
  SOURCE_ID: 'sourceId',
  TITLE: 'title',
  AUTHOR: 'author',
  SUB_TITLE: 'subTitle',
  IMAGE_URL: 'imageURL',
  IMAGE_ID: 'imageId',
  ISBN: 'isbn',
  ISBN13: 'isbn13',
  ISBN10: 'isbn10',
  PUBLISHER: 'publisher',
  SERIES_TITLE: 'seriesTitle',
  EDITION: 'edition',
  LCCN: 'lccn',
  SUBJECTS: 'subjects',
  STATEMENT_OF_RESPONSIBILITY: 'statementOfResponsibility',
  NUMBER_OF_PAGES: 'numberOfPages',
  PUBLISHED_DATE: 'publishedDate',
  SUMMARY: 'summary',
  STUDY_PROGRAM: 'studyProgram',
  TITLE_POINTS: 'titlePoints',
  INTERNET_RESOURCE: 'internetResource',
  GENERAL_NOTE: 'generalNote',
  READING_LEVEL: 'readingLevel',
  RESOURCE_TYPE: 'resourceType',
  BARCODE: 'barcode',
  LOCATION: 'location',
  VENDOR: 'vendor',
  DATE: 'date',
  CALL_NUMBER: 'callNumber',
  CURRENCY: 'currency',
  FUND: 'fund',
  COST: 'cost',
  LIBRARY: 'library',
  RATING: 'rating'
};
export const Validate = (book) => {
  if (book) {
    if (!book[Book.TITLE]) {
      return getValidation(Book.TITLE, MESSAGE_TITLE_REQUIRED);
    } else if (!book[Book.ISBN10] || !book[Book.ISBN13]) {
      return getValidation(Book.ISBN, MESSAGE_ISBN_REQUIRED);
    } else if (!book[Book.PUBLISHER]) {
      return getValidation(Book.PUBLISHER, MESSAGE_PUBLISHER_REQUIRED);
    } else if (!book[Book.AUTHOR]) {
      return getValidation(Book.AUTHOR, MESSAGE_AUTHOR_REQUIRED);
    } else if (!book[Book.PUBLISHED_DATE]) {
      return getValidation(Book.PUBLISHED_DATE, MESSAGE_PUBLISHED_DATE_REQUIRED);
    }
  }
};

export function getValidation(field, message) {
  return {
    field,
    message
  };
}
