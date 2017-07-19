import { LABEL_ADD_SUBJECT, LABEL_BOOK_INFORMATION, LABEL_BOOK_SUBJECTS, LABEL_SAVE } from '../../labels/';

import { BookInformation } from './edit-page/BookInformation';
import { ConnectSubjectsPage } from '../../containers/BookSubjectPage';
import PropTypes from 'prop-types';
import React from 'react';
import Tab from 'react-bootstrap/lib/Tab';
import Tabs from 'react-bootstrap/lib/Tabs';

export const BookItemEdit = ({ onChange, tabEventKey, onSelectTab, addSubject }) => {
    return (
        <form onChange={(event) => {
            event.preventDefault();
            onChange(event.target);
        }} className="form container-fluid">
            <div className="col-sm-12 form-group">
                <button className="btn btn-primary" type="submit">{LABEL_SAVE}</button>
                {tabEventKey === 'bookSubjects' ? <button onClick={addSubject} className="btn btn-success" type="button">{LABEL_ADD_SUBJECT}</button> : ''}
            </div>
            <Tabs onSelect={onSelectTab} id="bookItemEditTabs" activeKey={tabEventKey} defaultActiveKey={'bookInfo'}>
                <Tab title={LABEL_BOOK_INFORMATION} eventKey={'bookInfo'}><BookInformation /></Tab>
                <Tab title={LABEL_BOOK_SUBJECTS} eventKey={'bookSubjects'}><ConnectSubjectsPage /></Tab>
            </Tabs>
        </form>);
};

BookItemEdit.propTypes = {
    onSelectTab: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    tabEventKey: PropTypes.string.isRequired,
    addSubject: PropTypes.func.isRequired
};