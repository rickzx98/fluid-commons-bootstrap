import { DatePicker, FormGroup, TextInput, ImageUpload} from '../../common/';
import {
  LABEL_AUTHOR,
  LABEL_EDITION,
  LABEL_ISBN,
  LABEL_NUMBER_OF_PAGES,
  LABEL_PUBLISHED_DATE,
  LABEL_PUBLISHER,
  LABEL_SERIES_TITLE,
  LABEL_STATEMENT_OF_RESP,
  LABEL_SUB_TITLE,
  LABEL_TITLE,
  MESSAGE_TITLE_REQUIRED,
  MESSAGE_STATEMENT_OF_RESP_REQUIRED,
  MESSAGE_ISBN_REQUIRED,
  MESSAGE_PUBLISHER_REQUIRED,
  MESSAGE_AUTHOR_REQUIRED,
  MESSAGE_PUBLISHED_DATE_REQUIRED,
  LABEL_BOOK_COVER
} from '../../../labels/';

import {Book} from '../../../api/books/Book';
import PropTypes from 'prop-types';
import React from 'react';
export const BookInformation = ({ onChange, managedBook }) => {
  return (<span>
      <div className="col-sm-12 col-md-2">
        <ImageUpload value={managedBook[Book.IMAGE_URL]} name={Book.IMAGE_URL} label={LABEL_BOOK_COVER}/>
      </div>
        <div className={managedBook.update ? 'col-sm-5' : 'col-sm-12 col-md-10'}>
          <TextInput invalid={managedBook.invalidField === Book.TITLE} label={LABEL_TITLE} name={Book.TITLE}
                     required={true} message={MESSAGE_TITLE_REQUIRED}
                     value={managedBook[Book.TITLE]}/>

          <TextInput invalid={managedBook.invalidField === Book.STATEMENT_OF_RESPONSIBILITY}
                     message={MESSAGE_STATEMENT_OF_RESP_REQUIRED}
                     label={LABEL_STATEMENT_OF_RESP}
                     name={Book.STATEMENT_OF_RESPONSIBILITY} required={true}
                     value={managedBook[Book.STATEMENT_OF_RESPONSIBILITY]}/>

          <TextInput invalid={managedBook.invalidField === Book.ISBN}
                     message={MESSAGE_ISBN_REQUIRED}
                     label={LABEL_ISBN} name={Book.ISBN}
                     required={true}
                     value={managedBook[Book.ISBN]}/>

          <TextInput invalid={managedBook.invalidField === Book.PUBLISHER}
                     message={MESSAGE_PUBLISHER_REQUIRED}
                     label={LABEL_PUBLISHER} name={Book.PUBLISHER}
                     required={true}
                     value={managedBook[Book.PUBLISHER]}/>

          <TextInput invalid={managedBook.invalidField === Book.AUTHOR}
                     message={MESSAGE_AUTHOR_REQUIRED}
                     label={LABEL_AUTHOR} name={Book.AUTHOR}
                     required={true}
                     value={managedBook[Book.AUTHOR]}/>
          <FormGroup invalid={managedBook.invalidField === Book.PUBLISHED_DATE}
                     message={MESSAGE_PUBLISHED_DATE_REQUIRED}
                     label={LABEL_PUBLISHED_DATE} name={Book.PUBLISHED_DATE} required={true}>
            <DatePicker value={managedBook[Book.PUBLISHED_DATE]} name={Book.PUBLISHED_DATE} onChange={(value) => {
                    onChange({
                        name: Book.PUBLISHED_DATE,
                        value
                    });
                }}/>
          </FormGroup>
        </div>
    {managedBook.update &&
    <div className="col-sm-5">
      <TextInput label={LABEL_SUB_TITLE} name={Book.SUB_TITLE}
                 value={managedBook[Book.SUB_TITLE]}/>
      <TextInput label={LABEL_SERIES_TITLE} name={Book.SERIES_TITLE}
                 value={managedBook[Book.SERIES_TITLE]}/>
      <TextInput type="number" label={LABEL_NUMBER_OF_PAGES} name={Book.NUMBER_OF_PAGES}
                 value={managedBook[Book.NUMBER_OF_PAGES]}/>
      <TextInput label={LABEL_EDITION} name={Book.EDITION}
                 value={managedBook[Book.EDITION]}/>
    </div>}
    </span>);
};

BookInformation.propTypes = {
  onChange: PropTypes.func.isRequired,
  managedBook: PropTypes.object.isRequired
};
