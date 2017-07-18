import { LABEL_BOOK_INFORMATION, LABEL_BOOK_SUBJECTS, LABEL_SAVE } from '../../labels/';

import { BookInformation } from './edit-page/BookInformation';
import PropTypes from 'prop-types';
import React from 'react';
import Tab from 'react-bootstrap/lib/Tab';
import Tabs from 'react-bootstrap/lib/Tabs';

export const BookItemEdit = ({ onChange }) => {
    return (
        <form onChange={(event) => {
            event.preventDefault();
            onChange(event.target);
        }} className="form container-fluid">
            <Tabs defaultActiveKey={'bookInfo'}>
                <Tab title={LABEL_BOOK_INFORMATION} eventKey={'bookInfo'}><BookInformation /></Tab>
                <Tab title={LABEL_BOOK_SUBJECTS} eventKey={'bookSubjects'}></Tab>
            </Tabs>
            <div className="col-sm-12 form-group">
                <button className="btn btn-primary" type="submit">{LABEL_SAVE}</button>
            </div>
        </form>);
}

BookItemEdit.propTypes = {
    onChange: PropTypes.func.isRequired
};