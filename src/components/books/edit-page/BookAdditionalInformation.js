import { LABEL_GENERAL_NOTE, LABEL_INTERNET_RESOURCE, LABEL_READING_LEVEL, LABEL_RESOURCE_TYPE, LABEL_STUDY_PROGRAM, LABEL_SUMMARY, LABEL_TITLE_POINTS } from '../../../labels/';
import { Selector, TextArea, TextInput } from '../../common/';

import Book from '../../../api/books/Book';
import PropTypes from 'prop-types';
import React from 'react';
import { getReadingLevelForDropdown } from '../../../selectors/bookSelectors';
import { resourceTypesForDropdown } from '../../../selectors/settingsSelectors';

export const BookAdditionalInformation = ({ settings }) => {
    return (<span>
        <TextArea label={LABEL_SUMMARY} name={Book.SUMMARY} rows={4} />
        <TextInput label={LABEL_STUDY_PROGRAM} name={Book.STUDY_PROGRAM} />
        <TextInput label={LABEL_TITLE_POINTS} name={Book.TITLE_POINTS} />
        <TextInput label={LABEL_INTERNET_RESOURCE} name={Book.INTERNET_RESOURCE} />
        <TextArea label={LABEL_GENERAL_NOTE} name={Book.GENERAL_NOTE} rows={4} />
        <Selector options={getReadingLevelForDropdown()} label={LABEL_READING_LEVEL} name={Book.READING_LEVEL} />
        <Selector options={resourceTypesForDropdown(settings)} label={LABEL_RESOURCE_TYPE} name={Book.RESOURCE_TYPEADING_LEVEL} />
    </span>);
};

BookAdditionalInformation.propTypes = {
    settings: PropTypes.object.isRequired
};