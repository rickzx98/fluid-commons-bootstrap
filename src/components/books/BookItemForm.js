import { LABEL_BOOK_ADDITIONAL_INFO, LABEL_BOOK_COPIES, LABEL_BOOK_INFORMATION, LABEL_BOOK_SUBJECTS } from '../../labels/';

import { BookAdditionalInformation } from './edit-page/BookAdditionalInformation';
import { BookCopies } from './edit-page/BookCopies';
import { BookFormButtonControls } from './BookFormButtonControls';
import { BookInformation } from './edit-page/BookInformation';
import { ConnectSubjectsPage } from '../../containers/BookSubjectPage';
import PropTypes from 'prop-types';
import React from 'react';
import Tab from 'react-bootstrap/lib/Tab';
import Tabs from 'react-bootstrap/lib/Tabs';

export const BookItemForm = ({ onCancel, onChange, addNew, tabEventKey, onSelectTab, addSubject, managedBook, settings, saveManagedBook, onSearch }) => {
  return (
    <form noValidate onSubmit={event => {
      event.preventDefault();
      saveManagedBook();
    }} onChange={(event) => {
      onChange(event.target);
    }} className="form container-fluid">
      <BookFormButtonControls tabEventKey={tabEventKey} managedBook={managedBook} onCancel={onCancel} addSubject={addSubject}
        addNew={addNew}
        onSearch={onSearch} />
      <Tabs onSelect={onSelectTab} id="bookItemEditTabs" activeKey={tabEventKey} defaultActiveKey={'bookInfo'}>
        <Tab title={LABEL_BOOK_INFORMATION} eventKey={'bookInfo'}>
          <div className="book-form-tab"><BookInformation managedBook={managedBook} onChange={onChange} /></div>
        </Tab>
        <Tab title={LABEL_BOOK_SUBJECTS} eventKey={'bookSubjects'}>
          <div className="book-form-tab"><ConnectSubjectsPage /></div>
        </Tab>
        {managedBook.update && <Tab title={LABEL_BOOK_ADDITIONAL_INFO} eventKey={'bookAddInfo'}>
          <div className="book-form-tab">
            <BookAdditionalInformation managedBook={managedBook} settings={settings} />
          </div>
        </Tab>}
        {managedBook.update && <Tab title={LABEL_BOOK_COPIES} eventKey={'bookCopies'}>
          <div className="book-form-tab"><BookCopies onChange={onChange} managedBook={managedBook} settings={settings} />
          </div>
        </Tab>}
      </Tabs>
    </form>);
};

BookItemForm.propTypes = {
  managedBook: PropTypes.object.isRequired,
  onSelectTab: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  tabEventKey: PropTypes.string.isRequired,
  addSubject: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
  onCancel: PropTypes.func.isRequired,
  saveManagedBook: PropTypes.func.isRequired,
  addNew: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};
